# 05 - System animacji

## Zasada nadrzędna

> Nie próbujemy zrobić wszystkiego jedną biblioteką.

Trzy narzędzia, trzy jasno rozdzielone zakresy. Wybór narzędzia nie jest kwestią gustu.

## Podział odpowiedzialności

### CSS - reveal-e, wejście hero, hover

Wszystko, co da się opisać jako „stan A → stan B” albo „pojawia się, gdy wejdzie w viewport”,
robimy w CSS ([ADR-0009](decisions/0009-css-reveals.md)).

- Reveal to keyframe z `utilities.css` przełączany klasą plus jeden `IntersectionObserver`
  (`src/hooks/use-in-view.ts`).
- **Hero nie ma JavaScriptu w ogóle** - sekwencja wejścia to opóźnienia keyframe'ów, więc
  pierwszy ekran maluje się razem z dokumentem.
- Hover buttona i wiersza listy to zwykłe `transition`.

Powód jest zmierzony, nie stylistyczny: biblioteka animacji na ścieżce krytycznej oznacza treść
startującą od `opacity: 0`, która pojawia się dopiero po jej sparsowaniu. To jest większość tego,
co użytkownik nazywa „strona wolno się wczytuje”.

### Motion for React - interakcje

Import **zawsze** z `motion/react` (`framer-motion` jest zablokowany lintem).

Zakres: modale i panele (`AnimatePresence`, animacja wyjścia), menu mobilne, drawer,
animacje layoutu, gesty, count-up, delikatny parallax.

Motion jest ładowany **leniwie** i nie wchodzi do bundla początkowego stron publicznych.

### GSAP + ScrollTrigger - sekwencje scroll-driven

Zakres: jeden, maksymalnie dwa charakterystyczne momenty scrollowe na całą stronę.

**Nie używamy GSAP do hovera ani do reveala.**

Reguły:

- **GSAP ładujemy leniwie**, przez `loadGsap()` z `@/lib/motion/gsap` - nigdy importem z paczki
  w module scope. Import statyczny wciąga ~128 KB gzip na ścieżkę krytyczną każdej wizyty
  ([ADR-0005](decisions/0005-lazy-gsap.md)). Lint pilnuje tego przez `no-restricted-imports`;
  jedyny plik z wyjątkiem to sam loader.
- **Nie używamy `useGSAP()`** i nie mamy zależności `@gsap/react` - ten hook importuje GSAP
  statycznie, więc omijałby leniwe ładowanie.
- Cleanup przez `gsap.context()` w `useEffect`: `context.revert()` w funkcji czyszczącej.
  Każdy `ScrollTrigger` musi zostać zabity przy unmount.
- Efekt musi obsłużyć unmount w trakcie pobierania biblioteki - wzorzec z flagą `cancelled`.
- Przy `prefers-reduced-motion` nie wołamy `loadGsap()` wcale. Nie ma animacji, nie ma pobierania.

### Scroll - natywny, bez biblioteki

**Nie używamy Lenis ani żadnego innego smooth-scrolla** ([ADR-0004](decisions/0004-native-scroll.md)).

- Przewijanie jest natywne. Nie ma kodu między użytkownikiem a scrollem.
- **Nie ma też `scroll-behavior: smooth`.** CSS nie daje kontroli nad czasem, więc skok z hero do
  formularza animuje się ponad sekundę i czyta jak zawieszenie. Kotwice skaczą natychmiast;
  zostaje `scroll-padding-top`, żeby cel nie schował się pod navbarem.
- ScrollTrigger działa z natywnym scrollem bez `scrollerProxy` i bez dzielenia zegara.

## Primitives animacyjne

W `src/components/motion/`. Sekcja **komponuje** te elementy, nie pisze własnych `initial`/`animate`.

| Komponent                    | Zastosowanie                                                                  | Czym animuje |
| ---------------------------- | ----------------------------------------------------------------------------- | ------------ |
| `Reveal`                     | Domyślne wejście: fade + krótki lift, raz, przy 30% widoczności.              | CSS + IO     |
| `RevealGroup` + `RevealItem` | Sekwencja ze staggerem. Grupa trzyma observera, `RevealItem` dostaje `index`. | CSS + IO     |
| `TextReveal`                 | Nagłówek wjeżdżający liniami z maski. Linie podajemy jawnie.                  | CSS + IO     |

Powyżej jest minimum z templatki. Kolejne primitives (count-up, parallax, overlay z animacją
wyjścia, custom scroll story) dochodzą wtedy, gdy specyfikacja sekcji ich wymaga - i wtedy, gdy
mają **drugie** użycie. Efekt żyjący w jednej sekcji zostaje w tej sekcji.

`prefers-reduced-motion` dla animacji CSS żyje w jednym bloku `utilities.css`. Komponenty nie
przekazują flagi propsami tam, gdzie animacja jest w CSS.

## Tokeny czasu i easingu

`src/lib/motion/tokens.ts` (JS) ↔ `src/styles/theme.css` + `base.css` (CSS).
Nic nie wymyśla własnej krzywej ani własnego czasu. `tokens.test.ts` pilnuje zgodności obu stron.

### Intensywność - nie rozkładamy jej równomiernie

Jeżeli każda sekcja dostanie text reveal + parallax + fade, efekt premium znika.
Motion jest zasobem, który się wydaje, nie warstwą nakładaną na wszystko.

Przydziel budżet w specyfikacji sekcji: dwie, maksymalnie trzy sekcje na stronie dostają
★★★★☆ i wyżej. Reszta ma proste reveal-e. To jest decyzja, nie przypadek.

### Wartości, których się trzymamy

- Reveal: `y: 24–32 px`, nigdy `y: 100 px`. Duży dystans czyta się jak szablon.
- Zoom obrazu na hover: `1 → 1.025`. Nigdy `1 → 1.2`.
- Parallax: 20–60 px (czyli 5–8% wysokości dużego kadru) i **różny dla różnych zdjęć**.
  Identyczny zakres wszędzie czyta się jak efekt globalny.
- Przycisk nigdy nie skaluje się na hover: zmienia kolor, unosi się maksymalnie o 1 px,
  a strzałka przesuwa się o 4 px.
- Odsłonięcie zdjęcia: maska / `clip-path` (`inset(0 0 100% 0)` → `inset(0 0 0 0)`).
  Alternatywnie subtelne `scale(1.04 → 1)`. Nigdy `1.25 → 1`.
- Wiersz listy na hover: linia akcentu rozjeżdża się od lewej przez `scaleX` (nie `width`),
  strzałka +4 px, tło o jeden stopień. 180–250 ms.

### Timing

| Rodzaj                                        | Czas           | Token                |
| --------------------------------------------- | -------------- | -------------------- |
| Przycisk, hover, focus, zmiana stanu          | 180–220 ms     | `DURATION.fast`      |
| Drobne stany, wiersz listy                    | 180–250 ms     | `DURATION.fast`      |
| Drawer, modal, menu                           | 320–450 ms     | `DURATION.base/slow` |
| Hover obrazu                                  | 300–450 ms     | `DURATION.slow`      |
| Reveal (bazowy i tekstowy)                    | 550–900 ms     | `DURATION.reveal`    |
| Odsłonięcie dużego zdjęcia maską              | 900–1100 ms    | `DURATION.reveal`+   |
| Hero timeline                                 | maks. ~1,5–2 s | `DURATION.hero`      |
| Przejście między podstronami (jeżeli w ogóle) | 200–300 ms     | `DURATION.fast`      |

Animacja musi się skończyć, zanim zacznie irytować.
Użytkownik nie może czekać, aż strona pozwoli mu się skontaktować.

### Jeden moment scrollowy na stronę główną

Dopuszczamy **maksymalnie jeden** charakterystyczny moment scroll-driven - ma opowiadać markę,
nie demonstrować bibliotekę. Kandydat wskazuje specyfikacja sekcji, nie improwizacja.

### Easing

Unikamy `ease-in-out` wszędzie. Kierunek: **szybki start + miękkie wyhamowanie**.
Dostępne: `outExpo`, `outQuint`, `outQuart`, `inOutQuart`. Więcej niż te cztery to już bałagan.

### Stagger

`STAGGER.tight` 0,06 s · `STAGGER.base` 0,09 s · `STAGGER.loose` 0,14 s.

## Reduced motion - wymóg, nie dodatek

Kontrakt jest dwuczęściowy:

**CSS**: globalne skrócenie animacji i transition w `base.css`, plus blok w `utilities.css`,
który gasi reveal-e i wejście hero (te animacje startują od `opacity: 0`, więc trzeba im
jawnie powiedzieć, żeby pominęły stan początkowy).

**JS** (`useReducedMotion()` z `@/hooks/use-reduced-motion`) - jedno źródło prawdy dla Motion,
GSAP i własnego kodu.

Gdy zwraca `true`:

| Wyłączamy                              | Zostawiamy                               |
| -------------------------------------- | ---------------------------------------- |
| parallax                               | proste przejścia `opacity`               |
| transformacje sterowane scrollem       | natychmiastowe pokazanie treści końcowej |
| count-up (pokazujemy wartość docelową) | działający interfejs                     |
| custom cursor, magnetic                |                                          |

Każdy nowy komponent animacyjny **musi** przyjąć ten flag i mieć ścieżkę bez transformacji.
Warianty w `src/lib/motion/variants.ts` przyjmują `reduceMotion` i same degradują się do fade.

## Mobile

Nie przenosimy desktopowych efektów na mobile.

Wyłączone na mobile: custom cursor, mocny parallax, wszystko zależne od hover,
skomplikowane timeline'y.
Zostaje: reveal tekstu, fade/slide, formularz, subtelny parallax, animacja menu.

Bramkujemy przez `useIsDesktop()` i `useHasFinePointer()` z `@/hooks/use-media-query`.
**Hover nigdy nie jest jedyną drogą do informacji** - na mobile ta sama treść musi być widoczna
bez interakcji.

## Wydajność

- Animujemy **tylko `transform` i `opacity`**. Nigdy `width`, `height`, `top`, `left`, `margin`,
  `padding`, `box-shadow` w pętli klatek.
- Nie uruchamiamy animacji dla elementów poza viewportem.
- Reveal **nigdy** nie odtwarza się ponownie przy scrollu w górę - powtarzająca się animacja
  czyta się jak błąd. Observer jest rozłączany po pierwszym trafieniu.
- `will-change` tylko przy zmierzonym problemie i tylko na czas animacji.

## Gesty a scroll strony

Każda powierzchnia przeciągana poziomo dzieli palec ze scrollem strony. Obowiązują dwie zasady:

1. **`touch-pan-y`, nigdy `touch-none`.** `touch-action: none` oddaje elementowi wszystkie gesty,
   więc palec, który wyląduje na zdjęciu, nie przewinie już strony. Przy elemencie szerokim na całą
   kolumnę oznacza to, że strony nie da się przescrollować dalej. `pan-y` zostawia pionowy pan
   przeglądarce, a gesty poziome i tak docierają do handlera.
2. **`preventDefault()` tylko dla wskaźnika, który nie jest palcem.** Wywołane na `pointermove`
   przy `pointerType === 'touch'` odbiera przeglądarce scroll, który właśnie oddaliśmy przez `pan-y`.

Z tego samego powodu dotknięcie nie jest jeszcze przeciągnięciem: pod myszą reagujemy natychmiast,
przy palcu czekamy, aż gest okaże się poziomy.

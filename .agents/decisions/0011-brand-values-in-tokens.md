# ADR-0011 - Wartości brandowe w tokenach (Editorial Engineering)

- **Status:** Accepted
- **Data:** 2026-08-21

## Kontekst

Templatka dostarcza **strukturę** tokenów z neutralnymi wartościami `TODO(brand)`. Etap 2
bootstrapu wymaga wpisania realnych wartości i zamknięcia dyskusji o wyglądzie jednym
zapisem.

Wejściem jest [`intake/01-design-direction-input.md`](../intake/01-design-direction-input.md)

- kierunek **Editorial Engineering** z pełną paletą, skalą typograficzną, siatką, systemem
  promieni, regułami UI, fotografii i motion.

Dokument wejściowy jest precyzyjny, ale powstał jako art direction, nie jako zestaw tokenów
przechodzących WCAG. Trzy jego wartości nie mają wymaganego kontrastu na zadeklarowanych
powierzchniach, a jedna reguła (granica pola formularza) jest poniżej progu dla elementów
UI. Templatka wymaga AA dla wszystkiego, co jest czytane, i liczy to na `/system` z samych
tokenów - więc rozjazd trzeba było rozstrzygnąć, nie przemilczeć.

## Decyzja

1. **Kierunek i wartości z dokumentu wejściowego wchodzą do `src/styles/theme.css`** jako
   jedyne źródło prawdy: ciepła baza `#f3f0e9`, druga powierzchnia `#e9e5dc`, ciemny tryb
   `#11120f` / `#1a1b18`, hairline `#d5d1c7` / `#30312d`, Signal Orange `#ff5a36` (hover
   `#e94c2c`), Instrument Sans + IBM Plex Mono, shell 1360 px, rytm sekcji 128/160/200 px,
   promienie 0 / 6 / 8 / 12 px, easing `cubic-bezier(0.22, 1, 0.36, 1)`.
2. **Display wszędzie w wadze 500.** Wagi 700–900 są poza systemem.
3. **Dwie rodziny, jedna instancja Instrument Sans.** `--font-brand-display`
   i `--font-brand-sans` wskazują na tę samą zmienną `next/font`; kontrast typograficzny
   robi skala, nie druga rodzina. Subset `latin-ext` jest obowiązkowy.
4. **Cztery odstępstwa od dokumentu wejściowego, wszystkie wymuszone kontrastem:**
   - `content-secondary` = `#616259` zamiast `#696A64`. Wartość z dokumentu daje 4,34:1 na
     `canvas-subtle`, czyli proza na drugiej powierzchni byłaby poniżej AA.
   - `content-tertiary` = `#6a6b64`, a `#93938C` z dokumentu przesunięte do
     `content-ghost`. `#93938C` ma 2,72:1 na canvasie - to nie jest kolor, którym można
     ustawić 11-pikselową metadaną. Konsekwencja dla BUILD TRACE: **etykieta, która coś
     znaczy, jest `content-tertiary`; wyłącznie graficzny marker może być
     `content-ghost`.** Palety nie da się rozciągnąć na trzy czytelne stopnie na jasnym
     tle i to jest przyjęte ograniczenie: `content-tertiary` wolno używać na `canvas`
     i `surface`, na `canvas-subtle` / `canvas-deep` metadana idzie w
     `content-secondary`.
   - **Nowy token `accent-strong` = `#b03614`.** Signal Orange na jasnym tle ma 2,73:1,
     więc „małe fragmenty typografii w akcencie” z dokumentu byłyby nieczytelne. Rola
     została rozdzielona: `accent` to wypełnienia, markery i tekst **na ciemnym**
     (6,06:1), `accent-strong` to akcent jako tekst/link/podkreślenie na jasnym (5,45:1).
     Z tego samego powodu `accent-contrast` jest **ciemny** (`#11120f`, 6,06:1 na
     akcencie) - jasny tekst na Signal Orange daje 2,73:1.
   - **Nowy token `line-control` = `#85827a`.** Border pola formularza jest jedyną
     informacją o tym, że to kontrolka, więc musi mieć 3:1 (WCAG 1.4.11); brandowa
     hairline ma 1,34:1 i zostaje przy roli dekoracyjnej. Border secondary buttona
     pozostaje `line-strong` (`#b9b6ad`) - tam identyfikację nosi etykieta tekstowa.
5. **Focus ring = `accent-hover`.** To jedyna wartość z rodziny akcentu, która ma ≥3:1
   jednocześnie na ciepłym canvasie (3,33:1) i w trybie ciemnym (4,95:1), a ring musi być
   widoczny również w sekcji CodeBros.
6. **`danger` = `#8e1f2f`** (ciemne wino), świadomie poza paletą marki: przy pomarańczowym
   akcencie czerwony komunikat błędu czytałby się jak CTA.
7. **Trzy tokeny wyprowadzone**, bo dokument definiuje mniej stopni niż wymaga struktura
   templatki: `canvas-deep` `#e5e1d7` (trzecia powierzchnia - na tyle jasna, że proza
   nadal ma AA), `line-invert-strong` `#45463f`, `content-invert-tertiary` `#8a8b83`.
   Powierzchnie `surface` / `surface-raised` to ciepłe off-white (`#f8f6f1` / `#fdfcfa`),
   nigdy czysta biel.
8. **Tokeny odwrotnego tonu zapisujemy jako hex, nie `rgba()`** - tabela kontrastu na
   `/system` potrafi policzyć tylko kolor, który widzi.
9. **Nowy promień `radius-marker` (6 px)** dla małych funkcjonalnych elementów (badge,
   chip, rzadka karta): dokument dopuszcza karty maksymalnie z tym promieniem, a rola
   między `control` (8 px) i `image` (4 px) w templatce nie istniała.
10. **Skala czasów przemapowana na dokument:** `slow` 480 → **440 ms** (drawer), `hero`
    1600 → **1100 ms** (górna granica „large transition” z dokumentu), `STAGGER.loose`
    0,14 → **0,12 s** (stagger hero 80–120 ms). Lustro w `src/lib/motion/tokens.ts`
    zaktualizowane w tym samym zadaniu.
11. **BUILD TRACE wchodzi jako utility**, nie jako komponent: `trace-rule`
    i `trace-rule-shown` w `utilities.css` (linia rysuje się `scaleX(0 → 1)`, raz),
    z gałęzią `prefers-reduced-motion`.
12. **Primary button jest ciemny, nie pomarańczowy** - akcent pojawia się na hover. Cały
    przycisk w Signal Orange zużyłby budżet akcentu (5–8% powierzchni) w jednym miejscu.
13. **Favicon rysuje przecięcie BUILD TRACE**, nie monogram. Logo pozostaje `TODO(brand)`;
    do tego czasu obowiązuje lockup typograficzny opisany w
    [01-brand-and-design.md](../01-brand-and-design.md#logo).

## Konsekwencje

- Warstwa wizualna jest zamknięta: spór o kolor, krój, promień czy czas animacji rozstrzyga
  ten ADR i `theme.css`, nie gust w code review.
- `/pl/system` liczy 18 par kontrastu z tokenów. Dwie pary są **świadomie** poniżej AA
  i tak opisane: `content-ghost` (dekoracja) i `accent` na jasnym tle (wypełnienia
  i markery, nigdy tekst). Każdy inny wiersz `fail` to błąd.
- Autor copy i implementacji ma o jeden token więcej do rozważenia w dwóch miejscach:
  akcent jako tekst (`accent-strong`) i akcent jako plama (`accent`). To cena wybranego
  koloru.
- Paleta ma tylko dwa czytelne stopnie szarości na jasnym tle. Hierarchia musi więc
  wynikać ze **skali i przestrzeni**, nie z kolejnych odcieni tekstu - co zresztą zgadza
  się z kierunkiem.
- Zmiana bazowego koloru tła wymaga zmiany w czterech miejscach naraz (`--color-canvas`,
  `viewport.themeColor`, `manifest`, `--navbar-scrolled-surface`) - jest to zapisane
  w komentarzach obu plików.
- Fotografia pozostaje najsłabszym ogniwem: system jest gotowy, zdjęć nie ma. Sekcje
  zależne od zdjęć są zablokowane w briefie, a nie wypełniane stockiem.

## Rozważone alternatywy

- **Wpisać wartości z dokumentu 1:1, z niezgodnym kontrastem.** Odrzucone: reguła AA
  liczona na `/system` jest twardą częścią kontraktu, a metadana 11 px przy 2,7:1 jest
  nieczytelna dla realnych użytkowników, nie tylko dla audytu.
- **Rozjaśnić tekst i przyciemnić tło, żeby zmieścić trzy stopnie szarości.** Odrzucone:
  ciepła, jasna baza `#f3f0e9` jest jednym z dwóch najbardziej charakterystycznych
  elementów kierunku.
- **Zmienić akcent na ciemniejszy pomarańcz w całym systemie.** Odrzucone: „Signal Orange”
  ma być energiczny; przyciemnienie tylko wariantu tekstowego zachowuje charakter tam, gdzie
  akcent działa jako plama.
- **Dodać bibliotekę ikon.** Odrzucone - językiem marki jest typografia i strzałka, a stack
  jest zamknięty (ADR-0001).
- **Lenis / smooth scroll do storytellingu.** Odrzucone na tym etapie (ADR-0004); wejdzie
  tylko z osobnym ADR, jeżeli konkretny scroll-driven moment naprawdę tego wymaga.

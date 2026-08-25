# 01 - Marka i kierunek wizualny

> **Wypełnione 2026-08-21** na podstawie
> [`intake/01-design-direction-input.md`](intake/01-design-direction-input.md).
> Wartości mają odpowiednik w tokenach (`src/styles/theme.css`) - dokument i kod nie mogą
> mówić dwóch różnych rzeczy. Odstępstwa od dokumentu wejściowego (wszystkie wymuszone
> kontrastem AA) są wypisane tutaj i uzasadnione w
> [ADR-0011](decisions/0011-brand-values-in-tokens.md).
>
> Reguły opisane bez odniesienia do tego projektu obowiązują w każdym projekcie z templatki
> i nie są kwestią gustu.

## Kierunek

- **Nazwa kierunku:** **Editorial Engineering** - digital editorial spotyka precyzyjny
  system techniczny.
- **W jednym zdaniu:** ciepłe, editorialne powierzchnie i duża typografia na wierzchu,
  siatka, linie konstrukcyjne i monospace'owa metadata pod spodem - _creative on the
  surface, engineering underneath_.
- **Mantra projektowa:** **Less decoration. More direction.** (rozwinięcie: _less
  template, more character; less tech theatre, more engineering_)
- **Zasada nadrzędna kierunku:** **The interface itself is proof of capability.** Strona
  jest pierwszym case study - ma pokazywać design awareness, jakość frontendu, UX, motion
  i precyzję, bez zdania „tworzę nowoczesne strony z dobrym UX”.
- **Referencje:** `BRAK` - dokument wejściowy nie zawiera konkretnych stron
  referencyjnych. Kierunek jest zdefiniowany **antywzorcem** (niżej) i to on rozstrzyga
  spory. Jeżeli pojawią się referencje, dopisujemy je tutaj z informacją, **co konkretnie**
  z nich bierzemy.

### Antywzorzec - ustalony

Strona **nie** może wyglądać jak:

- portfolio developera z Dribbble ani portfolio designera (piękne, ale niepraktyczne),
- strona software house'u,
- landing page SaaS-a,
- startup AI,
- gotowy template Framera,
- demonstracja możliwości GSAP.

Wykluczone środki wizualne (lista zamknięta, z dokumentu wejściowego): gradient blobs,
glassmorphism, glow, neon, ogromne zaokrąglone karty, pille wszędzie, karty z ikonami,
trzykolumnowy „SaaS feature grid”, chmura logotypów pod hero, orbit animation, marquee bez
uzasadnienia, wymyślone liczniki social proof, animowany terminal z kodem, stock,
pseudo-3D floating screenshots, animowanie każdego elementu, cztery rodzaje promienia, pięć
kolorów akcentowych, sticky scroll na pół strony dla efektu, automatyczny carousel opinii.

### Trzy ryzyka, które ten kierunek ma neutralizować

1. **Portfolio zamiast sprzedaży.** Efekt wizualny nigdy nie może utrudnić odpowiedzi na:
   _co robisz · czy robisz coś dla firmy takiej jak moja · czy to dowieziesz · ile to
   kosztuje · jak zaczynamy_.
2. **Przesadna techniczność.** Strona nie jest kierowana do developerów. Lista stacku na
   pierwszym ekranie jest błędem - stack pojawia się głębiej, jako dowód.
3. **Zbyt „designer portfolio”.** Menu czytelne, CTA oczywiste, copy czytelne, case studies
   eksplorowalne, formularz prosty. **UX wygrywa z eksperymentem.**

### Filtr przed dodaniem czegokolwiek

1. Czy pomaga użytkownikowi zrozumieć ofertę?
2. Czy wzmacnia charakter Wojciecha / CodeBros?
3. Czy dodałbym to, gdyby nie było aktualnie modne?

Trzy razy „nie” = element wypada.

## Element charakterystyczny

- **Co to jest:** **BUILD TRACE** - system cienkich linii konstrukcyjnych i technicznych
  adnotacji, jak oznaczenia dokumentacji projektowej: `01 / SERVICES`,
  `02 / SELECTED WORK`, `SYSTEM_02`, `PROJECT / 2026`, `BUILD → SHIP`, `WP / CB`, numery
  sekcji, małe indeksy, punkty przecięcia linii.
- **Gdzie występuje:** eyebrow każdej sekcji (`SectionLabel`), separatory między rekordami
  usług i realizacji, metadata przy projekcie i cenie, przejście do CodeBros (linia
  rysująca się od lewej), stopka, favicon.
- **Gdzie nie występuje:** wewnątrz akapitów, na zdjęciach, w formularzu (poza etykietami),
  i **na mobile w wersji dekoracyjnej** - tam zostają tylko te adnotacje, które coś
  znaczą.
- **Granica:** to detal, nie „blueprint aesthetic”. Jeżeli po zakryciu treści strona
  wygląda jak rysunek techniczny, trace jest za mocny.

Implementacja: `trace-rule` + `trace-rule-shown` w `src/styles/utilities.css` (linia rysuje
się `scaleX(0 → 1)` raz, przy wejściu w viewport) oraz `SectionLabel` dla numeracji.

## Logo

- **Stan:** `BRAK` - logo nie istnieje. Rozwiązanie tymczasowe: **lockup typograficzny** -
  `Wojciech Pawlik` w Instrument Sans 500, tracking `-0.02em` (token `display-card`), obok
  descriptor `Web & Product Engineer` w IBM Plex Mono `meta`, uppercase. CodeBros zapisujemy
  jako `CodeBros` w tym samym kroju; wariant mono `CB` służy wyłącznie jako marker trace.
- **Warianty i pliki:** `TODO(brand)` - brak. Favicon (`src/app/icon.svg`) rysuje
  przecięcie BUILD TRACE (dwie linie + pomarańczowy punkt), nie monogram: wymyślony
  monogram byłby gorszy niż oczywisty placeholder.
- **Pole ochronne i minimalny rozmiar:** lockup nie schodzi poniżej 120 px szerokości; pole
  ochronne = wysokość znaku „W”.
- **Na jakich tłach wolno go użyć:** `canvas`, `canvas-subtle`, `canvas-invert`. Na zdjęciu
  tylko na spokojnym fragmencie kadru, nigdy bez zapasu kontrastu.

Zakazane zawsze: rozciąganie, obracanie, cienie, gradienty na znaku, obrys, zmiana
proporcji lockupu, umieszczanie na niespokojnym zdjęciu bez podkładu.

## Motyw

- **Baza:** jasna - ciepła złamana biel `#f3f0e9` (`--color-canvas`). Czysta biel jest
  wykluczona: `#ffffff` czyta się produktowo/SaaS-owo, ciepła baza czyta się editorialnie.
- **Przełamanie tonalne:** ciemny tryb `#11120f` (`--color-canvas-invert`) - **to jest tryb
  CodeBros**. Sekcja CodeBros plus stopka, opcjonalnie jeden storytelling moment w case
  study. Docelowo **10–20% wysokości strony**. Pięć przełamań = żadne nie działa.
- **Co się zmienia w trybie ciemnym:** tylko ton i widoczność metadanych (mono trochę
  mocniejsze). **Nie zmienia się** typografia, siatka, promienie ani podstawowe UI -
  CodeBros to inny tryb tej samej marki, nie osobna identyfikacja.

## Kolor

Wartości i komentarze: `src/styles/theme.css`. Tabela kontrastu liczona z tokenów:
`/pl/system`.

- **Baza / powierzchnie:** `canvas #f3f0e9` · `canvas-subtle #e9e5dc` (panele, formularze,
  fragmenty case studies - nie co druga sekcja) · `canvas-deep #e5e1d7` (trzeci stopień,
  wyprowadzony) · `surface #f8f6f1` / `surface-raised #fdfcfa` (ciepłe off-white, nigdy
  czysta biel) · `canvas-invert #11120f` · `canvas-invert-surface #1a1b18` (bardzo
  oszczędnie).
- **Linie:** `line #d5d1c7` (domyślna hairline) · `line-strong #b9b6ad` (secondary button,
  mocniejszy separator) · `line-control #85827a` (granica pola formularza - jedyna linia,
  która musi mieć 3:1, bo jest informacją, nie ozdobą) · `line-invert #30312d` ·
  `line-invert-strong #45463f`.
- **Tekst:** `content #11120f` · `content-secondary #616259` (proza) ·
  `content-tertiary #6a6b64` (metadata - tylko na `canvas` i `surface`) ·
  `content-ghost #93938c` (dekoracja i graficzny trace, świadomie poniżej AA) ·
  `content-dim #b4b3aa`. Na ciemnym: `content-invert #f3f0e9` ·
  `content-invert-secondary #a7a79f` · `content-invert-tertiary #8a8b83`.
- **Akcent:** **Signal Orange `#ff5a36`** · hover `#e94c2c` · `accent-strong #b03614` ·
  `accent-contrast #11120f` (tekst **na** akcencie) · `accent-subtle #f6e2d9`.
- **Kolor błędu:** `danger #8e1f2f` - ciemne wino. Przy pomarańczowym akcencie czerwony
  błąd czytałby się jak CTA; ten kolor nie ma jak zostać pomylony z akcją.

Dlaczego ten akcent: Signal Orange jest technologiczny, energiczny i lekko industrialny -
nie jest ani niebieskim kliszą SaaS-a, ani neonową zielenią prezentacji o AI. Sygnalizuje
„inżynieria”, a nie „software marketing”.

### Reguła akcentu

- **Budżet: 5–8% powierzchni wizualnej.** Maksymalnie **jeden** mocny element akcentowy
  w jednym widoku (plus CTA w navbarze).
- Akcent zawsze coś **znaczy**: akcja, stan aktywny, wybrana opcja, jeden marker trace,
  jedna liczba do zapamiętania.
- **Test kasacji:** po usunięciu akcentu z całej strony kompozycja musi nadal działać.
  Jeżeli nie działa - winna jest kompozycja, nie brak koloru.
- Zakazane: gradienty, poświaty, glow, gradient borders, wielokolorowe sekcje.
- **Podział ról wewnątrz akcentu** (wymuszony kontrastem, ADR-0011):
  - `accent` - wypełnienia, markery, hover, tekst **na ciemnym tle** (6,06:1). Nigdy mały
    tekst na jasnym tle: 2,73:1.
  - `accent-strong` - akcent jako **tekst, link, podkreślenie na jasnym tle** (5,45:1).
  - `accent-hover` - hover wypełnienia **oraz focus ring**: jedyna wartość z tej rodziny,
    która ma ≥3:1 na obu tonach.
  - `accent-contrast` - tekst na akcencie jest **ciemny**; jasny tekst na Signal Orange
    daje 2,73:1 i jest wykluczony.

Wszystkie pary koloru przechodzą AA - sprawdzasz na `/system`, gdzie kontrast jest
**liczony z tokenów**, nie deklarowany.

### Odstępstwa od dokumentu wejściowego

| Dokument mówi                            | W tokenach jest                                                        | Dlaczego                                                                                                |
| ---------------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| secondary text `#696A64`                 | `#616259`                                                              | `#696A64` daje 4,34:1 na `canvas-subtle` - proza na drugiej powierzchni nie miała AA                    |
| tertiary text `#93938C` dla metadanych   | `content-tertiary #6a6b64`, a `#93938C` przesunięty do `content-ghost` | 2,72:1 to nie jest kolor do czytania 11-pikselowej metadanej; `#93938C` zostaje dla trace'u graficznego |
| accent do „małych fragmentów typografii” | dodatkowy `accent-strong #b03614`                                      | Signal Orange na jasnym tle ma 2,73:1 - jako tekst jest nieczytelny                                     |
| border pola formularza „subtelny 1px”    | `line-control #85827a`                                                 | granica kontrolki musi mieć 3:1 (WCAG 1.4.11); hairline `#d5d1c7` ma 1,34:1                             |
| radius inputów `6px` (sekcja FORM)       | `radius-control 8px`                                                   | dokument w sekcji RADIUS podaje 8px dla inputów i buttonów - wybrano wersję systemową                   |

## Typografia

- **Display:** **Instrument Sans**, waga **500**, tracking od `-0.02em` do `-0.055em`
  w zależności od stopnia. Wagi 700–900 są **poza systemem** - na tych rozmiarach czytają
  się jak krzyk, a kierunek jest pewny, nie głośny.
- **Tekst:** Instrument Sans, waga 400. `body 16–18px`, `body-lg 20–26px` przy mierze
  720 px.
- **Utility (etykiety, numeracja, metadane):** **IBM Plex Mono**, `label 12px` /
  `meta 11px`, tracking `0.04em`, uppercase tylko w krótkich etykietach. To warstwa BUILD
  TRACE i nic więcej.
- **Skąd fonty:** `next/font/google`, subset `latin` + **`latin-ext`** (polskie znaki),
  `display: swap`, self-hosted. Display i sans to **jedna instancja** Instrument Sans -
  kontrast robi skala (96 px nagłówek obok 11 px mono), nie druga rodzina.

Skala w tokenach: `display-statement` (48→118 px, jeden na stronę) · `display-hero`
(46→96 px) · `display-section` (36→68 px) · `display-project` (27→40 px, rekordy usług
i projektów) · `display-card` · `numeric` (ceny editorialnie) · `quote` (waga 400).

Reguły niezależne od marki: maksymalnie dwie rodziny (trzecia tylko jako mono); nic
czytanego poniżej 15 px; mono nigdy dla prozy; nagłówki wieloliniowe łamiemy **jawnie**
(tablica linii do `Headline` / `TextReveal`); stopnie display muszą być wyraźnie różne.

Dodatkowo w tym projekcie: brak wyśrodkowanych nagłówków (domyślnie **left align**), brak
uppercase dla całych nagłówków, brak akapitów szerszych niż `max-w-measure` (720 px), duża
typografia zawsze sąsiaduje z małą metadaną - to jest źródło kontrastu skali.

## Layout

- **Siatka:** 12 kolumn desktop / 8 tablet / 4 mobile. Shell treści `1360px`
  (`--container-shell`), maksimum strony `1600px` (`--container-wide`), miara prozy
  `720px` (`--container-measure`).
- **Padding boczny:** 20 px mobile → 24 px tablet → 32–48 px desktop
  (`--spacing-gutter`). **Gap kolumn:** 12 → 20 → 24–32 px (`--spacing-grid`).
- **Rytm pionowy:** `section` 128 px (standard), `section-lg` 160 px (między rozdziałami),
  `section-xl` 200 px (duże przejście, np. wejście w CodeBros), `section-sm` / `tight` dla
  bloków wewnątrz sekcji. Mobile nie schodzi poniżej 88–112 px dla pełnej sekcji.
- **Rytm strony:** **quiet → bold → quiet → visual → technical → quiet → conversion.**
  Jeżeli każda sekcja jest efektowna, żadna nie jest.
- **Kompozycje sekcji w użyciu:** (1) editorial opener - label + duży nagłówek + akapit
  w mierze; (2) **rekordy w rzędach** rozdzielone liniami (usługi, cennik, lista
  realizacji); (3) duże media 60–80% szerokości + metadata obok; (4) pełnoekranowy dark
  interlude (CodeBros); (5) quote na dużej przestrzeni; (6) formularz na `canvas-subtle`.
- **Gęstość UI:** sekcje marketingowe niska, case studies średnia, CodeBros/engineering
  nieco większa, formularz bardzo prosta.

Reguły niezależne od marki: trzy sekcje z rzędu o tej samej kompozycji zamieniają stronę
w szablon; **nie wszystko jest kartą**; akapit zawsze w `max-w-measure`; `bleed` jest
decyzją, nie domyślnym stanem media.

Dodatkowo w tym projekcie - **rows over cards**: karta jest dopuszczalna tylko wtedy, gdy
semantycznie grupuje równorzędne dane, i wtedy ma border-top, minimalne tło, **brak cienia**
i promień maksymalnie `radius-marker` (6 px). Domyślną strukturą listy usług i realizacji
jest rekord: numer `01`, nazwa (`display-project`), jedno zdanie, strzałka po prawej,
oddzielenie linią.

### Promienie i granice

Promienie: `0` domyślnie · `radius-marker` 6 px (badge, chip, rzadka karta) ·
`radius-control` 8 px (przyciski, pola) · `radius-panel` 12 px (modal, drawer) ·
`radius-image` 4 px. Brak dużych zaokrągleń jest częścią odróżnienia od estetyki AI/SaaS.

Granice: **borders są częstsze niż shadows** - cienie w tym systemie nie istnieją. Preferowane
top/bottom border i pojedyncze separatory, nie prostokąt wokół wszystkiego.

## UI - decyzje zapisane w kodzie

| Element            | Decyzja                                                                                                                                     |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Primary button     | tło `content`, tekst `content-invert`, 48 px, `radius-control`; **hover przechodzi na Signal Orange** z ciemnym tekstem, 200 ms             |
| Secondary button   | transparent, border `line-strong`, hover subtelne ciemne tło. Nie stawiamy wszędzie dwóch dużych przycisków obok siebie                     |
| Text link          | preferowana forma CTA w treści: `Zobacz projekt →` / `View project ↗`, podkreślenie animuje się na hover                                    |
| Navbar             | pełna szerokość containera, 80 px; **nie floating pill**. Po scrollu 64 px, tło `rgb(243 240 233 / 0.92)`, blur 12 px, dolny border, 250 ms |
| Pola formularza    | 52–56 px, tło `surface`, border `line-control`, focus: border `accent` **plus** globalny focus ring; etykiety zawsze widoczne, bez floating |
| Wybór w formularzu | duży tekst + border + zmiana tła + mały pomarańczowy wskaźnik. Bez checkboxów w stylu dashboardu                                            |
| Badge              | tylko z funkcją (`CODEBROS`, `CASE STUDY`, `AI`): mono 11 px, border, minimalny padding                                                     |
| Cennik             | editorialnie: nazwa + `numeric` + linia. Nigdy trzy pricing cards                                                                           |
| Modal / drawer     | **side drawer** 480–560 px (mobile pełna szerokość), `translateX`, 440 ms, backdrop max 0,25 opacity, bez bounce                            |
| Opinie             | duży quote, 2–3 na całej stronie, bez carouselu                                                                                             |
| Case studies       | jeden projekt na dużą przestrzeń, media 60–80% szerokości, duży tytuł, metadata obok. Nie trzy małe karty w rzędzie                         |
| Ikony              | nie są językiem marki. Preferujemy tekst, strzałkę, numer. Jeżeli ikona: outline, stroke 1,5 px, 18–20 px, jedna rodzina                    |

## Motion

Zasada: **motion reveals structure, it does not decorate it.** Podział bibliotek i reguła
reduced motion: [05-animation-system.md](05-animation-system.md), ADR-0009.

- **Easing:** primary `--ease-out-quint` `cubic-bezier(0.22, 1, 0.36, 1)`, secondary
  `--ease-out-expo`, mikrointerakcje `ease-out`.
- **Czasy (tokeny):** hover `fast` 200 ms · UI `base` 320 ms · drawer `slow` 440 ms ·
  reveal `reveal` 700 ms · największe przejście `hero` 1100 ms. **Nic nie animuje się
  dłużej.**
- **Section reveal:** `translateY(28px)` + opacity, 700 ms, stagger 60–100 ms. Nie samo
  opacity 0 → 1.
- **Hero:** clip reveal linia po linii, `translateY(105%) → 0`, stagger `loose` 120 ms.
- **Image reveal:** kontener `overflow: hidden`, start `scale(1.04)`, maska od dołu lub
  lewej, ~1100 ms, koniec `scale(1)`.
- **Project hover (desktop):** obraz `scale(1 → 1.015)`, 500–700 ms, strzałka +4 px,
  opcjonalnie metadata na akcent. Nigdy `scale(1.1)`.
- **Parallax:** maks. 20–40 px na dużych obrazach, **wyłączony na mobile**.
- **Budżet GSAP + ScrollTrigger - maksymalnie cztery momenty na całej stronie:** hero,
  Selected Work, przejście do CodeBros, jeden moment w case study. Przydział zapisujemy
  w specyfikacjach sekcji, nie w trakcie implementacji.
- **Przejście do CodeBros:** jasne tło ustępuje ciemnemu, linia BUILD TRACE rysuje się od
  lewej, pojawia się `CODEBROS / SYSTEM MODE`. Bez glitcha, bez terminala, bez matrixa.
- **Lenis:** poza stackiem (ADR-0001, ADR-0004). Wejdzie tylko z nowym ADR i tylko jeżeli
  storytelling scrollowy naprawdę na tym zyska.
- **Reduced motion:** wyłączone parallax, scrub, skalowanie obrazów, przejścia stron.
  Zostaje natychmiastowe opacity i krótki feedback UI.
- **Formularz:** wybrana opcja - tło + border + wskaźnik. Submit może zmienić copy na
  `Wysłane ✓`. Bez confetti.

## Fotografia - połowa efektu wizualnego

Fotografia jest tu obowiązkowa: portfolio złożone wyłącznie ze screenshotów nie pokaże, że
za marką stoi człowiek - a to jest cała przewaga tej marki.

### Zakazane typy zdjęć

Niezależnie od branży: stockowe uściski dłoni, ludzie w garniturach przy laptopie, sztuczne
uśmiechy do kamery, watermarki, niska rozdzielczość, kolaże, ramki, tekst wypalony w pliku,
chaotyczne tło tam, gdzie ma iść tekst.

Dodatkowo w tym projekcie: stockowi programiści, zdjęcia kodu z Unsplash, neonowe
serwerownie, ręce na klawiaturze w niebieskim świetle, fake terminale, 3D chrome blobs,
generowane gradienty, „AI brains”, roboty, wireframe globes, przypadkowe kształty 3D.

### Co ma być na zdjęciach

- **Człowiek:** Wojciech przy pracy - dokumentalnie, nie korporacyjnie. Na części kadrów nie
  patrzy w obiektyw.
- **Para (CodeBros):** Wojciech i Michał w naturalnym momencie pracy - rozmowa, whiteboard,
  jeden pokazuje coś drugiemu. Szeroki kadr, przestrzeń. Dopuszczalne cz-b lub lekka
  desaturacja.
- **Środowisko i detal:** stanowisko pracy, monitor, notatnik. Kod może być tylko
  nieostrym elementem środowiska, nigdy dekoracją z czytelnym blokiem.
- **Produkt:** realne ekrany interfejsów, crop, scroll capture, detail zoom. UI pojawia się
  **bezpośrednio na stronie**, nie w mockupie MacBooka.

### Hero

- **Kadr:** portret `4:5`, waist-up lub 3/4, po jednej stronie kompozycji.
- **Miejsce na tekst:** przeciwna strona kadru musi być spokojna (ściana, cień, przestrzeń)
  - tam siada H1 i CTA.
- Hero jest LCP strony: `priority`, zarezerwowane wymiary, sensowny `alt`.

### Światło i grading - jeden język

- **Temperatura:** neutralna do lekko ciepłej, spójna z `canvas`.
- **Kontrast i nasycenie:** kontrast średnio wysoki, saturacja minimalnie obniżona, mocne
  naturalne światło boczne (okno), cienie widoczne, grain bardzo subtelny.
- **Czego nie robimy:** filtrów à la aplikacja mobilna, mocnych winiet, HDR-owych obwódek.

### Kompozycja i formaty

Proporcje w użyciu: `4:5` (portret), `3:2` (editorial), `16:10` (feature projektu), `16:9`
(szeroki kadr / CodeBros), `1:1` (detal). **Nie ta sama proporcja wszędzie** - zmiana kadru
jest częścią rytmu. Docelowe szerokości plików: `scripts/prepare-images.mjs` (`TARGETS`).

### Shot list do sesji

| #   | Ujęcie         | Proporcja       | Gdzie na stronie              | Uwagi                                                                |
| --- | -------------- | --------------- | ----------------------------- | -------------------------------------------------------------------- |
| 01  | Hero portrait  | `4:5`           | hero strony głównej, „O mnie” | waist-up / 3-4, światło boczne z okna, spokojna strona na tekst      |
| 02  | Environment    | `3:2`           | „O mnie”, editorial break     | przy stanowisku pracy, nie patrzy w kamerę                           |
| 03  | Detail         | `4:3`           | „Jak pracuję”, detal sekcji   | dłonie / notatnik / monitor / fragment stanowiska                    |
| 04  | Portrait close | `1:1` lub `4:5` | „O mnie”, stopka              | bardziej osobisty kadr                                               |
| 05  | CodeBros       | `16:9`          | sekcja CodeBros (dark)        | Wojciech + Michał, szeroki kadr, naturalny moment; cz-b dopuszczalne |
| 06  | CodeBros work  | `3:2`           | sekcja CodeBros / podstrona   | praca przy whiteboardzie, rozmowa                                    |
| 07  | Detail / code  | `1:1` lub `3:2` | sekcja techniczna             | monitor jako środowisko, kod nieostry - nie dekoracja                |

Fotograf dostaje tę tabelę plus akapit „Światło i grading”. Zdjęć jeszcze nie ma -
sekcje 05 („O mnie”) i 07 (CodeBros) są tym zablokowane
([brief](00-project-brief.md#czego-brakuje--pytania-do-właściciela)).

## Ikony

- **Źródło / styl:** brak biblioteki ikon w stacku i nie dodajemy jej bez ADR. Językiem
  marki jest tekst, strzałka (`→`, `↗`), numer i typografia. Jeżeli ikona jest naprawdę
  potrzebna: outline, stroke 1,5 px, siatka 18–20 px, jedna rodzina, jako inline SVG.
- Nie pakujemy każdej usługi w osobną ikonę - strzałka wystarcza.
- Jedna rodzina, jedna grubość, jeden rozmiar siatki. Ikona nigdy nie jest jedynym nośnikiem
  informacji. Nie mieszamy ikon liniowych z wypełnionymi.

## Mobile

Mobile jest **uproszczeniem**, nie pomniejszeniem desktopu: **mobile retains character, not
complexity.**

- **Co się upraszcza:** dekoracyjne adnotacje BUILD TRACE znikają (zostają te, które coś
  znaczą), siatka spada do 4 kolumn, parallax wyłączony, sticky storytelling ograniczony,
  hover-only interakcje zastąpione stanem widocznym od razu.
- **Co zostaje bez zmian:** duża typografia (display 48–58 px), duże case studies, rytm
  sekcji nie schodzi poniżej 88–112 px, primary CTA zawsze w zasięgu.
- Reguły niezależne od marki: żadna informacja nie jest dostępna wyłącznie przez hover, CTA
  ma minimum 44 px wysokości, ciężkie efekty scrollowe są wyłączone.
- **Uwaga specyficzna dla tej marki:** na małym ekranie najważniejszym CTA **nie** jest
  telefon (usługa jest projektowa), a formularz „Opowiedz mi o projekcie” -
  [ADR-0010](decisions/0010-personal-brand-and-two-tier-architecture.md).

## Weryfikacja kierunku

1. `/pl/system` - tokeny, primitives, **liczona** tabela kontrastu, BUILD TRACE.
2. Strona na 360, 390, 768, 1024, 1440, 1920 px. Brak poziomego scrolla.
3. `prefers-reduced-motion` włączone.
4. Test kasacji akcentu: wyłącz `--color-accent` na `content` i sprawdź, czy kompozycja
   nadal stoi.
5. `pnpm check`.

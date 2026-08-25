# 02 - System stylów

Ten dokument opisuje **architekturę** warstwy wizualnej: gdzie mieszkają wartości, jak nazywamy
tokeny, czego nie wolno wpisać w komponent. Konkretne wartości należą do
[01-brand-and-design.md](01-brand-and-design.md) i do `src/styles/theme.css`.

## Jak stylujemy

**Tailwind CSS v4, utility-first, bez wyjątków.**

Kolejność wyboru narzędzia - pierwsze, które wystarczy:

1. Utility Tailwinda oparte na tokenie (`bg-surface`, `text-display-section`, `py-section`).
2. Istniejący primitive z `src/components/ui/`.
3. Nowy token w `src/styles/theme.css`, potem punkt 1.
4. Custom utility w `src/styles/utilities.css` - tylko jeżeli Tailwind fizycznie nie potrafi tego
   wyrazić.
5. Styl inline - **tylko** dla wartości wyliczanych w runtime (pozycja parallaxu, opóźnienie
   animacji, wartość z danych).

Czego nie robimy: CSS Modules, styled-components / emotion, plików `.css` per komponent,
`!important`, arbitrary values z surową liczbą tam, gdzie istnieje token
(`text-[64px]` zamiast `text-display-section`).

## Gdzie co leży

| Plik                       | Zawartość                                                                                                                   |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `src/styles/globals.css`   | Punkt wejścia. Import Tailwinda, `@source`, import pozostałych plików. Importowany raz, w layoucie.                         |
| `src/styles/theme.css`     | **Wszystkie tokeny.** Kolor, typografia, layout, promienie, easing.                                                         |
| `src/styles/base.css`      | Domyślne dla dokumentu: `html`, `body`, nagłówki, focus, selection, reduced motion. Skala `--duration-*`, `--font-brand-*`. |
| `src/styles/utilities.css` | Custom utilities i keyframe'y (`bleed`, `no-scrollbar`, `mask-row`, reveal-e).                                              |

## Tokeny

Tokeny są **jedynym źródłem prawdy** dla wartości wizualnych. Komponent nie zawiera hexów,
pikselowych rozmiarów typografii ani krzywych bezier.

Templatka dostarcza **strukturę i nazwy** tokenów z neutralnymi wartościami oznaczonymi
`TODO(brand)`. Etap 2 bootstrapu wypełnia wartości. Nazwy zmieniamy tylko wtedy, gdy brakuje
**roli**, a nie wtedy, gdy nie podoba się słowo.

### Role, które muszą istnieć

**Powierzchnie**

```
canvas  canvas-subtle  canvas-deep  surface  surface-raised  canvas-invert
line  line-strong  line-invert  line-invert-strong
```

`canvas` to tło strony; `surface` i `surface-raised` to kolejne stopnie wyniesienia. Głębia
pochodzi z małych kroków między stopniami, nie z cieni. Hairline (`line`) prawie zawsze bije cień.

**Hierarchia tekstu - cztery stopnie, nie dwa**

```
content            nagłówki, treść krytyczna
content-secondary  tekst akapitowy - DOMYŚLNY dla prozy
content-tertiary   metadane, etykiety, podpisy
content-ghost      wyłącznie dekoracja i separatory
content-dim        stan spoczynkowy tekstu animowanego (nie kolor do czytania)
```

Bez stopni środkowych każdy tekst czyta się albo jak nagłówek, albo jak `disabled`.
Odpowiedniki na odwrotnym tonie: `content-invert`, `content-invert-secondary`,
`content-invert-tertiary`.

**Akcent i stany**

```
accent  accent-hover  accent-contrast  accent-subtle  danger
```

`accent-contrast` to jedyny dozwolony kolor tekstu **na** akcencie. `danger` jest funkcjonalny
i świadomie poza paletą marki - błąd formularza nie może czytać się jak CTA.

**Typografia display - pięć stopni, wyraźnie różnych**

```
display-statement  display-hero  display-section  display-project  display-card
numeric  quote
```

Każdy stopień deklaruje `--text-*` oraz warianty `--line-height`, `--letter-spacing`
i `--font-weight`. Duże stopnie mają ciasny `line-height` (0,9–1,0) i ujemny tracking - inaczej
wielki nagłówek rozpada się na osobne słowa.

Stopień `display-hero` (i większy) ograniczamy **także wysokością viewportu**
(`clamp(..., min(Xvw, Yvh), ...)`), bo na niskim oknie laptopa sam człon szerokości wypycha CTA
poniżej ekranu.

**Typografia tekstu i utility**

```
body-lg  body  body-sm      proza - nic poniżej 15px
label  meta  button          utility: etykiety, metadane, przyciski
```

**Layout**

```
--container-shell  --container-wide  --container-measure  --breakpoint-3xl
--spacing-section-xl  --spacing-section-lg  --spacing-section
--spacing-section-sm  --spacing-section-tight
--spacing-gutter  --spacing-grid
```

Pięć stopni odstępu sekcji istnieje po to, żeby je **przeplatać**. Jedna wartość wszędzie czyta
się tanio niezależnie od tego, jak jest duża.

**Promienie**

```
--radius-control  --radius-panel  --radius-image
```

Jeden system, nie promień per komponent.

**Motion**

```
--ease-out-expo  --ease-out-quint  --ease-out-quart  --ease-in-out-quart
--duration-instant  --duration-fast  --duration-base
--duration-slow  --duration-reveal  --duration-hero
```

Easingi żyją w `theme.css`, czasy w `base.css` (nie są przestrzenią motywu Tailwinda, więc
konsumujemy je jako `duration-[var(--duration-base)]`). Oba mają lustro w
`src/lib/motion/tokens.ts`, a `tokens.test.ts` pilnuje zgodności - dwie rozjeżdżające się skale
dają dwa języki animacji na jednej stronie.

### Czego nie robimy z tokenami

- Nie dodajemy tokena „na przyszłość”. Token bez użycia to martwy kod.
- Nie nazywamy tokenów od wartości (`--color-green-500`), tylko od **roli** (`--color-accent`).
- Nie duplikujemy wartości między `theme.css` i TypeScriptem, poza świadomym lustrem motion.
- Token z wartością `rgba()` nie da się sprawdzić w tabeli kontrastu - dla takiego trzeba znać
  kolor skomponowany i opisać go w dokumentacji.

## Primitives UI

`src/components/ui/` zawiera elementy **bez wiedzy o domenie**. Templatka dostarcza minimum:

| Primitive       | Rola                                                              |
| --------------- | ----------------------------------------------------------------- |
| `Container`     | pozioma rama treści (`shell` / `measure`)                         |
| `Section`       | rytm pionowy i ton jednej sekcji                                  |
| `SectionLabel`  | mono eyebrow z numeracją (`01 / ETYKIETA`)                        |
| `Headline`      | nagłówek wieloliniowy z jawnym łamaniem linii                     |
| `SectionHeader` | powtarzalny opener sekcji: label + headline + opcjonalny akapit   |
| `Button`        | `Button`, `ButtonLink`, `CtaArrow`                                |
| `Field`         | etykieta + kontrolka + komunikat błędu, powiązane atrybutami aria |
| `Overlay`       | modal/panel: `role="dialog"`, Escape, blokada scrolla, focus trap |

Reguły:

- Komponent używany **tylko** w jednej sekcji zostaje przy tej sekcji. Do `ui/` awansuje
  z drugim użyciem.
- Primitive nie zna treści ani danych. Dostaje je propsami.
- Nowy primitive musi pokazać się na `/system`.

## `cn()`

`src/lib/utils/cn.ts` łączy klasy i rozwiązuje konflikty Tailwinda (last-wins). Ponieważ skale
`text-*` są własne, `tailwind-merge` trzeba o nich **powiedzieć** - inaczej wrzuci
`text-display-section` i `text-accent` do jednej grupy i po cichu wyrzuci jedną z nich.

Dodajesz token `text-*` → dopisujesz go do `FONT_SIZES` albo `TEXT_COLORS` w `cn.ts`
**i** dopisujesz przypadek do `cn.test.ts`.

## Warstwy i stacking

- `Section` ma `isolate` - sekcja nie może pomalować sąsiada parallaxem ani elementem pinowanym.
- Konsekwencja: overlaye muszą portalować się do `body`, bo z wnętrza sekcji nigdy nie przykryją
  navbara.
- Kolejność: treść < sticky navbar < overlay < skip link po sfokusowaniu.

## Full-bleed

Pełna szerokość to `bleed` z `utilities.css` albo element **poza** `Container`. Nigdy
`width: 100vw` wpisane w komponent: przy widocznym scrollbarze to poziomy scroll na całym
dokumencie.

## Strona `/system`

`/[locale]/system` jest wewnętrzną referencją design systemu i **jedynym** miejscem, gdzie
oglądamy tokeny obok siebie. Wyłączona z indeksu metadanymi (`noindex`), nie przez `robots.txt` -
te dwa mechanizmy się wykluczają ([08](08-accessibility-and-performance.md#seo)).

Nowy token albo primitive bez wpisu na `/system` jest niedokończony.

To **jedyna** strona, która może mieć teksty wpisane wprost w komponencie: jest narzędziem
deweloperskim, nigdy nie zobaczy jej użytkownik, a tłumaczenie jej etykiet byłoby pracą nad copy,
którego nikt nie czyta. Poza `/system` reguła „zero tekstu w komponencie” nie ma wyjątków.

### Kontrast liczony, nie deklarowany

Sekcja kontrastu na `/system` czyta `--color-*` **z `theme.css`** i liczy stosunki na żywo
(`src/lib/styles/color-tokens.ts` + `src/lib/utils/contrast.ts`). Druga kopia palety
w TypeScripcie rozjechałaby się i certyfikowała kolory, których nikt nie wysyła.

Wymóg: AA (4,5:1 dla tekstu, 3:1 dla dużego tekstu i elementów UI). Token, który świadomie nie
przechodzi AA, wolno używać **wyłącznie** dekoracyjnie i musi być tak opisany.

## Weryfikacja

Zmieniasz warstwę wizualną → sprawdzasz w tej kolejności:

1. `/system` - tokeny, primitives, kontrast.
2. Strona na 360, 390, 768, 1024, 1440, 1920 px. Brak poziomego scrolla.
3. `prefers-reduced-motion` włączone.
4. `pnpm check`.

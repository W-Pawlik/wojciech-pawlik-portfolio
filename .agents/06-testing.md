# 06 — Testy jednostkowe

## Narzędzia

**Vitest + React Testing Library + jsdom.**

```
pnpm test            # jednorazowo
pnpm test:watch      # tryb watch
pnpm test:coverage   # z pokryciem i progami
```

Konfiguracja: `vitest.config.mts`, setup: `vitest.setup.ts`.
Vitest działa z `globals: false` — API testowe **importujemy jawnie** z `vitest`.
To dlatego `vitest.setup.ts` ma ręczne `afterEach(cleanup)`: automatyczny cleanup RTL rejestruje się
tylko przy globalach.

## Filozofia

> Testujemy zachowanie, które ma znaczenie dla użytkownika albo dla poprawności danych.
> Nie testujemy tego, że React renderuje diva.

Test ma odpowiadać na pytanie: **co się zepsuje, jeśli ktoś to zmieni?**
Jeżeli odpowiedź brzmi „nic” — test nie jest potrzebny.

## Co testujemy obowiązkowo

| Warstwa                | Zakres                                                                         | Przykład                             |
| ---------------------- | ------------------------------------------------------------------------------ | ------------------------------------ |
| `lib/validation/`      | Każda ścieżka schematu: happy path, każdy błąd, normalizacja                   | `contact.test.ts`                    |
| `lib/utils/`           | Formatowanie, w tym pułapki lokalizacyjne; matematyka kontrastu                | `format.test.ts`, `contrast.test.ts` |
| `lib/motion/`          | Kształt wariantów **i degradacja przy reduced motion**; zgodność tokenów z CSS | `variants.test.ts`, `tokens.test.ts` |
| `lib/seo/`             | Tytuły, canonical, spójność OG ↔ Twitter, wymagany origin produkcyjny          | `metadata.test.ts`                   |
| `hooks/`               | Subskrypcja, reakcja na zmianę, **cleanup przy unmount**                       | `use-media-query.test.ts`            |
| `components/ui/`       | Rola dostępnościowa, obsługa zdarzeń, nadpisywanie klas                        | `button.test.tsx`                    |
| `components/sections/` | Logika interakcji, nie wygląd                                                  | krok formularza, drag separatora     |
| `i18n/`                | Parzystość kluczy między słownikami i danymi (TS tego nie złapie)              | `dictionaries.test.ts`               |
| pliki konwencji Next   | `robots`, `sitemap`, `proxy` — reguły SEO, które nie mogą się po cichu zmienić | `sitemap.test.ts`                    |

## Czego nie testujemy

- Wartości tokenów („czy accent to `#XYZ`”) — to test tautologiczny.
- Snapshotów całych sekcji. Snapshot łamie się przy każdej zmianie stylu i nic nie mówi.
- Że Motion animuje. To jest zadanie biblioteki, a w jsdom animacje i tak nie liczą klatek.
- Wyglądu. Do tego jest `/system` i przegląd w przeglądarce, nie assert na klasie CSS.
- Server Components `async`. Vitest ich nie obsługuje — logikę wyciągamy do funkcji i testujemy funkcję.

## Jak piszemy testy

- Plik testu **obok** pliku źródłowego: `button.tsx` + `button.test.tsx`.
- `describe` = jednostka, `it` = jedno zdanie o zachowaniu. Nazwa opisuje zachowanie,
  nie implementację.
  - źle: `it('calls setState')`
  - dobrze: `it('does not fire while disabled')`
- Zapytania RTL w kolejności: `getByRole` → `getByLabelText` → `getByText`.
  `getByTestId` to ostatnia deska ratunku; `data-testid` w kodzie produkcyjnym wymaga komentarza
  z uzasadnieniem.
- Interakcje przez `userEvent`, nie `fireEvent`.
- Jeden assert na koncepcję. Kilka `expect` w jednym `it` jest OK, jeżeli opisują to samo zachowanie.
- Test zawsze deterministyczny. Bez `Date.now()`, bez `Math.random()`, bez `setTimeout`
  w oczekiwaniu na coś — używamy `await waitFor` / `findBy*`.
- Regresja: naprawiasz błąd → dodajesz test, który go łapie, z komentarzem, na co jest strażnikiem.

## Stuby środowiska

`vitest.setup.ts` dostarcza to, czego jsdom nie ma: `matchMedia`, `IntersectionObserver`,
`ResizeObserver`. Stub `matchMedia` zakłada się **tylko gdy nie istnieje** — test, który sprawdza
media queries, podstawia własną implementację (patrz `use-media-query.test.ts`).

Nie dodawaj stubów do pojedynczych plików testowych, jeżeli dotyczą całego środowiska.
Idą do setupu.

## Co mierzymy pokryciem

Progi (`vitest.config.mts`) obowiązują **wyłącznie warstwy logiczne**:

```
include: src/lib/**, src/hooks/**
lines 90% · functions 90% · statements 90% · branches 85%
```

Powód: tam mieszka logika, którą da się sensownie zmierzyć. Sekcje prezentacyjne są sprawdzane
testami komponentowymi tam, gdzie mają zachowanie — bez sztywnego progu, który zmuszałby do
pisania testów bez wartości tylko po to, żeby podbić liczbę.

**Pokrycie nie jest celem.** Test bez asercji o zachowaniu podbija liczbę i nic nie chroni.

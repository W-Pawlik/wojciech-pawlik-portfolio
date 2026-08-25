# 07 - Jakość kodu i przebieg pracy

## Bramka jakości

```
pnpm check
```

Uruchamia po kolei: `format:check` → `lint` → `typecheck` → `test`.
**Zadanie nie jest skończone, dopóki to nie przechodzi.**

Pojedyncze polecenia:

| Polecenie                          | Rola                                                                 |
| ---------------------------------- | -------------------------------------------------------------------- |
| `pnpm dev`                         | serwer developerski (Turbopack)                                      |
| `pnpm build`                       | build produkcyjny - jedyny pełny test typów w plikach konwencji Next |
| `pnpm format`                      | Prettier zapisuje zmiany                                             |
| `pnpm lint` / `pnpm lint:fix`      | ESLint                                                               |
| `pnpm typecheck`                   | `next typegen && tsc --noEmit`                                       |
| `pnpm test` / `pnpm test:coverage` | Vitest                                                               |

Zasada: **nie wyłączamy reguły, żeby przejść bramkę.** Reguła jest błędem projektowym albo kod
jest błędny. Jeżeli wyłączenie jest jedynym wyjściem - `eslint-disable-next-line` z komentarzem
_dlaczego_, nigdy blokowo na plik.

`pnpm build` wymaga `NEXT_PUBLIC_SITE_URL` w produkcji (patrz `.env.example`).

## Definition of Done

Zadanie jest skończone, gdy **wszystkie** punkty są spełnione:

1. `pnpm check` przechodzi.
2. `pnpm build` przechodzi.
3. Zachowanie sprawdzone w przeglądarce: desktop **i** mobile (DevTools ≤ 390 px).
4. Sprawdzone z włączonym `prefers-reduced-motion`
   (DevTools → Rendering → Emulate CSS prefers-reduced-motion).
5. Nawigacja klawiaturą działa, focus jest widoczny, kolejność Tab jest logiczna.
6. Brak poziomego scrolla na żadnej szerokości.
7. Brak błędów i ostrzeżeń w konsoli.
8. Nowe tokeny i primitives widoczne na `/system`.
9. Nowa logika ma testy (patrz [06-testing.md](06-testing.md)).
10. Nowa trasa jest w `src/data/routes.ts`, więc trafia do nawigacji i sitemapy.
11. Treść jest we **wszystkich** słownikach projektu - brakujący klucz to błąd kompilacji, ale
    przetłumaczony byle jak przechodzi. Sprawdź, że tłumaczenie jest zdaniem, nie kalką.
12. Brak martwego kodu, brak `TODO` bez wskazania na ADR, `specs/`, `TODO(brief)` lub `TODO(brand)`.
13. Dokumentacja w `.agents/` zaktualizowana, jeżeli zmieniła się zasada, a nie tylko implementacja.

## Przebieg pracy nad sekcją

```
1. Specyfikacja      → .agents/specs/NN-nazwa.md, zaakceptowana przed kodem
2. Dane              → src/data/<nazwa>.ts (typowane, as const, bez tekstów)
3. Copy              → src/i18n/dictionaries/*
4. Struktura         → sekcja jako Server Component, semantyczny HTML, treść w źródle
5. Styl              → tokeny i primitives; brak nowych wartości bez tokena
6. Interaktywność    → wydzielony 'use client' tylko dla tego, co reaguje
7. Animacja          → primitives z components/motion, tokeny z lib/motion
8. Reduced motion    → ścieżka bez transformacji
9. Mobile            → uproszczenie, nie skalowanie
10. Testy            → logika interakcji
11. /system          → nowe tokeny i primitives
12. pnpm check
```

Kolejność ma znaczenie: **najpierw działający, semantyczny HTML, potem animacja.**
Strona musi mieć sens bez JavaScriptu i bez animacji - u lokalnej firmy to nie ćwiczenie
teoretyczne, tylko klient na słabym LTE.

## Specyfikacja sekcji

Plik w `.agents/specs/`, minimalnie:

- Funkcja sekcji w lejku - patrz [00-project-brief.md](00-project-brief.md#główny-lejek).
- Copy - dokładne teksty, we wszystkich językach projektu.
- Struktura HTML i hierarchia nagłówków.
- Wymagane dane i ich kształt.
- Zachowanie na desktopie i na mobile.
- Animacje: co, jakim narzędziem, jakim tokenem czasu.
- Wariant reduced motion.
- Co jest testowane.

Szablon: [specs/README.md](specs/README.md).

## Przegląd kodu

Listy kontrolne: [checklists/code-review.md](checklists/code-review.md),
[checklists/section-implementation.md](checklists/section-implementation.md),
[checklists/new-route.md](checklists/new-route.md),
[checklists/launch.md](checklists/launch.md).

## Commity

Conventional Commits, tryb rozkazujący, po angielsku:

```
feat(services): add service list with per-row pricing
fix(contact-form): re-validate payload in the server action
refactor(navbar): extract mobile menu into a client island
docs(agents): tighten the reduced-motion contract
test(validation): cover phone numbers with the +48 prefix
chore(deps): pin next to 16.3.0
```

Zasady:

- Jeden commit = jedna zmiana logiczna. Refaktor osobno od nowej funkcji.
- Commit musi przechodzić `pnpm check`. Nie commitujemy stanu „naprawię w następnym”.
- Nie commitujemy `.env.local`, `coverage/`, `.next/`.

## ADR

Decyzje architektoniczne trafiają do `.agents/decisions/` jako `NNNN-krotki-tytul.md`.

ADR piszemy, gdy: dodajemy lub usuwamy zależność, zmieniamy granicę serwer/klient,
zmieniamy podział odpowiedzialności między bibliotekami animacyjnymi, wybieramy dostawcę
zewnętrznego, zatwierdzamy warstwę wizualną, albo świadomie łamiemy zasadę z `.agents/`.

Decyzję zmienioną **zastępujemy nowym ADR** ze statusem `Supersedes NNNN`.
Starego nie edytujemy.

## Aktualizacja tej dokumentacji

`.agents/` opisuje stan faktyczny, nie intencje.
Zmieniasz zasadę → aktualizujesz dokument w tym samym zadaniu.
Rozjazd między kodem a `.agents/` traktujemy jak błąd, nie jak dług.

Zmiana, która dotyczy **każdego** projektu z tej templatki (reguła architektury, reguła lintu,
poprawka w primitives), powinna wrócić do repozytorium templatki. Zmiana specyficzna dla
klienta - nigdy.

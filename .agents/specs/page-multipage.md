# Podstrony — wspólny system multipage

- **Funkcja w lejku:** szczegół i kwalifikacja po wejściu z landingu lub wyszukiwarki
- **Funkcja sprzedażowa:** każda trasa wyjaśnia jedną intencję bez kopiowania sekcji strony głównej
- **Podstrony:** `/work`, `/services`, `/pricing`, `/about`, `/contact` oraz detale usług i realizacji
- **Budżet motion:** ★☆☆☆☆

## Założenia

Wszystkie strony wielostronicowe otwierają się wspólnym `PageHeader`: etykieta, nagłówek,
krótki wstęp i opcjonalny powrót. Zawartość pod nagłówkiem jest dedykowana trasie. Sekcje
landingu nie są używane jako layout stron indeksowych.

## Struktura

- strony indeksowe: `PageHeader` + jedna dedykowana sekcja treści,
- detale usług: `PageHeader` z powrotem do usług + problem, zakres i dopasowanie,
- case study: własny układ projektu, ale z tym samym rytmem otwarcia,
- wszystkie trasy mają dokładnie jeden `h1` i link do kolejnego kroku.

## Język

Polski słownik pozostaje polski poza nazwami marki i powszechnie używanymi terminami
technicznymi (`CMS`, `AI`, `backend`, `frontend`, `CodeBros`). Angielski słownik ma pełne,
niezależne tłumaczenie; nie używamy angielskich etykiet jako skrótów w polskiej wersji.

## Testy

Istniejące testy parzystości słowników i `pnpm check`; wizualnie sprawdzić wspólny nagłówek
na szerokości 390 px i desktopie.

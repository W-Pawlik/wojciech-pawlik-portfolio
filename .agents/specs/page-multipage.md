# Podstrony - wspólny system multipage

- **Funkcja w lejku:** szczegół i kwalifikacja po wejściu z landingu lub wyszukiwarki
- **Funkcja sprzedażowa:** każda trasa wyjaśnia jedną intencję bez kopiowania sekcji strony głównej
- **Podstrony:** `/work`, `/services`, `/pricing`, `/about`, `/contact` oraz detale usług i realizacji
- **Budżet motion:** ★☆☆☆☆

## Założenia

Wszystkie strony wielostronicowe otwierają się wspólnym `PageHeader`: etykieta, nagłówek,
krótki wstęp i opcjonalny powrót. Zawartość pod nagłówkiem jest dedykowana trasie. Sekcje
landingu nie są używane jako layout stron indeksowych.

### Cennik

Trasa `/pricing` używa pełnej hierarchii informacji:

1. **Strony internetowe** - jednostronicowa strona, strona firmowa, rozbudowana strona
   firmowa.
2. **Większe projekty** - system webowy / CodeBros oraz automatyzacja procesu.
3. **Możliwe rozszerzenia** - między innymi Profil Firmy w Google, branding, CMS, integracje,
   analityka i SEO techniczne. Nie są osobnymi pakietami ani obietnicą, że każdy projekt ich
   potrzebuje.
4. **Materiały do projektu** - klient dostarcza treści i zdjęcia. Copywriting może zostać
   dodany za osobną opłatą w wycenie. Zdjęcia AI i darmowy stock nie są osobną usługą; zakup
   płatnego stocku wymaga akceptacji klienta i jest po jego stronie.
5. **Po wdrożeniu** - własność projektu i opcjonalne utrzymanie są pokazane dopiero pod
   główną ofertą.

Promocja z okazji rozpoczęcia działalności na Oferteo jest osobnym komunikatem nad ofertą.
Obejmuje 3 pierwszych klientów, zaczyna wycenę od 900 zł i pokazuje licznik wykorzystanych
miejsc. Licznik jest aktualizowany w `src/data/pricing.ts`.

Utrzymanie zaczyna się od 150 zł miesięcznie dla prostej strony; większy nakład pracy lub
zasobów może zmienić kwotę. Nowe sekcje i większe aktualizacje są rozliczane osobno: 100 zł za
godzinę, z minimum jedną godziną obejmującą projekt, design, konsultację i wdrożenie.

Landing page i prosta wizytówka nie są rozdzielnymi poziomami cenowymi. Oba mieszczą się w
wariancie **Jednostronicowa strona**; różni je cel treści, niekoniecznie rozmiar techniczny.
Termin „customowa strona internetowa” nie jest nazwą wariantu, ponieważ wszystkie strony są
projektowane indywidualnie.

Sekcja budżetu na landingu jest skróconym preview: pokazuje promocję, trzy poziomy stron,
krótką wzmiankę o większych projektach i dwa CTA. Nie powtarza materiałów, rozszerzeń,
utrzymania ani szczegółowych zasad z `/pricing`.

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

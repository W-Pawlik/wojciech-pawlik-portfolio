# Checklist — przegląd kodu

Kolejność jest celowa: najpierw rzeczy, które trudno naprawić później.

## 1. Zakres i architektura

- [ ] Zmiana robi to, co miała zrobić — i nic więcej. Refaktor nie jest wmieszany w funkcję.
- [ ] Granica serwer/klient jest poprawna. `'use client'` jest w najmniejszym możliwym zakresie.
- [ ] Nie doszła nowa zależność bez ADR.
- [ ] Nowa trasa ma wpis w `src/data/routes.ts` i powód w briefie.
- [ ] Brak plików barrel, brak importów `../../`.
- [ ] Nowy plik leży tam, gdzie przewiduje `03-architecture.md`.

## 2. Poprawność

- [ ] Dane z zewnątrz są walidowane po stronie serwera, nie tylko klienta.
- [ ] Każdy `useEffect` z subskrypcją / timerem / animacją ma cleanup.
- [ ] Brak `setState` w ciele efektu. Wartości pochodne liczone w renderze.
- [ ] Obsłużone przypadki brzegowe: puste dane, brak opcjonalnego pola, błąd sieci.
- [ ] Błędy nie są łykane po cichu.

## 3. Typy

- [ ] Brak `any`. Każde `as` ma uzasadnienie w komentarzu.
- [ ] Typy wyprowadzone z danych, nie zduplikowane obok.
- [ ] Funkcje z `lib/` i hooki mają jawny typ zwracany.

## 4. Styl

- [ ] Zero wartości surowych tam, gdzie istnieje token.
- [ ] Nowy token `text-*` dopisany do grup w `cn.ts` **i** pokryty testem.
- [ ] Użyte istniejące primitives, nie ich lokalne kopie.
- [ ] Nowy token / primitive widoczny na `/system`.

## 5. Animacja

- [ ] Podział CSS / Motion / GSAP zgodny z `05-animation-system.md`.
- [ ] GSAP wyłącznie przez `loadGsap()`, z cleanupem i obsługą unmountu w trakcie pobierania.
- [ ] Czasy i easingi z tokenów.
- [ ] Ścieżka reduced motion istnieje i została sprawdzona.
- [ ] Animowane tylko `transform` i `opacity`.
- [ ] Efekty hover bramkowane `useHasFinePointer()`, nie samą szerokością viewportu.
- [ ] Powierzchnia przeciągana poziomo ma `touch-pan-y` i nie blokuje scrolla palcem.

## 6. Treść i dostępność

- [ ] Zero tekstu widocznego dla użytkownika w komponencie — wszystko w słownikach.
- [ ] Wszystkie języki projektu uzupełnione; tłumaczenie nie jest kalką.
- [ ] Żaden fakt o firmie nie został wymyślony (adres, cena, termin, opinia, certyfikat).
- [ ] Semantyczny HTML, poprawna hierarchia nagłówków.
- [ ] Wszystko interaktywne osiągalne klawiaturą, focus widoczny.
- [ ] `alt` na każdym obrazie, bez upychania fraz.
- [ ] Informacja nie jest dostępna wyłącznie przez hover.
- [ ] Telefon jako `tel:`, pola formularza z `autoComplete`.

## 7. Testy

- [ ] Nowa logika ma test opisujący **zachowanie**, nie implementację.
- [ ] Poprawiony błąd ma test-strażnika z komentarzem.
- [ ] Brak snapshotów całych sekcji, brak testów tautologicznych.
- [ ] Testy deterministyczne — bez czasu rzeczywistego i losowości.

## 8. Higiena

- [ ] Brak zakomentowanego kodu, martwych plików, nieużywanych eksportów.
- [ ] Komentarze wyjaśniają _dlaczego_, nie _co_.
- [ ] `TODO` wskazuje ADR, `specs/`, `TODO(brief)` albo `TODO(brand)`.
- [ ] Commit atomowy, wiadomość w Conventional Commits.
- [ ] `pnpm check` i `pnpm build` przechodzą.

## Czerwone flagi — odrzucamy zmianę

- `eslint-disable` na cały plik.
- `@ts-ignore` / `@ts-expect-error` bez wyjaśnienia.
- `'use client'` na pliku sekcji, bo „jest tam animacja”.
- Hex albo `text-[64px]` w komponencie.
- Tekst widoczny dla użytkownika wpisany na sztywno w JSX.
- Wymyślony adres, cena, termin albo opinia.
- Statyczny `import gsap`.
- Animacja bez ścieżki reduced motion.
- Nowa biblioteka bez ADR.
- Test, który przechodzi niezależnie od tego, czy kod działa.

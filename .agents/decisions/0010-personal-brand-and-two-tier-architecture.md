# ADR-0010 - Marka osobista i dwupoziomowa architektura marki (Wojciech Pawlik + CodeBros)

- **Status:** Accepted
- **Data:** 2026-08-21

## Kontekst

Templatka jest zbudowana pod **stronę wizytówkową lokalnej firmy usługowej**. Widać to w kilku
miejscach szkieletu i dokumentów:

- `src/data/site.ts` traktuje NAP (nazwa, adres, telefon) i godziny otwarcia jako dane
  obowiązkowe, a `hasPublishableContactDetails` wymaga **telefonu i ulicy**, żeby cokolwiek
  z bloku kontaktowego się wyrenderowało.
- Etap 7 bootstrapu zakłada JSON-LD `LocalBusiness`, a `08-accessibility-and-performance.md`
  - SEO lokalne.
- `.agents/README.md` opisuje główną konwersję jako „zadzwonić, napisać albo przyjechać”.

Ten projekt jest inny. Zgodnie ze [strategią marki](../10-brand-strategy.md):

1. Marką jest **osoba** - Wojciech Pawlik, descriptor _Web & Product Engineer_ - a nie firma
   z lokalizacją. Nazwisko jest przewagą, bo klient kupuje osobistą odpowiedzialność i dostęp do
   osoby technicznej.
2. Przy większych projektach do gry wchodzi **CodeBros** (Wojciech i Michał Pawlik) - nie jako
   konkurencyjna marka, tylko jako „drugi bieg” tej samej oferty.
3. Usługa jest **projektowa i zdalna**. Klient nie przyjeżdża i nie dzwoni „z ulicy” - opisuje
   projekt, a potem umawia rozmowę. Konwersją jest formularz kwalifikacyjny.
4. Strona sprzedaje w trzech filarach (Websites · Custom Systems · AI Automation) i musi sama
   być dowodem jakości, bo portfolio dopiero powstaje.

Bez rozstrzygnięcia tego wprost szkielet popchnąłby projekt w stronę cudzej kategorii: strony
lokalnej firmy z adresem, godzinami i telefonem jako głównym CTA.

## Decyzja

1. **Jedna marka główna: Wojciech Pawlik.** CodeBros jest marką rozszerzoną w tym samym systemie
   wizualnym i w tym samym repozytorium - jedna strona, jeden system tokenów, jeden ton.
   CodeBros nie dostaje osobnego serwisu ani osobnej stylistyki; dostaje sekcję, ewentualnie
   podstronę `/codebros`, i własny zestaw claimów z banku haseł.
2. **Komunikacja w pierwszej osobie pojedynczej.** „My” występuje wyłącznie w kontekście
   CodeBros. Agencyjne „nasz zespół” jest błędem, nie stylem.
3. **JSON-LD: `Person` (autor, marka) + `ProfessionalService`/`Service` dla oferty** - zamiast
   `LocalBusiness`. `address` jest opcjonalne i wchodzi tylko, jeżeli właściciel repo zdecyduje
   się publikować adres zarejestrowanej działalności. `openingHours` **nie występuje**;
   odpowiednikiem jest deklarowany czas odpowiedzi na zgłoszenie.
4. **NAP zastępuje tożsamość kontaktowa: e-mail jest kanałem podstawowym**, telefon opcjonalnym,
   adres opcjonalnym. Konsekwencja w kodzie: `hasPublishableContactDetails` w `src/data/site.ts`
   musi być przedefiniowane na „jest e-mail **albo** telefon”, razem z testem - dzisiejszy warunek
   `phone && street` ukryłby cały blok kontaktowy w projekcie, który adresu może nigdy nie mieć.
5. **Konwersja to formularz kwalifikacyjny**, nie klik w `tel:`. Formularz z templatki
   (imię / e-mail / telefon / wiadomość) zostaje rozszerzony o trzy pola wyboru: potrzeba, etap,
   orientacyjny budżet - patrz [brief](../00-project-brief.md#formularz). Zmiana schematu Zod idzie
   razem ze specyfikacją sekcji i z testami walidacji.
6. **SEO lokalne wypada z zakresu.** Zamiast fraz „usługa + miasto” celujemy we frazy brandowe
   (nazwisko, CodeBros) i frazy intencji usługowej. Miasto może pojawić się jako element
   wiarygodności, nie jako oś optymalizacji.
7. **Projekty z pracy zawodowej nie są portfolio tej marki.** Realizacje Univio i ich klienci nie
   wchodzą na stronę. Dowodami są własne produkty (Planik, system oceny ryzyka kredytów
   kupieckich), projekty klienckie z uzyskaną zgodą oraz sama jakość tej strony.

## Konsekwencje

- Etap 7 bootstrapu (SEO i dane strukturalne) realizujemy w wariancie `Person` +
  `ProfessionalService`. Zapis w `11-bootstrap.md` czytamy przez ten ADR.
- Sekcja kontaktu i stopka projektowane są pod e-mail; brak telefonu i adresu **nie** jest
  blokerem publikacji, brak e-maila jest.
- `checklists/launch.md` w punktach o „prawdziwych danych firmy” dotyczy tu: e-maila, formy
  prawnej działalności w stopce, polityki prywatności i administratora danych.
- Ryzyko marki: strona musi jednocześnie utrzymać poziom „premium, ale osobisty” i nie zjechać
  w agencyjne „my”. To rozstrzygają testy decyzyjne 7–10 w [10-brand-strategy.md](../10-brand-strategy.md#testy-decyzyjne).
- Trudniejsze staje się pokazanie skali: bez agencyjnego zaplecza jedynym dowodem są case studies.
  Dlatego sekcja proof ma priorytet P0 i jest wprost zablokowana brakiem treści, a nie wypełniana
  ogólnikami.
- Jeżeli CodeBros kiedyś urośnie do własnej marki z własną ofertą, ta decyzja zostaje zastąpiona
  nowym ADR - nie edytujemy tego.

## Rozważone alternatywy

- **Zbudować markę jako studio / software house.** Odrzucone: kasuje jedyną realną przewagę
  (bezpośredni kontakt z osobą, która buduje) i stawia markę do konkurencji, w której przegrywa
  skalą.
- **Dwie osobne strony: `wojciechpawlik.pl` i `codebros.pl`.** Odrzucone na tym etapie: dzieli
  i tak niewielki dowód społeczny na dwie części, podwaja koszt utrzymania i zmusza klienta do
  decyzji, na czyją stronę trafił. CodeBros jest zakresem, nie inną firmą.
- **Zostawić `LocalBusiness` i NAP „na wszelki wypadek”.** Odrzucone: znaczniki i sekcje
  powtarzające dane, których nie ma (godziny, adres, telefon), są markupem wprowadzającym
  w błąd - a to reguła nadrzędna templatki.
- **Telefon jako główne CTA.** Odrzucone: usługa jest projektowa, a rozmowa bez kontekstu jest
  gorsza dla obu stron niż opis projektu przesłany wcześniej.

# Wejście 2 - Wireframe i zakres

Wypełnia właściciel repo (po rozmowie z klientem). Na tej podstawie powstaje sekcja „Zakres”
w [00-project-brief.md](../00-project-brief.md), `src/data/navigation.ts` i `src/data/routes.ts`.

Wireframe może być rysunkiem, plikiem Figmy albo tą tabelą. Tabela jest minimum - bez niej nie ma
specyfikacji sekcji, a bez specyfikacji nie ma kodu.

> **Stan 2026-08-21:** wypełnione tym, co wynika ze
> [strategii marki](00-brand-strategy-input.md) - cel, lejek, formularz, wykluczenia. Pozycje
> `PROPOZYCJA` są wnioskiem z dokumentu (§12, §18–21), nie decyzją właściciela repo. Zakres jest
> **do potwierdzenia** razem z briefem.

## 1. Typ strony

- `landing + podstrony` - landing niesie całość, podstrony dla case studies i osobnych intencji
  (`PROPOZYCJA`, [ADR-0006](../decisions/0006-landing-plus-detail-pages.md))
- Języki: `BRAK` - `pl` czy `pl + en`. Dokument strategii zawiera claimy angielskie, więc to
  realna decyzja, nie formalność. **Blokuje etap 0** (`src/i18n/config.ts`).
- Domena docelowa: `BRAK`
- Gdzie hostowana: `BRAK`

## 2. Cel i lejek

- Jedyny cel strony: **doprowadzić właściciela firmy do rozmowy o projekcie przez formularz
  „Opowiedz mi o projekcie”.**
- Co użytkownik ma zrobić: **wysłać formularz kwalifikacyjny** (nie zadzwonić - usługa jest
  projektowa i sprzedawana przez rozmowę zaplanowaną, nie przez telefon z ulicy).
- Kolejność etapów lejka:
  `RECOGNITION → DIFFERENTIATION → FIT → TRUST → PROOF → OFFER → CONVERSION → QUALIFICATION`

## 3. Sekcje strony głównej

`PROPOZYCJA` - pełna tabela z priorytetami i blokadami jest prowadzona w
[00-project-brief.md](../00-project-brief.md#strona-główna) i to ona jest źródłem prawdy.
Tutaj skrót wejściowy:

| #   | Sekcja                  | Funkcja w lejku            | Co musi zawierać                                                              | Skąd treść                   | P0/P1/P2 |
| --- | ----------------------- | -------------------------- | ----------------------------------------------------------------------------- | ---------------------------- | -------- |
| 01  | Hero                    | RECOGNITION                | H1 z banku haseł, descriptor, primary + secondary CTA                         | strategia §9, §18–19         | P0       |
| 02  | Dlaczego nie szablon    | DIFFERENTIATION            | Pozycjonowanie wobec szablonu / agencji / software house'u                    | strategia §4, §7             | P0       |
| 03  | Oferta - trzy filary    | FIT                        | Websites / Custom Systems / AI Automation, każdy z zadaniem, nie z listą tech | strategia §12                | P0       |
| 04  | Jak pracuję             | TRUST                      | 7 kroków procesu                                                              | strategia §14                | P0       |
| 05  | O mnie                  | TRUST                      | Brand story, doświadczenie e-commerce, AI Engineering, zdjęcie                | strategia „BRAND STORY”, §16 | P0       |
| 06  | Realizacje              | PROOF                      | Karty projektów: problem → rozwiązanie → udział → rezultat                    | `BRAK` - treść case studies  | P0       |
| 07  | CodeBros                | FIT / TRUST                | „Kiedy strona to za mało”, dwie osoby, claim „Od problemu do produkcji”       | strategia „CODEBROS”         | P1       |
| 08  | Orientacyjny budżet     | OFFER                      | Widełki + od czego zależy cena                                                | strategia §13                | P1       |
| 09  | Opinie                  | PROOF                      | Min. 3 prawdziwe opinie ze źródłem                                            | `BRAK`                       | P2       |
| 10  | FAQ                     | obiekcje                   | Prawdziwe pytania klientów                                                    | `BRAK`                       | P2       |
| 11  | Opowiedz mi o projekcie | CONVERSION / QUALIFICATION | Formularz kwalifikacyjny (sekcja 6 niżej)                                     | strategia §20                | P0       |
| 12  | Stopka                  | CONVERSION                 | E-mail, dane, profile, link do polityki prywatności                           | `BRAK` - dane kontaktowe     | P0       |

## 4. Nawigacja

`PROPOZYCJA` - maks. 4–5 pozycji, menu nie jest spisem treści:

- Pozycje w menu: **Oferta · Realizacje · Jak pracuję · O mnie** (CodeBros wewnątrz oferty albo
  jako piąta pozycja, jeżeli powstanie podstrona)
- Czy CTA jest w navbarze? **tak - „Opowiedz mi o projekcie”**
- Co jest w stopce (kolumny): identyfikacja (nazwa + descriptor) · oferta · kontakt (e-mail,
  profile) · sprawy formalne (polityka prywatności, dane działalności)
- Czy potrzebna jest podstrona prawna? **tak** - polityka prywatności jest wymogiem przy
  formularzu

## 5. Podstrony

`PROPOZYCJA`:

| Trasa (slug)           | Po co istnieje (intencja wyszukiwania / powód sprzedażowy)                      | Sekcje                                              |
| ---------------------- | ------------------------------------------------------------------------------- | --------------------------------------------------- |
| `realizacje/[slug]`    | Pełne case study - główny dowód jakości                                         | problem, rozwiązanie, mój udział, rezultat, CTA     |
| `codebros`             | Klient szuka zespołu do większego systemu, nie strony (decyzja: `BRAK`)         | idea, zakres, dowody, CTA                           |
| `ai-automation`        | Intencja „automatyzacja procesu w firmie” - inna niż „strona” (decyzja: `BRAK`) | problem, przykłady zastosowań, ścieżka wejścia, CTA |
| `polityka-prywatnosci` | Wymóg formalny przy formularzu i analityce                                      | treść prawna                                        |

Slug bez ogonków, ten sam dla wszystkich locale.

## 6. Formularz

- **Cel:** zebrać kontekst projektu i odfiltrować zapytania spoza kategorii budżetowej; pierwsza
  odpowiedź ma być konkretna, nie „dziękujemy za kontakt”.
- **Pola** (kolejność ze strategii §20 - od najłatwiejszego wyboru do danych kontaktowych):
  1. `Czego potrzebujesz?` - strony / aplikacji lub systemu / automatyzacji AI / jeszcze nie wiem
     → kieruje do właściwego filaru oferty
  2. `Na jakim etapie jesteś?` - konkretny zakres / pomysł / istniejące rozwiązanie do przebudowy
     / potrzebuję pomocy w określeniu rozwiązania → decyduje, czy pierwszy krok to wycena
  3. `Orientacyjny budżet` - 5–10k / 10–20k / 20–40k / 40k+ / jeszcze nie wiem → główny filtr
  4. `Krótko o projekcie` - pole tekstowe → materiał do pierwszej rozmowy
  5. `E-mail` → kanał odpowiedzi
- **Pola opcjonalne:** telefon. Imię: do decyzji - strategia świadomie **nie** zaczyna formularza
  od imienia.
- **Czy potrzebny wybór z listy:** tak - trzy pola wyboru powyżej.
- **Gdzie mają trafiać zgłoszenia (adres e-mail):** `BRAK`
- **Kto odpowiada i w jakim czasie:** Wojciech Pawlik; czas odpowiedzi `BRAK`. Komunikat sukcesu
  ma brzmieć w duchu: „Przeczytam opis i odezwę się z informacją, jak widzę następny krok.”
- **Zgoda RODO - treść klauzuli:** `BRAK`
- **CTA:** „Wyślij projekt”

## 7. Integracje i osadzenia

- Mapa: **nie** - usługa nie jest lokalna
- Analityka: `BRAK` - do decyzji (jeżeli tak: ADR + banner zgody)
- Chat / messenger: **nie** - wykluczone strategicznie
- Rezerwacja online / kalendarz: `BRAK` - do decyzji (np. link do terminarza po wysłaniu
  formularza)
- Opinie z zewnętrznego profilu (widget): **nie** - opinie wchodzą jako treść, nie jako widget
- Newsletter: **nie**

## 8. Poza zakresem

Blog i baza wiedzy w pierwszej wersji, sklep, płatności, panel klienta, CMS, wielojęzyczność poza
ustalonymi locale, cennik z dokładnymi cenami i konfigurator wyceny, portfolio projektów z pracy
zawodowej (Univio).

## 9. Referencje layoutu

- Strony, których **układ** jest bliski oczekiwaniom: `BRAK`
- Co konkretnie z nich bierzemy: `BRAK`

Uwaga ze strategii: strona nie może wyglądać ani jak portfolio designera, ani jak strona software
house'u. Ma wyglądać jak cyfrowy produkt zrobiony przez bardzo dobrego developera.

# 00 — Brief projektu

> **Wypełnione 2026-08-21** na podstawie
> [`intake/00-brand-strategy-input.md`](intake/00-brand-strategy-input.md).
> Status: **do akceptacji właściciela repo.**
>
> Wejścia [`intake/02-wireframe-input.md`](intake/02-wireframe-input.md) (zakres, wireframe)
> i [`intake/03-business-facts.md`](intake/03-business-facts.md) (dane kontaktowe, dowody) są
> uzupełnione tylko częściowo — pozycje `BRAK` przeniesione są na listę
> [„Czego brakuje”](#czego-brakuje--pytania-do-właściciela) i **blokują konkretne sekcje**.
>
> Zasada wypełniania: **każde zdanie tutaj to fakt od właściciela repo albo pytanie do niego.**
> Nic pomiędzy. Pozycje oznaczone `PROPOZYCJA` są wnioskiem z dokumentu strategii, nie faktem —
> wymagają potwierdzenia w tej samej rozmowie, w której akceptowany jest ten brief.

## Klient

- **Firma:** Wojciech Pawlik — marka osobista, descriptor **Web & Product Engineer**.
  Marka rozszerzona przy większych projektach: **CodeBros** (Wojciech i Michał Pawlik).
- **Branża i model:** projektowanie i budowa stron, systemów webowych i automatyzacji AI dla firm.
  Usługa zdalna, projektowa, sprzedawana przez rozmowę — nie lokalna usługa z dojazdem.
  Zasięg geograficzny: `TODO(brief)` — czy komunikujemy Polskę, czy również rynek zagraniczny
  (dokument wejściowy zawiera claimy po angielsku, więc to decyzja o języku strony).
- **Od kiedy działa:** `TODO(brief)` — od kiedy realizowane są projekty dla klientów zewnętrznych.
- **Skala:** jedna osoba; przy większym zakresie dwie osoby (CodeBros). Liczba projektów
  i klientów: `TODO(brief)` — bez potwierdzenia nie pojawia się na stronie żadna liczba.
- **Konkurencja, z którą klient się porównuje:** freelancerzy składający strony na szablonach
  (Webflow / WordPress / AI-generated), agencje interaktywne i studia kreatywne, software house'y.
- **Co firma robi lepiej niż konkurencja (jej słowami):** „Bezpośrednia współpraca jak z dobrym
  freelancerem, jakość i proces jak w profesjonalnym studio, zaplecze techniczne pozwalające
  budować znacznie więcej niż zwykłe strony.”

### Czego marka nie sprzedaje

Lista tego, co bywa mylnie przypisywane tej kategorii, a tutaj nie obowiązuje. Chroni przed
przesunięciem strony w stronę cudzej kategorii.

- **Nie sprzedaje wdrożeń na szablonie** — motywu WordPress, template'u Webflow, strony
  wygenerowanej przez AI z podmienionym tekstem.
- **Nie sprzedaje „AI” jako mody** — chatbota, żeby firma mogła powiedzieć, że ma AI. Punktem
  wyjścia jest proces, który pochłania czas zespołu.
- **Nie sprzedaje siebie jako agencji** — nie ma zespołu, account managera ani „naszych
  ekspertów”. Nie udaje studia z 30 osobami.
- **Nie sprzedaje doradztwa bez implementacji** — nie „strategii cyfrowej transformacji”,
  tylko zaprojektowanego i wdrożonego rozwiązania.
- **Nie sprzedaje projektów z pracy zawodowej jako własnego portfolio** — realizacje Univio nie
  są dowodem tej marki (patrz [zakazane fakty](10-brand-strategy.md#zakazane-fakty)).
- `TODO(brief)` — czy w zakresie są: identyfikacja wizualna / logo od zera, copywriting,
  abonamentowe SEO i marketing, utrzymanie i hosting jako osobna usługa, sklepy na gotowych
  platformach (Shopify / WooCommerce). Każde „nie” trafia do tej listy, każde „tak” do tabeli oferty.

## Co sprzedajemy i za ile

Trzy filary oferty. Widełki są **orientacyjne** i mają odpowiedzieć na jedno pytanie klienta:
„czy jesteśmy w podobnej kategorii budżetowej?”. Nie tworzymy pakietów Bronze / Silver / Gold —
byłoby to sprzeczne z obietnicą customowego podejścia.

| Usługa / produkt                           | Zakres                                                                                   | Cena od (PLN) | Czas realizacji | Uwagi                                                       |
| ------------------------------------------ | ---------------------------------------------------------------------------------------- | ------------- | --------------- | ----------------------------------------------------------- |
| **Websites** — strona biznesowa            | Kilka podstron, dopracowane UI, pełny responsive, SEO techniczne, formularz              | 5 000         | `TODO(brief)`   | Górna granica tego wariantu ok. 8 000                       |
| **Websites** — rozbudowana strona / CMS    | Więcej treści, CMS, customowe komponenty, bardziej zaawansowane interakcje, integracje   | 8 000         | `TODO(brief)`   | Do ok. 18 000                                               |
| **Websites** — zaawansowany web experience | Nietypowy UX, konfiguratory, integracje, dużo customowej logiki, rozbudowany motion      | 15 000        | `TODO(brief)`   | 15 000–30 000+                                              |
| **Custom Systems / CodeBros**              | Logowanie, role, dane, procesy, dashboardy, backend, integracje, własna logika biznesowa | 30 000        | `TODO(brief)`   | Wycena po etapach; realizacja samodzielna lub jako CodeBros |
| **AI Automation** — analiza procesu        | Discovery: wskazanie procesu, ocena, czy AI faktycznie oszczędza pracę                   | 2 500         | `TODO(brief)`   | 2 500–5 000; naturalny pierwszy krok w tym filarze          |
| **AI Automation** — prototyp / PoC         | Działający prototyp na realnych danych klienta                                           | 8 000         | `TODO(brief)`   | 8 000–20 000                                                |
| **AI Automation** — pełne wdrożenie        | Wdrożenie w procesie firmy, integracja z istniejącymi systemami                          | 15 000        | `TODO(brief)`   | Zależne od problemu                                         |

Ceny trafiają do `src/data/` **jako liczby**, formatowane przez `formatPriceFrom()`. Przy każdej
widełce na stronie musi stać informacja, od czego zależy cena — cena „od” bez tego jest gorsza
niż brak ceny. Usługa flagowa: **Websites** (najbardziej dostępne wejście w ofertę).

## Grupy docelowe

### A. Małe i średnie firmy potrzebujące lepszej strony — segment podstawowy

- Kto to jest, w jednym zdaniu: właściciel albo osoba decyzyjna w firmie usługowej, kancelarii,
  biurze architektonicznym, firmie produkcyjnej, budowlanej, technologicznej, gabinecie,
  restauracji, lokalnej marce premium.
- Czego szuka: strony, która pokazuje jakość firmy i zaczyna generować wartościowe zapytania —
  zamiast szablonu, przestarzałej strony albo samych social mediów.
- Czego się boi: że zapłaci za ładny obrazek, który nic nie zmieni; że wykonawca nie zrozumie
  jego biznesu; że utknie w niekończącym się projekcie; że dostanie to samo, co konkurencja.
- Co go przekonuje: sama jakość tej strony, zrozumienie jego problemu w pierwszym akapicie,
  widoczny proces, realne case studies, jasny orientacyjny budżet, jeden kontakt.

### B. Firmy z konkretnym problemem operacyjnym — segment systemowy

- Kto to jest, w jednym zdaniu: firma, w której Excel jest centrum procesu, dane leżą w kilku
  systemach, a część pracy robi się ręcznie.
- Czego szuka: portalu klienta, panelu operacyjnego, konfiguratora, workflow, aplikacji
  wewnętrznej, MVP produktu — czegoś, czego nie da się kupić jako gotowy SaaS.
- Czego się boi: że jednoosobowy wykonawca nie dowiezie systemu; że zostanie z kodem, którego
  nikt nie utrzyma; że projekt przekroczy budżet.
- Co go przekonuje: produkcyjne doświadczenie przy dużych systemach e-commerce, zbudowane
  produkty (Planik, system oceny ryzyka kredytów kupieckich), CodeBros jako dwuosobowy zespół
  z jasną odpowiedzialnością za całość wdrożenia.

### C. Firmy chcące wykorzystać AI praktycznie — segment automatyzacji

- Kto to jest, w jednym zdaniu: organizacja, która potrafi wskazać proces i powiedzieć „to
  zajmuje naszym ludziom 40 godzin miesięcznie”.
- Czego szuka: uproszczenia albo automatyzacji konkretnej, powtarzalnej pracy — analizy
  dokumentów, ekstrakcji danych, przeszukiwania wiedzy wewnętrznej, wsparcia obsługi klienta.
- Czego się boi: że kupi modny dodatek bez wpływu na pracę; że AI popsuje jakość albo dane;
  że nie będzie wiedziała, czy to się opłaciło.
- Co go przekonuje: doświadczenie AI Engineering, wejście od taniej analizy procesu zamiast od
  dużego wdrożenia, język oszczędzonych godzin zamiast języka modeli.

## Problem klienta

Klient nie ma problemu „nie mam strony w Next.js”. Ma problem, że jego obecna strona nie pokazuje,
że jest dobrą firmą — a konkurencja wygląda profesjonalniej. Albo że klient nie rozumie jego
oferty i odpada przed rozmową. Albo że potrzebuje narzędzia, którego nie da się kupić jako gotowy
SaaS, i słyszy, że to „za mały projekt”. Albo że jego ludzie wykonują ręcznie pracę, którą można
częściowo zautomatyzować, i nie wie, od czego zacząć. W każdym z tych przypadków realna obawa
brzmi tak samo: **że zapłaci za coś, co nie odpowie na jego sytuację, bo zostanie dopasowany do
gotowego rozwiązania.**

## Cel strony

**Doprowadzić właściciela firmy do rozmowy o projekcie — przez formularz „Opowiedz mi
o projekcie”.**

### Główny lejek

Kolejność sekcji odtwarza ścieżkę decyzyjną z dokumentu strategii (§21), nie kolejność ważności
dla marki.

```
RECOGNITION → DIFFERENTIATION → FIT → TRUST → PROOF → OFFER → CONVERSION → QUALIFICATION
```

Każda sekcja w tabeli zakresu deklaruje swoją funkcję w tym lejku. Sekcja bez funkcji wypada.

### CTA

| Rola        | Treść PL                                                          | Gdzie występuje                                              |
| ----------- | ----------------------------------------------------------------- | ------------------------------------------------------------ |
| Primary     | Opowiedz mi o projekcie                                           | Navbar, hero, koniec sekcji oferty, sekcja konwersji, stopka |
| Secondary   | Zobacz realizacje                                                 | Hero (obok primary), koniec sekcji różnicującej              |
| Kontekstowe | Jak pracuję · Poznaj CodeBros · Sprawdź, co możemy zautomatyzować | Wewnątrz odpowiednich sekcji; nie konkurują z primary        |

„Skontaktuj się” jest zakazane — nic nie komunikuje. Brzmienia są zatwierdzone
w [10-brand-strategy.md](10-brand-strategy.md#bank-haseł) i nie wymyślamy własnych wariantów
w komponentach.

### KPI

`PROPOZYCJA` — wartości docelowe ustala właściciel repo przy akceptacji briefu.

- Liczba zgłoszeń z formularza / miesiąc.
- Udział zgłoszeń **kwalifikowanych** (wskazany budżet w widełkach oferty i opisany projekt)
  w zgłoszeniach ogółem — to główna miara, bo formularz ma filtrować, nie tylko zbierać.
- Liczba wejść w sekcję / podstronę case study na sesję (dowód, że proof działa).
- Udział ruchu z fraz brandowych („wojciech pawlik”, „codebros”) vs niebrandowych.

## Zakres

### Strona główna

`PROPOZYCJA` — lista wynika ze ścieżki użytkownika (§21) i architektury oferty (§12) z dokumentu
strategii. Wymaga potwierdzenia razem z briefem; wireframe uzupełniamy w
[`intake/02-wireframe-input.md`](intake/02-wireframe-input.md).

| #   | Sekcja                              | Funkcja w lejku            | Priorytet | Blokada (brakujący fakt)                                               |
| --- | ----------------------------------- | -------------------------- | --------- | ---------------------------------------------------------------------- |
| 01  | Hero — kto to jest i co robi        | RECOGNITION                | P0        | Wybór wariantu H1 z banku haseł                                        |
| 02  | Dlaczego nie szablon                | DIFFERENTIATION            | P0        | —                                                                      |
| 03  | Oferta — trzy filary                | FIT                        | P0        | Decyzja o zakresie usług spornych (logo, SEO, utrzymanie)              |
| 04  | Jak pracuję — proces 7 kroków       | TRUST                      | P0        | —                                                                      |
| 05  | O mnie — doświadczenie              | TRUST                      | P0        | Zgoda na wymienianie nazwy pracodawcy; zdjęcie autora                  |
| 06  | Realizacje — lista projektów        | PROOF                      | P0        | Treść i zgody: Planik, system oceny ryzyka, projekty klienckie         |
| 07  | CodeBros — kiedy strona to za mało  | FIT / TRUST                | P1        | Zgoda Michała, zakres wspólnej oferty, decyzja o osobnej podstronie    |
| 08  | Orientacyjny budżet                 | OFFER                      | P1        | Potwierdzenie widełek i tego, od czego zależy cena                     |
| 09  | Opinie klientów                     | PROOF                      | P2        | Brak opinii — sekcja nie wchodzi do kodu, dopóki nie ma minimum trzech |
| 10  | FAQ — obawy przed rozmową           | OFFER / obiekcje           | P2        | Prawdziwe pytania klientów (nie wymyślone)                             |
| 11  | Opowiedz mi o projekcie — formularz | CONVERSION / QUALIFICATION | P0        | Dostawca e-mail, adres odbiorcy, klauzula RODO                         |
| 12  | Stopka — kontakt i dane             | CONVERSION                 | P0        | E-mail, forma prawna działalności, profile (GitHub / LinkedIn)         |

Kolumna „Blokada” jest operacyjna: sekcja z niepustą blokadą nie wchodzi do kodu.

### Formularz

Formularz jest **narzędziem kwalifikacji**, nie polem „wiadomość”. Kolejność pól z §20 dokumentu
strategii — od najłatwiejszego wyboru do danych kontaktowych.

- **Cel:** zebrać kontekst projektu, żeby pierwsza odpowiedź mogła być konkretna, i odfiltrować
  zapytania spoza kategorii budżetowej.
- **Pola:**
  1. _Czego potrzebujesz?_ — strony internetowej / aplikacji lub systemu / automatyzacji AI /
     jeszcze nie wiem. **Powód:** kieruje rozmowę do właściwego filaru oferty.
  2. _Na jakim etapie jesteś?_ — mam konkretny zakres / mam pomysł / mam istniejące rozwiązanie
     do przebudowy / potrzebuję pomocy w określeniu rozwiązania. **Powód:** decyduje, czy pierwszy
     krok to wycena, czy rozmowa o zakresie.
  3. _Orientacyjny budżet_ — 5–10k / 10–20k / 20–40k / 40k+ / jeszcze nie wiem. **Powód:** główny
     filtr; „jeszcze nie wiem” jest dozwolone i nie blokuje wysłania.
  4. _Krótko o projekcie_ — pole tekstowe. **Powód:** materiał do pierwszej rozmowy.
  5. _E-mail_ — obowiązkowy. **Powód:** kanał odpowiedzi.
  6. _Telefon_ — opcjonalny. **Powód:** szybsza ścieżka dla tych, którzy jej chcą.
- **CTA formularza:** „Wyślij projekt”.
- **Dostarczanie:** e-mail przez dostawcę ([ADR-0007](decisions/0007-contact-delivery.md));
  `TODO(brief)` adres odbiorcy.
- **Co widzi użytkownik po wysłaniu:** „Przeczytam opis i odezwę się z informacją, jak widzę
  następny krok.” — `TODO(brief)` deklarowany czas odpowiedzi.
- **Konsekwencja implementacyjna:** szkielet z templatki ma formularz kontaktowy
  (`src/lib/validation/contact.ts`, `src/components/form/contact-form.tsx`) z polami
  imię / e-mail / telefon / wiadomość. Ten formularz wymaga rozszerzenia schematu Zod o trzy
  pola wyboru i uczynienia imienia opcjonalnym. Zmiana idzie razem ze specyfikacją sekcji 11,
  z testami walidacji.

### Podstrony

`PROPOZYCJA` — zgodnie z [ADR-0006](decisions/0006-landing-plus-detail-pages.md) landing niesie
całość, a podstrona istnieje dla szczegółu i konkretnej intencji.

| Trasa                   | Po co istnieje (intencja wyszukiwania / powód sprzedażowy)                                              |
| ----------------------- | ------------------------------------------------------------------------------------------------------- |
| `/realizacje/[slug]`    | Pełne case study: problem → rozwiązanie → mój udział → rezultat. Główny dowód jakości.                  |
| `/codebros`             | Osobna intencja: klient szuka zespołu do większego systemu, nie strony. Decyzja: `TODO(brief)`.         |
| `/ai-automation`        | Intencja „automatyzacja procesu / AI w firmie” — inna niż „strona internetowa”. Decyzja: `TODO(brief)`. |
| `/polityka-prywatnosci` | Wymóg formalny przy formularzu i (jeżeli wejdzie) analityce.                                            |

Podstrona bez własnej intencji nie powstaje. Trasa bez wpisu w `src/data/routes.ts` nie trafi do
sitemapy.

## Poza zakresem

- Blog i baza wiedzy w pierwszej wersji (do rozważenia po zebraniu case studies).
- Sklep, płatności, rezerwacje online, panel klienta na tej stronie.
- Wielojęzyczność poza ustalonymi locale — decyzja `pl` vs `pl + en` jest otwarta i blokuje
  etap 0 bootstrapu (`src/i18n/config.ts`).
- CMS dla tej strony — treść w słownikach i `src/data/`, dopóki nie ma bloga.
- Portfolio projektów z pracy zawodowej (Univio) — nie są własnością tej marki.
- Cennik z dokładnymi cenami i konfigurator wyceny.

## Czego świadomie nie robimy

Decyzje jakościowe, nie budżetowe.

- **Bez pakietów Bronze / Silver / Gold** — zaprzeczałyby obietnicy customowego podejścia.
- **Bez liczników** „50+ projektów”, „100% zadowolonych klientów”, „X lat doświadczenia”, jeżeli
  liczba nie jest potwierdzona.
- **Bez chmury logotypów technologii** jako substytutu zaufania — dowodem są projekty, nie ikony.
- **Bez stocku** — żadnych zdjęć uśmiechniętych zespołów w biurze ani abstrakcyjnych wizualizacji
  „AI”. Obrazy to realne ekrany, realne wdrożenia i autentyczne zdjęcie autora.
- **Bez chatbota na stronie** — marka sprzedaje AI z konkretnym zadaniem; widget „bo AI” byłby
  zaprzeczeniem własnej obietnicy.
- **Bez karuzeli hero, wideo w tle, popupów i licznika „X osób oglądało”.**
- **Bez fikcyjnych opinii i case studies** — sekcja bez treści zostaje niezaimplementowana.

## Kryterium sukcesu

- Osoba, która nie zna marki, po ~5 sekundach na stronie potrafi powiedzieć: „on projektuje
  i buduje strony i systemy dla firm”.
- Po sekcji różnicującej potrafi powiedzieć, czym to się różni od wykonawcy na szablonie.
- Rozumie, do którego z trzech filarów należy jej sprawa, i zna orientacyjną kategorię budżetu.
- Wie, że przy większym projekcie za produktem stoi CodeBros — i nie ma wątpliwości, czyja to
  strona.
- Zgłoszenia z formularza mają wypełniony opis projektu i wskazany etap — czyli formularz działa
  jako kwalifikacja.
- Strona sama jest przykładem tego, co marka sprzedaje: żaden detal nie działa przeciw ofercie.

## Czego brakuje — pytania do właściciela

Lista żywa. Każda pozycja blokuje konkretną sekcję i jest oznaczona `TODO(brief)` w kodzie.

| Czego brakuje                                                                                                                        | Co blokuje                                              | Zadane kiedy |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------- | ------------ |
| E-mail kontaktowy (inny niż służbowy) i adres odbiorcy zgłoszeń                                                                      | Formularz (11), stopka (12), `src/data/site.ts`, launch | 2026-08-21   |
| Forma prawna: JDG czy działalność nierejestrowana; nazwa i dane do stopki / faktur                                                   | Stopka (12), polityka prywatności, JSON-LD              | 2026-08-21   |
| Telefon — czy w ogóle publikujemy                                                                                                    | Stopka (12), formularz (pole opcjonalne)                | 2026-08-21   |
| Miasto / lokalizacja — czy komunikujemy, czy tylko „zdalnie, Polska”                                                                 | Hero (01), stopka (12), decyzja o lokalnym SEO          | 2026-08-21   |
| Domena docelowa i hosting (`NEXT_PUBLIC_SITE_URL`)                                                                                   | Etap 0 bootstrapu, metadane, sitemapa, CI               | 2026-08-21   |
| Języki: `pl` czy `pl + en` (dokument strategii ma claimy po angielsku)                                                               | `src/i18n/config.ts`, słowniki, cały copywriting        | 2026-08-21   |
| Zgoda / brak przeszkód umownych na wymienianie **Univio** jako pracodawcy na stronie sprzedażowej i na pracę projektową po godzinach | Sekcja o mnie (05), CodeBros (07)                       | 2026-08-21   |
| Treść case study **Planik**: problem, rola każdego z braci, stack, trudne decyzje, rezultat                                          | Realizacje (06), `/realizacje/planik`                   | 2026-08-21   |
| Treść case study **systemu oceny ryzyka kredytów kupieckich** + co wolno ujawnić o konkursie                                         | Realizacje (06)                                         | 2026-08-21   |
| Projekty klienckie: które istnieją, które wolno pokazać, jakie mamy zgody i materiały                                                | Realizacje (06) — bez tego sekcja proof jest pusta      | 2026-08-21   |
| Opinie klientów — minimum trzy, prawdziwe, z autorem i źródłem                                                                       | Opinie (09)                                             | 2026-08-21   |
| Zgoda Michała na wystąpienie na stronie (imię, zdjęcie, rola) i ustalony zakres CodeBros                                             | CodeBros (07), decyzja o `/codebros`                    | 2026-08-21   |
| Zdjęcie autora (i ewentualnie braci) — czy jest, czy planowana sesja                                                                 | O mnie (05), CodeBros (07), OG image                    | 2026-08-21   |
| Zakres usług spornych: logo/identyfikacja, copywriting, SEO abonamentowe, utrzymanie, hosting, sklepy na gotowych platformach        | Oferta (03), „czego marka nie sprzedaje”                | 2026-08-21   |
| Deklarowany czas odpowiedzi na zgłoszenie                                                                                            | Komunikat sukcesu formularza (11)                       | 2026-08-21   |
| Dostawca e-mail do wysyłki zgłoszeń + klauzula RODO i administrator danych                                                           | Formularz (11), polityka prywatności, launch            | 2026-08-21   |
| Profile do stopki: GitHub, LinkedIn, inne                                                                                            | Stopka (12), `src/data/site.ts`                         | 2026-08-21   |
| Czas realizacji dla każdej pozycji oferty                                                                                            | Tabela oferty (03), sekcja budżetu (08)                 | 2026-08-21   |
| Wybór wariantu H1 (A / B / C z banku haseł)                                                                                          | Hero (01)                                               | 2026-08-21   |
| Warstwa wizualna: logo/lockup, paleta, typografia, referencje, poziom animacji                                                       | Cały etap 2 bootstrapu — `intake/01-branding-input.md`  | 2026-08-21   |

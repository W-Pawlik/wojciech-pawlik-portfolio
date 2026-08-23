# Wejście 3 — Fakty o firmie

Wypełnia klient. Na tej podstawie powstaje `src/data/site.ts`, treść sekcji kontaktowej,
metadane i (później) JSON-LD.

**Każde pole to fakt, który pójdzie na stronę publiczną.** Pole, którego nie znasz, zostaw jako
`BRAK` — pusta strona jest lepsza niż zła informacja. Nic tutaj nie zostanie „uzupełnione
przykładowo”.

> **Stan 2026-08-21:** uzupełnione tym, co jest w [strategii marki](00-brand-strategy-input.md)
> (oferta, ceny, dowody, proces). **Wszystkie dane kontaktowe i formalne są `BRAK`** — i to one
> blokują stopkę, formularz, JSON-LD oraz publikację. Formularz tego dokumentu jest pisany pod
> lokalną firmę usługową; pola nieadekwatne dla marki osobistej są oznaczone
> _nie dotyczy_ — patrz [ADR-0010](../decisions/0010-personal-brand-and-two-tier-architecture.md).

## 1. Dane podstawowe (NAP)

- Nazwa wyświetlana: **Wojciech Pawlik**
- Nazwa prawna / właściciel: `BRAK` — do ustalenia forma działalności (JDG / nierejestrowana)
- NIP: `BRAK`
- REGON / KRS: `BRAK`
- Ulica i numer: `BRAK` — _adres publikujemy tylko, jeżeli działalność jest zarejestrowana
  i właściciel chce go pokazać; nie jest potrzebny do sprzedaży tej usługi_
- Kod pocztowy i miasto: `BRAK` — miasto warto podać nawet bez adresu (wiarygodność)
- Kraj: Polska
- Telefon (format do wyświetlenia): `BRAK` — decyzja, czy publikujemy w ogóle
- Telefon (format do `tel:`): `BRAK`
- Drugi telefon: _nie dotyczy_
- E-mail: `BRAK` — potrzebny adres projektowy, inny niż służbowy
- Rok założenia / „od kiedy działamy”: `BRAK`

## 2. Godziny otwarcia

_Nie dotyczy_ — usługa projektowa, zdalna, bez obsługi „z ulicy”. Zamiast godzin komunikujemy
**czas odpowiedzi na zgłoszenie**.

- Deklarowany czas odpowiedzi na zgłoszenie z formularza: `BRAK`
- Czy przyjmujecie tylko po wcześniejszym kontakcie? **tak** — praca projektowa, po ustaleniu
  terminu rozmowy
- Dostępność / obłożenie: `BRAK` — czy komunikujemy, że przyjmujemy nowe projekty, i od kiedy

## 3. Obszar działania

- Miasto / dzielnica: `BRAK`
- Promień obsługi: _nie dotyczy_ — praca zdalna
- Czy dojeżdżacie do klienta? `BRAK` — czy spotkania na miejscu są w ogóle w ofercie
- Rynek: `BRAK` — tylko Polska czy również zagranica (wiąże się z decyzją `pl` vs `pl + en`)

## 4. Oferta

Jedna pozycja = jedna usługa, którą klient realnie zamawia. Ceny są **orientacyjne** —
odpowiadają na pytanie „czy jesteśmy w podobnej kategorii budżetowej?”.

| Nazwa usługi                            | Co obejmuje                                                                         | Cena od (liczba) | Od czego zależy cena                               | Czas realizacji | Gwarancja / warunki |
| --------------------------------------- | ----------------------------------------------------------------------------------- | ---------------- | -------------------------------------------------- | --------------- | ------------------- |
| Strona biznesowa                        | Kilka podstron, dopracowane UI, pełny responsive, SEO techniczne, formularz         | 5000             | Liczba podstron, ilość treści, poziom customizacji | `BRAK`          | `BRAK`              |
| Rozbudowana strona / CMS                | Więcej treści, CMS, customowe komponenty, zaawansowane interakcje, integracje       | 8000             | CMS, liczba komponentów, integracje                | `BRAK`          | `BRAK`              |
| Zaawansowany web experience             | Nietypowy UX, konfiguratory, integracje, dużo customowej logiki, rozbudowany motion | 15000            | Złożoność logiki i motion, integracje              | `BRAK`          | `BRAK`              |
| Custom system (samodzielnie / CodeBros) | Logowanie, role, dane, procesy, dashboardy, backend, integracje, własna logika      | 30000            | Zakres funkcjonalny, etapy, integracje             | `BRAK`          | `BRAK`              |
| AI — analiza procesu / discovery        | Wskazanie procesu, ocena potencjału automatyzacji, rekomendacja                     | 2500             | Liczba i złożoność procesów                        | `BRAK`          | `BRAK`              |
| AI — prototyp / PoC                     | Działający prototyp na realnych danych                                              | 8000             | Dane, integracje, wymagana dokładność              | `BRAK`          | `BRAK`              |
| AI — pełne wdrożenie                    | Wdrożenie w procesie firmy, integracja z istniejącymi systemami                     | 15000            | Skala procesu, integracje, utrzymanie              | `BRAK`          | `BRAK`              |

- Czy ceny wolno publikować? **tylko „od” / widełki orientacyjne**
- Co jest usługą flagową (jedna): **Websites — strona biznesowa**
- Czego **nie** robicie (a klienci pytają): `BRAK` — do potwierdzenia: identyfikacja wizualna /
  logo od zera, copywriting, abonamentowe SEO i marketing, utrzymanie i hosting jako osobna
  usługa, sklepy na gotowych platformach

## 5. Dowody

Wpisujemy tylko to, co da się potwierdzić.

- Liczba lat na rynku: `BRAK`
- Liczba zrealizowanych zleceń / klientów: `BRAK` — **bez potwierdzenia żadna liczba nie wchodzi
  na stronę**
- Ocena i liczba opinii w publicznym profilu: _nie dotyczy_ (brak profilu Google Business)
- Doświadczenie zawodowe: **praca przy systemach e-commerce w Univio** (do potwierdzenia, czy
  wolno wymieniać nazwę pracodawcy) oraz **wcześniejsze doświadczenie jako AI Engineer** —
  budowa rozwiązań automatyzujących pracę firm
- Nagrody: **zwycięstwo w konkursie organizowanym przez Univio** — system wspierający ocenę
  ryzyka przy udzielaniu kredytów kupieckich, zbudowany z bratem Michałem jeszcze przed
  zatrudnieniem w Univio. Co dokładnie wolno ujawnić: `BRAK`
- Zbudowane produkty: **Planik** — aplikacja webowa do planowania eventów, zaprojektowana
  i zbudowana we dwóch (model danych, backend, interfejs, wdrożenie). Szczegóły do case study:
  `BRAK`
- Projekty klienckie: `BRAK` — które istnieją, które wolno pokazać, jakie są zgody i materiały
- Marki / partnerzy, których wolno wymienić: `BRAK` — klienci Univio **nie** wchodzą na stronę
- Ubezpieczenie odpowiedzialności / gwarancja: `BRAK`

## 6. Opinie klientów

Tylko prawdziwe, z podaniem źródła. Nie edytujemy treści. Cel: minimum 3.

| Treść  | Autor (imię + inicjał) | Czego dotyczyła sprawa | Źródło + data |
| ------ | ---------------------- | ---------------------- | ------------- |
| `BRAK` |                        |                        |               |

Wzorzec dobrej opinii (ze strategii — **nie do publikacji**, to przykład formy): „Wojtek szybko
zrozumiał naszą ofertę i przełożył ją na stronę, która w końcu pokazuje klientom, czym różnimy
się od konkurencji.”

## 7. Zespół

- Kto jest twarzą firmy: **Wojciech Pawlik** — Web & Product Engineer
- Czy zgadza się na zdjęcie i imię na stronie? **tak** (imię i nazwisko to marka); zdjęcie:
  `BRAK`
- Drugi członek zespołu (tylko CodeBros): **Michał Pawlik** — zgoda na imię, rolę i zdjęcie:
  `BRAK`
- Liczba osób w zespole: 1 (projekty bezpośrednie) / 2 (CodeBros)

## 8. Proces obsługi

Krok po kroku, tak jak wygląda naprawdę (ze strategii §14):

1. **Rozmowa** — poznanie firmy: co sprzedaje, komu, jak klient podejmuje decyzję, dlaczego
   wybiera właśnie ją, gdzie traci klientów, czego ma dokonać strona lub system.
2. **Project brief** — krótki zestaw pytań (10–12) po rozmowie; odpowiedzi są materiałem
   wejściowym do projektu.
3. **Direction** — ustalenie komunikacji, struktury, UX, kierunku wizualnego i rozwiązań
   technicznych.
4. **Build** — development dopiero po ustaleniu kierunku.
5. **Review** — pokazanie działającej wersji i zebranie feedbacku w uporządkowany sposób.
6. **Refinement** — spacing, motion, content, mobile, detale UI, finalne interakcje.
7. **Launch** — testy, deployment, analytics, przekazanie projektu.

Pytania z project briefu dla klienta (12 pytań) są w
[`00-brand-strategy-input.md`](00-brand-strategy-input.md) §15 — kandydat na osobny materiał
do pobrania, poza zakresem pierwszej wersji strony.

## 9. Najczęstsze pytania klientów

Pytania, które słyszysz naprawdę — dosłownie, wraz z odpowiedziami. Sekcja FAQ nie wchodzi do kodu
na wymyślonych pytaniach.

| Pytanie | Odpowiedź |
| ------- | --------- |
| `BRAK`  |           |

## 10. Kanały i profile

- Google Business Profile: _nie dotyczy_
- GitHub: `BRAK`
- LinkedIn: `BRAK`
- Inne (X, Dribbble, Behance, Instagram): `BRAK`
- Numer WhatsApp: `BRAK`

## 11. Sprawy prawne

- Kto jest administratorem danych (nazwa + adres do polityki prywatności): `BRAK`
- Adres e-mail do spraw RODO: `BRAK`
- Czy istnieje gotowa polityka prywatności? `BRAK`
- Czy istnieje regulamin usług? `BRAK`
- Czy umowa z obecnym pracodawcą pozwala na działalność projektową po godzinach i na wymienianie
  nazwy pracodawcy na stronie sprzedażowej? `BRAK` — **blokuje sekcję „O mnie”**

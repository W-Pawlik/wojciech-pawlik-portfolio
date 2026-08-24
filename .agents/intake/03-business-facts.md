# Wejście 3 — Fakty o firmie

Wypełnia klient. Na tej podstawie powstaje `src/data/site.ts`, treść sekcji kontaktowej,
metadane i (później) JSON-LD.

**Każde pole to fakt, który pójdzie na stronę publiczną.** Pole, którego nie znasz, zostaw jako
`BRAK` — pusta strona jest lepsza niż zła informacja. Nic tutaj nie zostanie „uzupełnione
przykładowo”.

> **Stan 2026-08-24:** uzupełnione tym, co jest w [strategii marki](00-brand-strategy-input.md)
> (oferta, ceny, dowody, proces). Dane kontaktowe do publikacji są uzupełnione; formalne nadal
> pozostają `BRAK` — i to one
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
- Telefon (format do wyświetlenia): **+48 666 223 853**
- Telefon (format do `tel:`): **tel:+48666223853**
- Drugi telefon: _nie dotyczy_
- E-mail: **wojtek.pawlik17@gmail.com**
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

| Nazwa usługi                 | Co obejmuje                                                                                   | Cena od (liczba) | Od czego zależy cena                       | Czas realizacji | Gwarancja / warunki |
| ---------------------------- | --------------------------------------------------------------------------------------------- | ---------------- | ------------------------------------------ | --------------- | ------------------- |
| Landing page                 | Niewielka customowa strona dopasowana do firmy.                                               | 1200             | Zakres treści i poziom dopracowania        | `BRAK`          | `BRAK`              |
| Customowa strona internetowa | Strona firmowa lub usługowa, branding, logo, SEO, integracje i dodatkowe wymagania biznesowe. | 1400             | Zakres, treść, logika i integracje         | `BRAK`          | `BRAK`              |
| Strona + CMS                 | Customowa strona z CMS-em albo dedykowanym panelem do zarządzania treścią.                    | 1400             | CMS, zakres treści i proces firmy          | `BRAK`          | `BRAK`              |
| Custom system                | Aplikacja, portal, panel, obieg pracy lub system wewnętrzny.                                  | `IND`            | Zakres funkcjonalny, etapy, integracje     | `BRAK`          | `BRAK`              |
| Prototyp AI                  | Analiza procesu i prototyp wtedy, gdy AI rozwiązuje konkretny problem.                        | `IND`            | Dane, proces, integracje i poziom kontroli | `BRAK`          | `BRAK`              |

- Czy ceny wolno publikować? **tak, jako najniższą stawkę „od”; ostateczna wycena jest indywidualna**
- Promocja otwarcia: **pierwszych 3 klientów może otrzymać landing page wyceniony od 900 zł zamiast standardowych 1 200 zł**
- Co jest usługą flagową (jedna): **customowa strona internetowa**
- Branding firmy, logo i SEO: **mogą wejść w zakres procesu i cenę projektu**

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

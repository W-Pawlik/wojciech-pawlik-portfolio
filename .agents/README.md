# .agents - system instrukcji dla AI

Ten katalog jest kontraktem między człowiekiem a agentem AI pracującym w tym repozytorium.
Opisuje **czym jest projekt**, **jak ma wyglądać**, **jak ma być zbudowany** i **kiedy zadanie
jest skończone**.

Jeżeli kod i te dokumenty się rozjeżdżają, to jest błąd - napraw jedno albo drugie w tym samym
zadaniu.

## Stan: etapy 1–3 bootstrapu, strona główna statycznie gotowa

Projekt: **Wojciech Pawlik - Web & Product Engineer** (marka osobista, marka rozszerzona
CodeBros). Kierunek wizualny: **Editorial Engineering**.

Gotowe:

- [00-project-brief.md](00-project-brief.md) i [10-brand-strategy.md](10-brand-strategy.md)
  ze [strategii marki](intake/00-brand-strategy-input.md) - **do akceptacji właściciela repo**.
- [01-brand-and-design.md](01-brand-and-design.md) i **tokeny w `src/styles/theme.css`**
  z [kierunku wizualnego](intake/01-design-direction-input.md): paleta, typografia
  (Instrument Sans + IBM Plex Mono przez `next/font`), siatka, rytm, promienie, motion,
  BUILD TRACE, shot list.
- Decyzje projektu: [ADR-0010](decisions/0010-personal-brand-and-two-tier-architecture.md)
  (marka osobista zamiast lokalnej firmy) i
  [ADR-0011](decisions/0011-brand-values-in-tokens.md) (wartości brandowe w tokenach,
  z listą odstępstw wymuszonych kontrastem AA).

Brakuje: **logo/lockupu** (tymczasowo lockup typograficzny), **zdjęć** (shot list gotowy,
sesji nie było) oraz **faktów kontaktowych i treści dowodowych**
(`intake/03-business-facts.md`). Listę braków przypisanych do sekcji prowadzi
[„Czego brakuje”](00-project-brief.md#czego-brakuje--pytania-do-właściciela).

Strona główna jest zaimplementowana statycznie według briefu UX
([specs/01-home.md](specs/01-home.md)) - 11 sekcji, warstwa danych, copy w słownikach,
formularz kwalifikacyjny. Kolejne kroki z briefu: responsive pass, interakcje (navbar po
scrollu, drawer usług, prefill formularza), motion (GSAP: hero + przejście CodeBros),
visual QA. **Nowa sekcja nadal nie wchodzi do kodu bez wpisu w [specs/](specs/README.md).**

## Zasada nadrzędna

> Ta strona ma wyglądać jak realizacja, za którą klient zapłacił za branding, UX/UI, development
> i motion design. Nie jak szablon strony lokalnej firmy.

Każda decyzja implementacyjna rozstrzygana jest na korzyść **poczucia jakości**, nie na korzyść
liczby efektów.

Druga zasada, obowiązująca w każdym projekcie z tej templatki: **to strona prawdziwej firmy.**
Klient ma po niej napisać. W tym projekcie znaczy to: **wysłać formularz „Opowiedz mi
o projekcie”** - usługa jest projektowa i zdalna, więc telefon i adres są opcjonalne, a godzin
otwarcia nie ma ([ADR-0010](decisions/0010-personal-brand-and-two-tier-architecture.md)).
Dane kontaktowe, ceny i zakres usług muszą być prawdziwe i łatwe do znalezienia. Efekt wizualny
nigdy nie może utrudniać kontaktu.

Trzecia zasada, specyficzna dla tego projektu: **strona jest głównym elementem portfolio.**
Marka sprzedaje umiejętność projektowania i budowania takich stron, więc każdy niedopracowany
detal jest argumentem przeciw ofercie.

## Kolejność czytania

| Plik                                                                       | Kiedy jest obowiązkowy                                                        |
| -------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [11-bootstrap.md](11-bootstrap.md)                                         | Start projektu z templatki. Raz, na początku.                                 |
| [00-project-brief.md](00-project-brief.md)                                 | Zawsze. Firma, oferta, cel strony, lista sekcji i podstron.                   |
| [10-brand-strategy.md](10-brand-strategy.md)                               | Zawsze. Kim jest marka, komu sprzedaje, jakim tonem, jakimi hasłami.          |
| [01-brand-and-design.md](01-brand-and-design.md)                           | Każda praca wizualna: layout, typografia, kolor, fotografia.                  |
| [02-design-system.md](02-design-system.md)                                 | Każda linia CSS/Tailwind. Tokeny, primitives, zakazy.                         |
| [03-architecture.md](03-architecture.md)                                   | Każdy nowy plik. Struktura katalogów, granica serwer/klient, przepływ danych. |
| [04-coding-standards.md](04-coding-standards.md)                           | Każda linia TypeScriptu.                                                      |
| [05-animation-system.md](05-animation-system.md)                           | Każda animacja. Podział Motion / GSAP / CSS, scroll, timing, reduced motion.  |
| [06-testing.md](06-testing.md)                                             | Każda zmiana logiki lub komponentu.                                           |
| [07-quality-and-workflow.md](07-quality-and-workflow.md)                   | Przed zgłoszeniem zadania jako skończonego.                                   |
| [08-accessibility-and-performance.md](08-accessibility-and-performance.md) | Sekcje z obrazami, animacjami, formularzem. SEO, w tym lokalne.               |
| [09-content-and-copy.md](09-content-and-copy.md)                           | Każdy tekst widoczny dla użytkownika.                                         |

Dodatkowo:

- [intake/](intake/README.md) - szablony dokumentów wejściowych od klienta (branding, wireframe,
  fakty o firmie). To **wejście** procesu, nie dokumentacja projektu.
- [checklists/](checklists/) - listy kontrolne do odhaczenia przed zakończeniem zadania
  i przed publikacją.
- [decisions/](decisions/README.md) - decyzje architektoniczne (ADR). Zmieniasz decyzję →
  dopisujesz ADR, nie edytujesz starego.
- [specs/](specs/README.md) - specyfikacje pojedynczych sekcji i podstron, tworzone przed
  implementacją.

## Reguły pracy agenta

1. **Nie zaczynaj implementacji sekcji ani podstrony bez specyfikacji.** Jedna sekcja = jeden plik
   w `specs/`, zaakceptowany przed kodem.
2. **Nie dodawaj bibliotek.** Stack jest zamknięty
   ([ADR-0001](decisions/0001-stack-and-animation-split.md)). Nowa zależność wymaga ADR
   i zgody właściciela repo.
3. **Nie wymyślaj tokenów w locie.** Brakuje wartości → dodaj token w `src/styles/theme.css`
   i pokaż go na `/system`. Hexa, rozmiaru w pikselach ani krzywej bezier nie ma prawa być
   w komponencie.
4. **Nie oznaczaj zadania jako gotowego bez `pnpm check`.** Musi przejść formatowanie, lint,
   typy i testy.
5. **Nie zostawiaj martwego kodu.** Brak nieużywanych komponentów, propsów, plików,
   „na przyszłość”.
6. **Nie zgaduj treści ani faktów o firmie.** Copy pochodzi z briefu albo ze słowników.
   Nie ma treści → zapytaj. Wymyślony adres, cena albo opinia to nie placeholder,
   to dezinformacja.
7. **Nie przesuwaj marki.** Poziom, ton i hasła są ustalone w [10-brand-strategy.md](10-brand-strategy.md).
   Każda sekcja przechodzi testy decyzyjne z tego dokumentu.
8. **Nie dodawaj podstrony, której nie ma w briefie.** Routing na to pozwala
   ([ADR-0006](decisions/0006-landing-plus-detail-pages.md)), ale każda trasa musi mieć powód
   sprzedażowy albo SEO i wpis w `src/data/routes.ts`.
9. **Nie zmieniaj reguły w tych dokumentach po cichu.** Zmiana zasady = zmiana dokumentu w tym
   samym zadaniu, a przy decyzji architektonicznej - nowy ADR.
10. **Nie przekraczaj budżetu akcentu.** Signal Orange to 5–8% powierzchni i jeden mocny
    element na widok. Akcent jako tekst na jasnym tle to `accent-strong`, nigdy `accent`
    ([ADR-0011](decisions/0011-brand-values-in-tokens.md)).
11. **Rows over cards.** Domyślną strukturą listy jest rekord z linią, nie karta. Karta
    wymaga uzasadnienia semantycznego, ma maks. `radius-marker` i nigdy cienia.
12. **Nie zwiększaj budżetu GSAP.** Maksymalnie cztery momenty scrollowe na całej stronie,
    przydzielane w specyfikacjach ([01-brand-and-design.md](01-brand-and-design.md#motion)).

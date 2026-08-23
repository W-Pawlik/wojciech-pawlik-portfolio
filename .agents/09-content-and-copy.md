# 09 — Treść i copy

## Skąd bierzemy treść

0. [10-brand-strategy.md](10-brand-strategy.md) — hasła, claimy, ton głosu. Zatwierdzony
   bank haseł jest tam; nie wymyślamy nowego hasła w komponencie.
1. Brief projektu — teksty sekcji podane wprost przez właściciela repo.
2. `src/i18n/dictionaries/*` — **wszystkie** teksty widoczne dla użytkownika.
3. `src/data/*.ts` — liczby, ceny, slugi, kolejność. Zero słów.

**Nie wymyślamy treści.** Brakuje copy → pytamy właściciela repo. „Lorem ipsum” nie wchodzi do repo.

Szczególnie nie wymyślamy: adresu, telefonu, godzin otwarcia, cen, terminów realizacji, opinii,
nazw obsługiwanych marek, certyfikatów, liczby lat na rynku, liczby klientów. To są fakty
o prawdziwej firmie — wymyślony fakt to wprowadzanie klienta w błąd, a nie placeholder.

Jeżeli sekcja wymaga danych, których nie ma, wstawiamy `TODO(brief)` w dokumentacji i **nie**
publikujemy sekcji.

Jeżeli właściciel repo świadomie chce danych zastępczych na czas przeglądu layoutu, to jest
osobna decyzja i wymaga ADR-a: flaga w `src/data/site.ts`, widoczny znacznik w trybie dev,
ostrzeżenie w buildzie i brak JSON-LD. Dane zastępcze muszą być **rozpoznawalnie** fałszywe.

## Język

- Interfejs i treść: języki ustalone w briefie. Główny język definiuje kształt słownika.
- Kod, nazwy plików, identyfikatory, komentarze, commity: **angielski**.
- Tłumaczenie nie jest przekładem słowo w słowo — to ta sama myśl powiedziana w drugim języku.
  Nazwy własne, marki i nazwy usług technicznych zostają.
- Obcojęzycznych wtrąceń w wersji głównej używamy tylko tam, gdzie brzmią naturalnie w branży.
  Nie mnożymy ich dla stylu.

## Ton

Konkretny, spokojny, fachowy, pewny, **normalny**. Bez sprzedażowej egzaltacji.
Tabela „nie tak / tak” z przykładami z tego projektu:
[10-brand-strategy.md](10-brand-strategy.md#tone-of-voice).

- Mówimy, co robimy, ile to trwa i ile kosztuje.
- Nie obiecujemy „najlepszej jakości w mieście” ani „kompleksowej obsługi na najwyższym poziomie”.
- Nie używamy wykrzykników.
- Piszemy do klienta bezpośrednio, bez nadmiernej poufałości.
- Możemy zaczynać od objawu albo od problemu, nie od chwalenia firmy.
- **Zdejmujemy obawę zamiast chwalić się.** Klient małej firmy usługowej boi się trzech rzeczy:
  że zapłaci więcej, niż usłyszał; że nie dowie się, co się właściwie stanie; że sprawa się
  przeciągnie. Dobre copy odpowiada na te trzy rzeczy, zanim ktoś zapyta.

Wzorzec: dwa zdania, drugie jest puentą.

### Zwroty zakazane

Sprzedażowe zadęcie: „pasja”, „excellence”, „najwyższe standardy”, „kompleksowa obsługa”,
„indywidualne podejście”, „lider na rynku”, „innowacyjne rozwiązania”.

Cenowe: „najtaniej”, „promocja”, „okazja”, „gwarancja najniższej ceny” — chyba że model biznesowy
firmy naprawdę na tym stoi i brief tak mówi.

Niepewne: „spróbujemy pomóc”, „postaramy się”. Zamiast tego: konkret, co zrobimy.

Obietnice, których nie kontrolujemy: „zawsze tego samego dnia”, „naprawimy wszystko”,
„100% zadowolenia”.

Lista rozszerzona per projekt: [10-brand-strategy.md](10-brand-strategy.md#zakazane-zwroty).

## Zasady redakcyjne

### Ceny

- Zawsze forma „od”, zawsze przez `formatPriceFrom()` z `@/lib/utils/format`.
- W danych trzymamy liczbę (`450`), nigdy sformatowany string.
- Spacje nierozdzielające — cena nie może się złamać między linie.
- Bez groszy.
- Cena „od” bez informacji, od czego zależy, jest gorsza niż brak ceny. Podajemy warunek.

### Liczby i oceny

- Separator dziesiętny zgodny z locale (`4,9` w PL) — przez `formatDecimal()`.
- Numeracja sekcji i kroków zawsze dwucyfrowa: `01`, `02`. Przez `formatOrdinal()`.

### Typografia treści

- Półpauza `—` w wtrąceniach i pauzach retorycznych. Nie dywiz `-`.
- Cudzysłowy zgodne z językiem: polskie `„…”`, angielskie `“…”`.
- Nagłówki wieloliniowe: łamanie linii jest **decyzją projektową**, przekazywaną jawnie jako
  tablica linii do `Headline` / `TextReveal`, nie zdane na przypadek.
- Nagłówki bez kropki na końcu, chyba że nagłówek jest zdaniem-puentą.

### CTA

- Czasownik + korzyść. Nie: `Wyślij`, `Kliknij tutaj`, `Dowiedz się więcej`, `Czytaj dalej`.
- Brzmienia są zatwierdzone w banku haseł. Nie wymyślamy wariantów w komponencie.
- Na stronie jest kilka punktów CTA, ale **jeden cel**. Telefon i formularz to dwie drogi do tego
  samego — telefon zwykle wygrywa na mobile, formularz na desktopie.

### Komunikaty formularza

- Błąd mówi, co zrobić: `Podaj numer telefonu (9 cyfr).` Nie: `Nieprawidłowa wartość`.
- Komunikaty walidacji są w słownikach i wstrzykiwane do schematu Zod
  (`src/lib/validation/contact.ts`) — jedno miejsce, ten sam tekst na kliencie i na serwerze.
- Success state mówi, **co się teraz stanie**: kto się odezwie i w jakim czasie.
  Nie „Formularz został wysłany”.
- Pod formularzem zdejmujemy obawę: jedno krótkie zdanie („Bez zobowiązań.”).

## Dowód społeczny

Konkret zamiast ogólników. Opinia bez kontekstu nie działa — najlepiej imię, inicjał nazwiska
i **czego dotyczyła sprawa**.

Opinie muszą być prawdziwe. Jeżeli klient ma opinie w publicznym profilu, cytujemy je z podaniem
źródła i nie edytujemy treści.

Liczby zawsze z etykietą, co oznaczają: liczba bez okresu i zakresu nic nie mówi.

Ocena i liczba opinii **starzeją się**. Wpisujemy je do danych dopiero po weryfikacji w profilu
i podajemy źródło. Wartość z briefu jest stanem historycznym, nie faktem do skopiowania w kod.

## Opis usługi

Zakres i warunki, nie przymiotniki:

```
Nazwa usługi
Zakres: co konkretnie wchodzi
Czas: ile to trwa
Cena: od X
Gwarancja / warunki: jeżeli są
```

Czas realizacji i warunki podajemy zawsze, gdy je znamy — pokazują, że proces jest przewidywalny.

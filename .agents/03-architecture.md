# 03 — Architektura kodu

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Motion for React ·
GSAP + ScrollTrigger · Zod · Vitest

Scroll jest natywny — bez biblioteki smooth-scroll ([ADR-0004](decisions/0004-native-scroll.md)).

Stack jest **zamknięty** — patrz [ADR-0001](decisions/0001-stack-and-animation-split.md).
Nowa zależność wymaga nowego ADR i zgody właściciela repo.

## Struktura katalogów

```
src/
  app/                    routing, metadane, pliki konwencji Next
    robots.ts  sitemap.ts  manifest.ts   (bez prefiksu locale)
    icon.svg
    [locale]/             każdy route żyje pod segmentem locale
      layout.tsx          root layout: fonty, CSS, skip link, <main>
      page.tsx            strona główna — płaska lista sekcji
      system/page.tsx     wewnętrzna referencja design systemu
      error.tsx           route error boundary
      not-found.tsx

  components/
    layout/               Navbar, Footer, MobileMenu, przełącznik języka
    sections/             jedna sekcja strony = jeden plik
    ui/                   primitives bez wiedzy o domenie
    motion/               primitives animacyjne (klienckie)
    form/                 formularz kontaktowy (wyspa kliencka)

  hooks/                  hooki wielokrotnego użytku
  lib/
    motion/               tokeny, warianty, leniwe ładowanie GSAP
    seo/                  budowa metadanych, origin
    styles/               odczyt tokenów koloru dla strony /system
    utils/                cn, formatowanie, kontrast
    validation/           schematy Zod (współdzielone klient ↔ serwer)
    images/               blur.ts — GENEROWANY przez scripts/prepare-images.mjs
  data/                   liczby, slugi, ścieżki do zdjęć, trasy — BEZ tekstów
  i18n/                   config, słowniki, dostęp serwerowy
  server/
    contact/              Server Action formularza + warstwa dostarczania
  styles/                 globals, theme, base, utilities
  proxy.ts                przekierowanie na prefiks języka
```

Katalog `sections/` w świeżej templatce jest pusty — wypełnia go etap 4
[bootstrapu](11-bootstrap.md), sekcja po sekcji, każda ze specyfikacją.

## Reguły struktury

- **Brak plików barrel** (`index.ts` re-eksportujących). Importujemy bezpośrednio z pliku.
  Powód: czytelny graf zależności, brak cykli, brak przypadkowego wciągania klienckiego kodu
  do serwerowego ([ADR-0002](decisions/0002-src-and-no-barrels.md)).
- **Jeden komponent na plik**, nazwa pliku `kebab-case`, nazwa komponentu `PascalCase`.
- Komponent używany **tylko** w jednej sekcji zostaje w pliku tej sekcji albo w katalogu tej sekcji.
  Do `ui/` awansuje dopiero, gdy ma drugie użycie.
- Import przez alias `@/*`. Ścieżki `../../` są zablokowane lintem (`../` w obrębie folderu jest OK).

## Granica serwer / klient

**Domyślnie wszystko jest Server Component.** `'use client'` to decyzja, którą trzeba uzasadnić.

Nie oznaczamy całej strony jako klienckiej tylko dlatego, że są animacje.

| Warstwa                           | Typ    | Dlaczego                                          |
| --------------------------------- | ------ | ------------------------------------------------- |
| `app/[locale]/page.tsx`, sekcje   | serwer | Statyczny HTML, treść w źródle strony, dobre SEO. |
| `components/ui/*`                 | serwer | Styl to CSS. Hover działa bez JS.                 |
| `components/motion/*`             | klient | Obserwator widoczności, `useRef`, zdarzenia.      |
| `components/form/*`, `MobileMenu` | klient | Prawdziwa interaktywność.                         |
| `server/contact/*`                | serwer | Server Action + `server-only`.                    |

Wzorzec: **sekcja serwerowa opakowuje małą wyspę kliencką.** Nagłówek, treść i obrazy renderuje
serwer; klient dostaje tylko to, co musi reagować.

Nie tak:

```tsx
'use client' // cała sekcja kliencka, bo jest jeden slider
export function ServicesSection() { ... }
```

Tak:

```tsx
// server
export async function ServicesSection() {
  const dict = await getDictionary()

  return (
    <Section id={SECTION_IDS.services}>
      <Container>
        <SectionHeader index={1} label={dict.services.label} headlineLines={dict.services.headline} />
        <ServicesList items={...} /> {/* jedyny 'use client' */}
      </Container>
    </Section>
  )
}
```

## Routing: landing plus podstrony

Pełna decyzja: [ADR-0006](decisions/0006-landing-plus-detail-pages.md). Minimum:

- **Strona główna niesie wszystkie kluczowe informacje.** Klient nie musi nigdzie klikać,
  żeby wiedzieć, co robimy, ile to kosztuje i jak się skontaktować.
- **Podstrona istnieje dla szczegółu i dla frazy w wyszukiwarce**, nie dla porządku w menu.
  Jedna usługa = jedna intencja wyszukiwania = jedna trasa.
- **Każda trasa ma wpis w `src/data/routes.ts`.** To jest źródło prawdy dla nawigacji, sitemapy
  i breadcrumbów. Trasa bez wpisu nie trafi do sitemapy — i to jest jedyny mechanizm, który
  o tym pilnuje.
- Sekcja na landingu, która ma odpowiednik-podstronę, kończy się linkiem do niej. Nie duplikujemy
  treści: landing mówi „co i od ile”, podstrona mówi „jak dokładnie i dlaczego”.

## Wielojęzyczność

Pełna decyzja: [ADR-0003](decisions/0003-i18n-routing-and-dictionaries.md). Minimum:

- Każdy route żyje pod `src/app/[locale]/`. Wszystkie locale są prerenderowane statycznie.
- **Server Component bierze treść przez `getDictionary()` z `@/i18n/server`** — bez przekazywania
  `locale` przez propsy.
- **Komponent kliencki dostaje teksty jako propsy.** `next/root-params` w nim nie działa.
- `@/i18n/dictionaries` jest wolny od importów z Next i może być użyty na kliencie.
  `@/i18n/server` importuje `next/root-params` — import tego modułu z komponentu klienckiego
  **wysadza build**, nawet jeśli funkcja nie zostanie wywołana.
- Słownik języka głównego definiuje kształt (`type Dictionary = typeof pl`), pozostałe są nim
  typowane. Brakujący klucz to błąd kompilacji.
- Projekt jednojęzyczny zostaje przy tej samej strukturze z jednym locale — to nie jest koszt,
  a dodanie drugiego języka później jest wtedy zmianą danych, nie architektury.

## Dane

`src/data/` trzyma **tylko to, co jest niezależne od języka**: ceny, ścieżki do zdjęć, slugi,
proporcje kadrów, zakresy parallaxu, kolejność, trasy. Wszystkie słowa są w słownikach.

- `site.ts` — fakty o firmie: nazwa, adres, telefon, godziny, social. Jedno źródło prawdy dla
  stopki, sekcji kontaktu, metadanych i JSON-LD.
- `navigation.ts` — kotwice sekcji (`SECTION_IDS`) i kolejność menu.
- `routes.ts` — trasy strony. Podstawa nawigacji i sitemapy.

Zasady:

- `as const` + typ wyprowadzony z danych (`(typeof X)[number]`), nie ręcznie pisany interfejs obok.
- Ceny jako liczby (`450`), nigdy jako sformatowane stringi. Formatowanie robi `formatPriceFrom()`.
- Kotwice sekcji wyłącznie z `SECTION_IDS`. Sekcja renderuje dokładnie ten `id`.
- Zero HTML i zero tekstów widocznych dla użytkownika w danych.
- Klucze łączące dane ze słownikiem (np. slug usługi → jej opis) muszą mieć **test parzystości**
  w obie strony. TypeScript sam tego nie złapie, jeżeli klucz jest zwykłym stringiem.

## Formularz — przepływ

```
ContactForm (client)
  → walidacja schematem Zod (UX)
  → submitContact (Server Action, 'use server')
      → schemat.safeParse(FormData)              ← pełna, ponowna walidacja
      → deliverContactRequest(request)           ← jedyny efekt uboczny
      → ContactFormState: success | error
  → success state
```

Zasady bezpieczeństwa:

- Server Action to **publiczny endpoint POST**. Walidacja po stronie klienta służy wyłącznie UX.
- Serwer nigdy nie ufa danym z klienta i waliduje cały payload jeszcze raz.
- Honeypot: pole, którego człowiek nie wypełnia, ukryte przed czytnikiem ekranu i przed Tabem.
  Wypełnione = bot; zwracamy sukces i wyrzucamy zgłoszenie, żeby nadawca nie wiedział, co go zdradza.
- Komunikat błędu dla użytkownika jest ogólny i daje ścieżkę wyjścia (ponów / zadzwoń).
  Szczegóły trafiają do logów serwera, nigdy do przeglądarki.
- Plik `'use server'` może eksportować **wyłącznie funkcje async**. Stałe i typy →
  `contact-form-state.ts`.
- `deliverContactRequest()` jest jedyną granicą do świata zewnętrznego. Wymiana loga na dostawcę
  e-mail to zmiana jednego pliku ([ADR-0007](decisions/0007-contact-delivery.md)).

## Nazwy plików i symboli

| Element         | Konwencja                 | Przykład                            |
| --------------- | ------------------------- | ----------------------------------- |
| Plik komponentu | `kebab-case.tsx`          | `services-list.tsx`                 |
| Komponent       | `PascalCase`              | `ServicesList`                      |
| Hook            | `use-*.ts` / `useX`       | `use-media-query.ts`                |
| Stała modułowa  | `SCREAMING_SNAKE`         | `SECTION_IDS`, `DURATION`           |
| Typ / union     | `PascalCase`              | `ContactFormState`, `ButtonVariant` |
| Test            | `*.test.ts(x)` obok pliku | `button.test.tsx`                   |

Kod, identyfikatory i komentarze — **po angielsku**.
Treść widoczna dla użytkownika — w słownikach, nigdy w komponencie
(patrz [09-content-and-copy.md](09-content-and-copy.md)).

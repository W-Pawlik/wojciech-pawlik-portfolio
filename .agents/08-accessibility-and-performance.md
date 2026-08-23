# 08 — Dostępność, wydajność i SEO

Dostępność i wydajność nie są dodatkiem do „efektownej strony”. Są częścią tego, co sprawia,
że strona wygląda na drogą — i tego, czy klient w ogóle doczeka jej wczytania.

## Dostępność

### Semantyka

- Dokładnie **jeden `<h1>`** na stronie — nagłówek hero.
- Nagłówki sekcji to `<h2>`, nie „duży `<div>`”. Nie przeskakujemy poziomów.
- Sekcja to `<section>` z `id` z `SECTION_IDS`. Nawigacja to `<nav>`. Stopka to `<footer>`.
- Statystyki jako lista definicji (`<dl>` / `<dt>` / `<dd>`) — liczba bez etykiety nic nie znaczy.
- Opinia jako `<blockquote>` z autorem w `<figcaption>` albo `<cite>`.
- Godziny otwarcia jako tabela albo `<dl>`, nie jako ciąg `<p>`.
- Numer telefonu zawsze jako `<a href="tel:...">`. Adres w `<address>`.
- Ocena gwiazdkowa musi mieć tekstowy odpowiednik (`5 z 5`) dla czytników ekranu.

### Klawiatura i focus

- Każdy interaktywny element osiągalny Tabem, w logicznej kolejności.
- Focus ring jest zdefiniowany globalnie w `base.css`. **Nie usuwamy go.**
- Skip link jest w `layout.tsx` — widoczny po sfokusowaniu.
- Menu mobilne: zamykanie klawiszem `Escape`, focus uwięziony w overlayu, przywracany po zamknięciu.
- Slider (jeśli powstanie): obsługa strzałkami, `role="slider"` z `aria-valuenow`, `aria-label`.

### Modale i overlaye

Każdy modal musi mieć wszystkie te rzeczy naraz — dostarcza je `Overlay`, więc nie implementuj
ich od nowa:

- `role="dialog"` + `aria-modal="true"` + nazwa na panelu,
- zamykanie Escape, klikiem w tło i przyciskiem,
- blokada scrolla strony,
- **pułapka focusu** — bez niej Tab wychodzi na nawigację za przygaszonym tłem,
- focus wraca na element, który modal otworzył.

### Formularz

- Każde pole ma powiązany `<label>` (nie placeholder w roli etykiety).
- Błąd walidacji powiązany z polem (`aria-describedby`), region komunikatów z `aria-live="polite"`.
- Pola kontaktowe mają `autoComplete` (`name`, `tel`, `email`) — na telefonie to różnica
  między wysłanym i porzuconym formularzem.
- `inputMode="tel"` dla telefonu.
- Success state musi być ogłaszany, nie tylko animowany.
- Zgoda na przetwarzanie danych jest polem wymaganym i nie jest domyślnie zaznaczona.
- Honeypot jest ukryty dla czytnika ekranu (`aria-hidden`) i wyjęty z kolejności Tab
  (`tabIndex={-1}`) — inaczej blokuje użytkownika klawiatury.

### Obrazy

- Każde zdjęcie ma sensowny `alt` — opisujący, co jest na zdjęciu, nie „zdjęcie” i nie ciąg fraz
  kluczowych (upychanie fraz w `alt` to spam, nie SEO).
- Zdjęcie czysto dekoracyjne: `alt=""`. Nigdy brak atrybutu.
- Tekst nie jest częścią obrazu. Cennik jako zdjęcie tabeli to błąd, nie skrót.

### Kontrast

- `content` na `canvas` oraz `content-invert` na `canvas-invert` to bezpieczne pary.
- `content-tertiary` jest przeznaczony dla metadanych. Nie używamy go dla treści krytycznej.
- `content-dim` **nie jest kolorem tekstu do czytania** — to stan spoczynkowy animacji.
- Tekst na akcencie wyłącznie w `accent-contrast`.
- Kontrast wszystkich par palety jest liczony **na żywo** na `/system` — sekcja „Kontrast”
  czyta `--color-*` z `theme.css` i pokazuje werdykt AA/AAA. Zmieniasz kolor → sprawdzasz tam.
  Wymóg: AA (4,5:1 dla tekstu, 3:1 dla dużego i dla elementów UI).
- Token, który świadomie nie przechodzi AA (np. `content-ghost`), wolno użyć **wyłącznie**
  dekoracyjnie i musi to być zapisane w ADR warstwy wizualnej.

### Reduced motion

Pełny kontrakt w [05-animation-system.md](05-animation-system.md). Wymóg, nie opcja.

## Wydajność

### Obrazy

- **Wyłącznie `next/image`.** Nie wrzucamy dużych JPG jako `background-image`.
- Formaty: AVIF i WebP (skonfigurowane w `next.config.ts`). Oryginały trzymamy osobno, poza `public/`.
- Hero: `priority` — to LCP strony. Reszta: domyślne lazy loading.
- `sizes` obowiązkowe dla każdego obrazu responsywnego. Bez tego przeglądarka ściąga największy wariant.
- Galeria nie ładuje wszystkich zdjęć na start.

### Przygotowanie plików

Zdjęcia nie trafiają do repo w takim rozmiarze, w jakim przyszły. Przed commitem:

```bash
pnpm images:prepare
```

- Każdy plik ma w skrypcie zapisany **docelowy rozmiar wyprowadzony z layoutu** (najszerszy boks
  CSS × 2 dla ekranów o dużej gęstości, potem ścięty tam, gdzie detal przestaje być widoczny).
  Progi są w `TARGETS` w `scripts/prepare-images.mjs`.
- Skrypt generuje też `src/lib/images/blur.ts`. Statyczne ścieżki nie dostają `blurDataURL`
  automatycznie, więc każdy `next/image` dostaje go przez `{...blurProps(src)}`. Bez tego zostaje
  skok „pusta ramka → zdjęcie”, którego samo zmniejszenie plików nie usuwa.
- Dodajesz zdjęcie → dopisz je do `TARGETS` i uruchom skrypt.
- Skrypt jest **jednorazowy i lossy** — nie wchodzi do CI i nie uruchamiamy go dwa razy na tym
  samym pliku. Karmimy go oryginałami.

Pełne uzasadnienie: [ADR-0008](decisions/0008-sharp-for-asset-preparation.md).

### Animacja

- Animujemy tylko `transform` i `opacity`.
- Nie animujemy elementów poza viewportem.
- Reveal odtwarza się raz.
- Sekcja nie może wywoływać layout thrashingu — pomiary DOM (`getBoundingClientRect`) poza pętlą
  klatek albo raz na zdarzenie.

### Bundle

- Sekcje zostają Server Components. Klient dostaje tylko wyspy interaktywności.
- Reveal-e i wejście hero są w CSS, więc żadna biblioteka animacji nie leży na ścieżce krytycznej
  ([ADR-0009](decisions/0009-css-reveals.md)).
- `optimizePackageImports` obejmuje `motion` i `gsap`.
- GSAP importujemy przez `@/lib/motion/gsap` — jedno miejsce rejestracji, brak przypadkowego
  wciągania pluginów.
- Bez wideo na mobile. Bez loadera. Strona pokazuje treść od razu.

### Cele

| Metryka                                         | Cel                                         |
| ----------------------------------------------- | ------------------------------------------- |
| LCP                                             | < 2,5 s                                     |
| CLS                                             | < 0,05 (rezerwujemy wymiary każdego obrazu) |
| INP                                             | < 200 ms                                    |
| Lighthouse Performance / Accessibility (mobile) | ≥ 90                                        |

## SEO

To strona prawdziwej firmy, więc SEO nie jest ozdobą — to najczęściej drugi po telefonie kanał
pozyskania klienta.

### Podstawa techniczna

- Metadane budujemy przez `buildMetadata()` z `@/lib/seo/metadata`. Nie piszemy obiektu `Metadata`
  od zera w route.
- Każda trasa ma własny `title` i `description`. Duplikaty title na dwóch podstronach to błąd.
- Open Graph i Twitter card spójne, obraz 1200 × 630.
- `robots.ts`, `sitemap.ts`, `manifest.ts` istnieją i są zasilane z `src/data/routes.ts`.
- Treść musi być w źródle HTML — to konsekwencja trzymania sekcji na serwerze.

### Lokalne SEO

- **NAP (nazwa, adres, telefon) w jednym miejscu.** `src/data/site.ts` jest źródłem prawdy
  i musi być zgodny co do znaku z profilem Google Business Profile. Rozjazd „ul.” vs „ulica”
  osłabia dopasowanie.
- **JSON-LD `LocalBusiness`** (albo właściwszy podtyp) z adresem, telefonem,
  `openingHoursSpecification` i `geo`. **Warunek: najpierw prawdziwe dane w `site.ts`.**
  Znaczniki powtarzające dane zastępcze to markup wprowadzający w błąd. `Review` /
  `AggregateRating` dodajemy dopiero, gdy opinie są prawdziwe i pochodzą od zidentyfikowanych
  klientów.
- **Jedna usługa = jedna intencja = jedna podstrona.** Nie upychamy pięciu fraz w jeden akapit
  na landingu ([ADR-0006](decisions/0006-landing-plus-detail-pages.md)).
- **FAQ** odpowiada na pytania, które klient zadaje przez telefon. Można je oznaczyć `FAQPage`.
- Mapa: iframe zewnętrznej mapy **nigdy na starcie**. Pod danymi kontaktowymi, poniżej pierwszego
  ekranu, z `loading="lazy"`. Iframe ładowany od razu potrafi kosztować więcej niż cała reszta strony.
- Konsekwencja tej decyzji: osadzenie zewnętrzne zwykle ustawia ciasteczka, więc **banner zgody
  jest blokerem uruchomienia**, nie opcją.

### Niepodważalne reguły

Każda ma test-strażnika (`site-url.test.ts`, `metadata.test.ts`, `robots.test.ts`,
`sitemap.test.ts`, `proxy.test.ts`).

- **Origin produkcyjny jest wymagany.** `NEXT_PUBLIC_SITE_URL` musi być adresem `https://`,
  a build produkcyjny bez niego pada (`resolveSiteUrl`). Strony są statyczne, więc canonical
  i hreflang są zapiekane w HTML — błędny origin jest nienaprawialny po deployu.
- **`x-default` towarzyszy każdemu zestawowi `hreflang`** i wskazuje ścieżkę bez prefiksu locale,
  bo to ona negocjuje język w proxy. Zestaw w sitemapie i w stronie musi być identyczny.
- **Nie łączymy `Disallow` z `noindex`** dla tego samego URL-a. Crawler, którego nie wpuszczono na
  stronę, nigdy nie przeczyta jej `noindex`. `/system` jest wyłączona z indeksu wyłącznie metadanymi.
- **Odpowiedź zależna od nagłówka deklaruje `Vary`.** Redirect locale w `proxy.ts` zależy od
  `Accept-Language` i musi to ogłaszać, inaczej współdzielony cache poda zły język.
- **Bez sztucznej świeżości.** `lastModified` w sitemapie tylko z prawdziwej daty zmiany treści,
  nigdy z zegara builda.

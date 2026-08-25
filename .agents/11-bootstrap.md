# 11 - Bootstrap: od templatki do projektu

Ten dokument uruchamia projekt. Wykonuje się go **raz**, na początku, w podanej kolejności.
Każdy etap ma wejście, wyjście i warunek przejścia dalej. Nie przeskakuj etapów: etap 4 bez
etapu 2 kończy się stroną, którą trzeba przemalować.

Po zakończeniu procedury usuń z tego dokumentu nic - zostaje jako zapis, co i kiedy ustalono.
Zaktualizuj natomiast `AGENTS.md` (nagłówek, stan projektu) i `.agents/README.md` (sekcja „Stan”).

## Wejście: trzy dokumenty od właściciela repo

Szablony: [intake/](intake/README.md).

| Dokument                                                       | Bez niego nie da się                             |
| -------------------------------------------------------------- | ------------------------------------------------ |
| [`intake/01-branding-input.md`](intake/01-branding-input.md)   | ustawić tokenów, typografii, kierunku wizualnego |
| [`intake/02-wireframe-input.md`](intake/02-wireframe-input.md) | ustalić listy sekcji, podstron i lejka           |
| [`intake/03-business-facts.md`](intake/03-business-facts.md)   | napisać jednego zdania treści bez zgadywania     |

**Brakuje dokumentu → pytasz, nie improwizujesz.** Wolno zacząć etapy, które nie zależą od
brakującego wejścia (np. tokeny bez treści), i trzeba to jawnie powiedzieć.

## Etap 0 - Higiena nowego repo

1. `pnpm install`, `cp .env.example .env.local`.
2. `pnpm check` i `pnpm dev` - szkielet musi być zielony **przed** pierwszą zmianą. Jeżeli nie
   jest, naprawiasz to jako pierwsze zadanie i nic innego przy tym nie ruszasz.
3. `package.json` → `name` na slug projektu.
4. Locale: jeżeli projekt jest jednojęzyczny, zostaw wyłącznie `pl` w `src/i18n/config.ts`
   i usuń `en` ze słowników - patrz [ADR-0003](decisions/0003-i18n-routing-and-dictionaries.md).
   Decyzję zapisz w briefie.
5. Domena: `NEXT_PUBLIC_SITE_URL` w `.env.local` oraz w `.github/workflows/ci.yml`.

**Warunek przejścia:** `pnpm check` i `pnpm build` przechodzą, `pnpm dev` pokazuje stronę startową.

## Etap 1 - Brief i strategia marki

Wejście: `intake/02-wireframe-input.md`, `intake/03-business-facts.md`, `intake/01-branding-input.md`.

1. Wypełnij [00-project-brief.md](00-project-brief.md): klient, oferta, grupy docelowe, problem
   klienta, cel strony, lejek, CTA, zakres (lista sekcji i podstron), poza zakresem, kryterium
   sukcesu, lista braków.
2. Wypełnij [10-brand-strategy.md](10-brand-strategy.md): pozycjonowanie, poziom marki, filary,
   ton, bank haseł, testy decyzyjne, zakazane fakty.
3. Każdy fakt, którego nie ma w dokumentach wejściowych, zapisz w sekcji „Czego brakuje” briefu
   jako pytanie do właściciela repo. Nie wypełniaj go domysłem.
4. Uzupełnij `src/data/site.ts` prawdziwymi danymi (NAP, godziny, social). Zapis musi być
   identyczny jak w profilu Google Business Profile firmy.

**Warunek przejścia:** właściciel repo akceptuje brief i strategię. Bez akceptacji nie ma etapu 2 -
kierunek wizualny bez ustalonego poziomu marki jest zgadywaniem.

## Etap 2 - Kierunek wizualny i tokeny

Wejście: `intake/01-branding-input.md`, zaakceptowany etap 1.

1. Wypełnij [01-brand-and-design.md](01-brand-and-design.md): nazwa kierunku, antywzorzec,
   kolor, typografia, layout, element charakterystyczny, fotografia, shot list, ikony, mobile.
2. Wpisz wartości do `src/styles/theme.css` - **wszystkie** placeholdery `TODO(brand)`.
   Struktura tokenów jest ustalona ([02-design-system.md](02-design-system.md)); wypełniasz
   wartości, nie wymyślasz nowych nazw, dopóki nie brakuje roli.
3. Podłącz fonty: `next/font` w `src/app/[locale]/layout.tsx` + `--font-brand-*` w
   `src/styles/base.css`. Subset `latin-ext` jest obowiązkowy dla polskich znaków.
4. Zaktualizuj listy `FONT_SIZES` i `TEXT_COLORS` w `src/lib/utils/cn.ts`, jeżeli zmieniłeś
   nazwy tokenów, i pokrycie testem.
5. Kolory tła/motywu: `viewport.themeColor` w layoucie i `background_color`/`theme_color`
   w `src/app/manifest.ts` muszą zgadzać się z `--color-canvas`.
6. Otwórz `/pl/system` i sprawdź **liczoną** tabelę kontrastu. Każda para używana do czytania
   musi mieć AA. Jeżeli nie ma - poprawiasz token, nie tabelę.
7. Napisz ADR: „Wartości brandowe w tokenach” (status Accepted), z uzasadnieniem palety
   i typografii. To zamyka dyskusję o wyglądzie.

**Warunek przejścia:** `/system` wygląda jak system, kontrast przechodzi, ADR zapisany.

## Etap 3 - Nawigacja i szkielet strony

1. `src/data/navigation.ts` - `SECTION_IDS` z wireframe'u, kolejność menu (maks. 4–5 pozycji).
2. `src/data/routes.ts` - wszystkie trasy z briefu. Trasa bez wpisu nie trafi do sitemapy.
3. Navbar, footer, menu mobilne, przełącznik języka - dopięte do prawdziwych danych i tras.
4. Metadane per trasa przez `buildMetadata()`. Brak duplikatów `title`.

**Warunek przejścia:** `pnpm build` prerenderuje wszystkie trasy dla wszystkich locale,
`/sitemap.xml` je zawiera, `/robots.txt` się zgadza.

## Etap 4 - Specyfikacje i implementacja sekcji

Dla każdej sekcji z wireframe'u, po kolei:

1. Specyfikacja w [specs/](specs/README.md) - z szablonu. Zaakceptowana przed kodem.
2. Implementacja zgodnie z przebiegiem pracy z
   [07-quality-and-workflow.md](07-quality-and-workflow.md#przebieg-pracy-nad-sekcją).
3. Odhaczona [checklists/section-implementation.md](checklists/section-implementation.md).

Kolejność: sekcje bez zależności od brakujących faktów najpierw. Sekcja, która potrzebuje faktu,
którego nie ma, **nie wchodzi do kodu**.

Budżet motion przydzielasz w specyfikacjach, nie w trakcie implementacji: dwie, maksymalnie trzy
sekcje na stronie dostają mocną animację, reszta proste reveal-e
([05-animation-system.md](05-animation-system.md#intensywność--nie-rozkładamy-jej-równomiernie)).

## Etap 5 - Podstrony

Tylko te z briefu. Każda przez [checklists/new-route.md](checklists/new-route.md).

## Etap 6 - Motion pass

Dopiero gdy strona jest kompletna i czytelna bez animacji. Reveal-e, jeden moment scrollowy,
interakcje hover, polish. Każda animacja z tokenów i ze ścieżką reduced motion.

## Etap 7 - SEO i dane strukturalne

JSON-LD (`LocalBusiness` albo właściwszy podtyp), FAQ, OG image 1200 × 630, `lastModified`
w sitemapie tam, gdzie znamy prawdziwą datę. **Warunek: prawdziwe dane w `src/data/site.ts`** -
znaczniki powtarzające placeholdery to markup wprowadzający w błąd.

## Etap 8 - Uruchomienie

[checklists/launch.md](checklists/launch.md). Blokery publikacji są tam wypisane wprost:
dostawca e-mail, prawdziwe dane firmy, zgoda na ciasteczka jeżeli wchodzą osadzenia zewnętrzne,
zdjęcia, logo, polityka prywatności.

## Czego ten proces świadomie nie robi

- Nie generuje treści za klienta. Copywriting bez faktów to zmyślanie.
- Nie projektuje logo. Jeżeli nie ma logo, robimy lockup typograficzny i oznaczamy `TODO(brand)`.
- Nie dobiera zdjęć stockowych „na chwilę”, jeżeli fotografia jest częścią obietnicy jakości -
  zamiast tego dostarcza shot list do sesji.
- Nie dodaje analityki, chatu, CRM-a ani bannera zgody bez decyzji właściciela (ADR).

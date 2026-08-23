# Checklist — nowa podstrona

Landing niesie całość, podstrona niesie szczegół —
[ADR-0006](../decisions/0006-landing-plus-detail-pages.md).
Ta lista jest **dodatkiem** do [section-implementation.md](section-implementation.md),
nie zamiast niej.

## Uzasadnienie

- [ ] Trasa jest w briefie albo została zaakceptowana przez właściciela repo.
- [ ] Ma własną intencję wyszukiwania — inną niż landing i niż pozostałe podstrony.
- [ ] Ma treść, której nie da się sensownie zmieścić na landingu. Nie powstaje „dla porządku w menu”.

## Rejestracja

- [ ] Wpis w `src/data/routes.ts` (ścieżka, klucz copy, czy wchodzi do nawigacji).
- [ ] Slug bez ogonków, ten sam dla wszystkich locale — patrz ADR-0003.
- [ ] Widnieje w sitemapie (sprawdzone na `/sitemap.xml`, nie tylko w kodzie).
- [ ] Etykieta w nawigacji jest we wszystkich słownikach.

## Metadane

- [ ] `generateMetadata` przez `buildMetadata()` z własnym `title` i `description`.
- [ ] `title` nie duplikuje żadnej innej trasy.
- [ ] `description` opisuje treść tej strony, nie firmę w ogóle.
- [ ] `alternates.canonical` wskazuje wersję z prefiksem locale, `hreflang` zawiera `x-default`.
- [ ] Jeżeli strona ma własne zdjęcie OG — dodane, 1200 × 630.

## Treść i linkowanie

- [ ] Dokładnie jeden `<h1>`.
- [ ] Sekcja na landingu, której podstrona jest rozwinięciem, linkuje do niej.
- [ ] Podstrona linkuje z powrotem do CTA/kontaktu — nie jest slepą uliczką.
- [ ] Breadcrumb albo widoczna droga powrotu.
- [ ] Treść nie jest przeklejona z landingu (duplicate content między własnymi stronami).

## Domknięcie

- [ ] `pnpm build` — trasa jest prerenderowana dla wszystkich locale.
- [ ] Wejście pod adres bez prefiksu locale przekierowuje poprawnie.
- [ ] Nieistniejący slug daje 404, nie błąd renderowania.

# Wojciech Pawlik — Web & Product Engineer

Strona marki osobistej: projektowanie i budowa stron, systemów webowych i automatyzacji AI dla
małych i średnich firm. Przy większych produktach — razem z bratem Michałem jako **CodeBros**.

Jedyny cel strony: **doprowadzić właściciela firmy do rozmowy o projekcie przez formularz
„Opowiedz mi o projekcie”.**

Hasło główne: _Strony i systemy dopasowane do biznesu. Nie do szablonu._

Repozytorium powstało z prywatnej templatki `WebsiteNextJSTemplate` (Next.js 16 + system
instrukcji AI w `.agents/`). Różnice tego projektu wobec założeń templatki — marka osobista
zamiast lokalnej firmy, dwupoziomowa architektura marki, konwersja przez formularz
kwalifikacyjny — są rozstrzygnięte w
[ADR-0010](.agents/decisions/0010-personal-brand-and-two-tier-architecture.md).

## Stan

**Etap 1 bootstrapu:** [brief](.agents/00-project-brief.md) i
[strategia marki](.agents/10-brand-strategy.md) wypełnione ze
[strategii dostarczonej 2026-08-21](.agents/intake/00-brand-strategy-input.md) — do akceptacji.

Zablokowane: **etap 2 (kierunek wizualny, tokeny, fonty)** — brak brandingu; **sekcje strony** —
brak etapu 2 i części faktów; **publikacja** — brak e-maila, domeny, decyzji o językach i treści
case studies.

Pełny status i lista blokad: [`.agents/specs/00-implementation-plan.md`](.agents/specs/00-implementation-plan.md).
Lista braków przypisanych do sekcji:
[„Czego brakuje”](.agents/00-project-brief.md#czego-brakuje--pytania-do-właściciela).

## Praca w repo

```bash
pnpm install
cp .env.example .env.local   # PowerShell: Copy-Item .env.example .env.local
pnpm check                   # format:check → lint → typecheck → test
pnpm dev                     # → http://localhost:3000 (przekierowuje na /pl)
```

**Przed jakąkolwiek zmianą przeczytaj [`.agents/README.md`](.agents/README.md)** — ten katalog
jest kontraktem projektu: marka, system stylów, architektura, praktyki kodowania, animacje,
testy, definicja ukończenia zadania. Procedura startowa: [`.agents/11-bootstrap.md`](.agents/11-bootstrap.md).

Dokumenty wejściowe (archiwum tego, co dostarczono) — [`.agents/intake/`](.agents/intake/README.md):

| Dokument                     | Co zawiera                                                | Stan                        |
| ---------------------------- | --------------------------------------------------------- | --------------------------- |
| `00-brand-strategy-input.md` | strategia marki: pozycjonowanie, oferta, ceny, CTA, lejek | ✅ dostarczone 2026-08-21   |
| `01-branding-input.md`       | logo, kolory, typografia, kierunek wizualny, fotografia   | ⛔ `BRAK` w sekcjach 2–8    |
| `02-wireframe-input.md`      | lista sekcji, kolejność, podstrony, formularz             | 🟡 propozycja do akceptacji |
| `03-business-facts.md`       | e-mail, dane formalne, dowody, opinie, FAQ                | ⛔ dane kontaktowe `BRAK`   |

## Stack

Next.js 16 (App Router) · React 19 · TypeScript (strict+) · Tailwind CSS 4 · Motion · GSAP ·
Zod · Vitest + Testing Library. Scroll natywny, bez smooth-scrolla.

Stack jest zamknięty — nowa zależność wymaga ADR-a
([`.agents/decisions/`](.agents/decisions/README.md)).

## Co jest w środku

```
.agents/            system instrukcji AI: kontrakt projektu, checklisty, ADR-y, specyfikacje
.agents/intake/     dokumenty wejściowe (strategia marki, branding, wireframe, fakty)
.claude/            uprawnienia narzędziowe dla Claude Code
.github/workflows/  CI: pnpm check + pnpm build
scripts/            jednorazowe przygotowanie zdjęć (sharp) + generator blur placeholderów
src/app/            routing pod [locale], robots, sitemap, manifest, /system
src/components/     layout, sections, ui (primitives), motion, form
src/data/           liczby, slugi, trasy, fakty o marce — bez tekstów
src/i18n/           locale config, słowniki, dostęp serwerowy
src/lib/            motion (tokeny, warianty, lazy GSAP), seo, utils, validation, styles
src/server/         Server Action formularza i warstwa dostarczania
src/styles/         globals, theme (tokeny), base, utilities
```

## Bramka jakości

```bash
pnpm check   # format:check → lint → typecheck → test
pnpm build   # wymaga NEXT_PUBLIC_SITE_URL w produkcji
```

Zadanie nie jest skończone, dopóki `pnpm check` nie przechodzi — pełna definicja ukończenia
w [`.agents/07-quality-and-workflow.md`](.agents/07-quality-and-workflow.md).

## Relacja z templatką

Zmiana, która dotyczy **każdego** projektu budowanego na tym szkielecie (reguła architektury,
reguła lintu, poprawka w primitives), należy do repozytorium templatki — nie do tej kopii.
Tutaj trzymamy wyłącznie to, co jest specyficzne dla marki Wojciech Pawlik / CodeBros.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Wojciech Pawlik - Web & Product Engineer

Strona marki osobistej: Wojciech Pawlik projektuje i buduje strony, systemy webowe
i automatyzacje AI dla małych i średnich firm. Przy większych produktach pracuje z bratem
Michałem jako **CodeBros**. Jedyny cel strony: **doprowadzić właściciela firmy do rozmowy
o projekcie przez formularz „Opowiedz mi o projekcie”.**

Poziom marki: **premium, ale osobisty** - jakość i proces jak w profesjonalnym studio, kontakt
jak z dobrym freelancerem. Idea: **rozwiązanie powstaje wokół biznesu, nie biznes wokół
rozwiązania.** Hasło główne: _Strony i systemy dopasowane do biznesu. Nie do szablonu._

To **nie jest** strona lokalnej firmy usługowej, na którą pisana była templatka - różnice
(marka osobista, dwupoziomowa architektura marki, konwersja przez formularz kwalifikacyjny,
`Person` zamiast `LocalBusiness`) są rozstrzygnięte w
[ADR-0010](.agents/decisions/0010-personal-brand-and-two-tier-architecture.md).

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Motion · GSAP · Zod · Vitest.
Scroll natywny, bez biblioteki smooth-scroll ([ADR-0004](.agents/decisions/0004-native-scroll.md)).

## Zacznij tutaj

**Przed jakąkolwiek zmianą przeczytaj [`.agents/README.md`](.agents/README.md).**

Ten katalog jest kontraktem projektu: opisuje markę, system stylów, architekturę, praktyki
kodowania, system animacji, podejście do testów i definicję ukończenia zadania.
Nie improwizuj wokół niego.

Minimum na start:

| Zadanie                     | Przeczytaj                                                                                                         |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Start nowego projektu       | [`11-bootstrap.md`](.agents/11-bootstrap.md)                                                                       |
| Cokolwiek                   | [`.agents/README.md`](.agents/README.md), [`00-project-brief.md`](.agents/00-project-brief.md)                     |
| Marka, copy, pozycjonowanie | [`10-brand-strategy.md`](.agents/10-brand-strategy.md), [`09-content-and-copy.md`](.agents/09-content-and-copy.md) |
| Styl, layout, typografia    | [`01-brand-and-design.md`](.agents/01-brand-and-design.md), [`02-design-system.md`](.agents/02-design-system.md)   |
| Nowy plik, nowa sekcja      | [`03-architecture.md`](.agents/03-architecture.md), [`04-coding-standards.md`](.agents/04-coding-standards.md)     |
| Nowa podstrona              | [`checklists/new-route.md`](.agents/checklists/new-route.md)                                                       |
| Animacja                    | [`05-animation-system.md`](.agents/05-animation-system.md)                                                         |
| Testy                       | [`06-testing.md`](.agents/06-testing.md)                                                                           |
| Domknięcie zadania          | [`07-quality-and-workflow.md`](.agents/07-quality-and-workflow.md)                                                 |
| Przed publikacją            | [`checklists/launch.md`](.agents/checklists/launch.md)                                                             |

## Stan projektu

**Etapy 1–2 bootstrapu wykonane. Brief i strategia czekają na akceptację właściciela repo.**

- ✅ Szkielet techniczny z templatki, `pnpm install`, `pnpm check` i `pnpm build` zielone.
- ✅ [`10-brand-strategy.md`](.agents/10-brand-strategy.md) i
  [`00-project-brief.md`](.agents/00-project-brief.md) wypełnione ze strategii marki
  ([`intake/00-brand-strategy-input.md`](.agents/intake/00-brand-strategy-input.md)).
- ✅ [ADR-0010](.agents/decisions/0010-personal-brand-and-two-tier-architecture.md) - marka
  osobista zamiast lokalnej firmy.
- ✅ **Kierunek wizualny „Editorial Engineering”**:
  [`01-brand-and-design.md`](.agents/01-brand-and-design.md), tokeny w
  `src/styles/theme.css`, fonty przez `next/font` (Instrument Sans + IBM Plex Mono),
  BUILD TRACE w `utilities.css`, kolory motywu w layoucie i manifeście,
  [ADR-0011](.agents/decisions/0011-brand-values-in-tokens.md).
- ✅ **Strona główna zaimplementowana statycznie** (Phase 01–02 briefu UX,
  [`specs/01-home.md`](.agents/specs/01-home.md)): 11 sekcji w kolejności lejka, warstwa
  danych w `src/data/`, całe copy w słownikach `pl`/`en`, formularz kwalifikacyjny
  z trzema pytaniami wyboru, navbar / stopka / menu mobilne.
- 🟡 `src/data/site.ts` - tożsamość marki wpisana, **dane kontaktowe i formalne puste**.
- ⛔ Logo - brak. Obowiązuje lockup typograficzny; favicon rysuje przecięcie BUILD TRACE.
- ⛔ Zdjęcia - brak. Shot list (7 ujęć) gotowy; `MediaSlot` rysuje opisane ramki.
- ⬜ Phase 03 (responsive pass), Phase 04 (navbar po scrollu, drawer usług, prefill
  formularza), Phase 05 (GSAP: hero + przejście CodeBros), Phase 07 (visual QA).
- ⛔ Podstrony `/work/[slug]`, `/about`, `/contact` - czekają na treść case studies.
- ⛔ Testimonials - nie w kodzie, brak prawdziwych opinii.
- ⛔ Publikacja - brak e-maila kontaktowego, domeny, decyzji o językach, klauzuli RODO.

Lista braków blokujących konkretne sekcje:
[„Czego brakuje”](.agents/00-project-brief.md#czego-brakuje--pytania-do-właściciela).
Aktualny plan i status: [`.agents/specs/00-implementation-plan.md`](.agents/specs/00-implementation-plan.md).

## Twarde zasady

1. `pnpm check` musi przechodzić. Bez tego zadanie nie jest skończone.
2. Stack jest zamknięty. Nowa zależność wymaga ADR w `.agents/decisions/`.
3. Domyślnie Server Component. `'use client'` tylko na wyspie, która naprawdę reaguje.
4. Zero surowych wartości wizualnych w komponentach - wyłącznie tokeny z `src/styles/theme.css`.
5. Zero tekstu widocznego dla użytkownika w komponentach - wyłącznie słowniki `src/i18n/dictionaries/`.
6. Każda animacja ma ścieżkę `prefers-reduced-motion`.
7. Brak plików barrel. Import przez alias `@/*`.
8. Sekcja nie wchodzi do kodu bez specyfikacji w `.agents/specs/`.
9. **Nie wymyślamy faktów o firmie** - adresu, ceny, terminu, gwarancji, opinii, certyfikatu.
   Brak danych → pytanie do właściciela repo i `TODO(brief)`.
10. **Nie przesuwamy marki** poza to, co ustalono w `10-brand-strategy.md`. Hasła i CTA pochodzą
    z banku haseł, nie z improwizacji.
11. **Pierwsza osoba pojedyncza.** „My”, „nasz zespół”, „nasi eksperci” to błąd - liczba mnoga
    wyłącznie w kontekście CodeBros.
12. **Projekty z pracy zawodowej (Univio) nie są portfolio tej marki** i nie wchodzą na stronę.
13. **Budżet akcentu: 5–8% powierzchni**, jeden mocny element na widok. Akcent jako tekst na
    jasnym tle to `accent-strong`. Strona musi działać po usunięciu akcentu.
14. **Rows over cards, borders over shadows.** Cienie nie istnieją w tym systemie.
15. **Maksymalnie cztery momenty GSAP/ScrollTrigger na całej stronie.**

## Polecenia

```bash
pnpm dev            # serwer developerski
pnpm build          # build produkcyjny
pnpm check          # format + lint + typy + testy
pnpm test:watch     # testy w trybie watch
pnpm test:coverage  # pokrycie z progami
pnpm images:prepare # jednorazowe przygotowanie zdjęć (sharp)
```

## Język

Kod, nazwy, komentarze i commity - angielski.
Dokumentacja w `.agents/` - polski. Treść widoczna dla użytkownika - słowniki w `src/i18n/dictionaries/`.

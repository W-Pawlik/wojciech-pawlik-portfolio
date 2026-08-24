# 01 — Strona główna (wszystkie sekcje)

> **Zaakceptowane 2026-08-21.** Ta specyfikacja jest zapisem dostarczonego briefu
> UX/wireframe — właściciel repo dostarczył go z gotowym flow, copy, layoutem kolumnowym
> i mapą motion. Jeden plik zamiast dwunastu, bo brief jest jednym dokumentem i rozbicie
> go na dwanaście kopii tworzyłoby dwanaście źródeł prawdy zamiast jednego.
>
> Kolejność implementacji jest z briefu: **Phase 01 (struktura + copy + dane) → Phase 02
> (statyczny desktop) → Phase 03 (responsive) → Phase 04 (interakcje) → Phase 05 (motion)**.
> Zasada nadrzędna: _statyczna strona musi wyglądać skończona, zanim dojdzie animacja._

## Flow

`RECOGNITION → DIFFERENTIATION → PROOF → SCALE → OFFER → PROCESS → CONVERSION`

## Sekcje — stan implementacji

| #   | Sekcja              | Funkcja w lejku | Anchor          | Stan            | Blokada                                    |
| --- | ------------------- | --------------- | --------------- | --------------- | ------------------------------------------ |
| 01  | Hero                | RECOGNITION     | —               | ✅ statycznie   | zdjęcie opcjonalne (wariant typograficzny) |
| 02  | Approach            | DIFFERENTIATION | `approach`      | ✅ statycznie   | —                                          |
| 03  | Selected Work       | PROOF           | `work`          | 🟡 statycznie   | screenshoty, treść case studies            |
| 04  | Services            | OFFER           | `services`      | ✅ statycznie   | drawer (Phase 04)                          |
| 05  | CodeBros transition | SCALE           | `codebros`      | 🟡 statycznie   | zdjęcie CodeBros, GSAP (Phase 05)          |
| 06  | CodeBros            | SCALE           | —               | 🟡 statycznie   | zdjęcie, treść case study konkursowego     |
| 07  | AI Automation       | OFFER           | `ai-automation` | ✅ statycznie   | —                                          |
| 08  | Process             | PROCESS         | `process`       | ✅ statycznie   | —                                          |
| 09  | Pricing             | OFFER           | `pricing`       | ✅ statycznie   | czasy realizacji                           |
| 10  | About               | PROOF           | `about`         | 🟡 statycznie   | portret, zgoda na nazwę pracodawcy         |
| 11  | Testimonials        | PROOF           | —               | ⛔ nie w kodzie | brak prawdziwych opinii                    |
| 12  | Final CTA           | CONVERSION      | —               | ✅ statycznie   | e-mail (secondary CTA ukryte, dopóki brak) |
| 13  | Lead form           | CONVERSION      | `contact`       | ✅              | dostawca e-mail, klauzula RODO             |

**Testimonials nie wchodzi do kodu**, dopóki nie ma minimum jednej prawdziwej opinii —
brief mówi to samo („sekcję pokazać tylko wtedy, kiedy istnieją prawdziwe dobre opinie”).
Pusty komponent czekający na dane byłby martwym kodem.

## Layout — siatka 12 kolumn (desktop)

| Sekcja        | Rozkład                                                                     |
| ------------- | --------------------------------------------------------------------------- |
| Hero          | H1 `1–10`, supporting + CTA `8–12`, metadata na dole pełna szerokość        |
| Approach      | label `1–2`, H2 `3–9`, body `9–12`; principles jako pełnoszerokościowe rows |
| Selected Work | media naprzemiennie `1–9` / `4–12`, metadata i tytuł poza osią obrazu       |
| Services      | numer `1`, nazwa `2–5`, opis `6–10`, CTA `11–12`, border-top na każdym row  |
| CodeBros      | H2 `1–8`, body `8–12`, proof rows pełna szerokość                           |
| AI            | H2 `1–7`, body `8–12`, mini flow pełna szerokość, use cases jako rows       |
| Process       | numer `1`, tytuł `2–5`, opis `6–11`                                         |
| Pricing       | nazwa `1–6`, opis `7–9`, cena `10–12` wyrównana do prawej                   |
| About         | obraz `1–6`, tekst `8–12`, trust metadata pod tekstem                       |
| Final CTA     | `display-statement` — jedyne użycie tego stopnia na stronie                 |

Mobile: każda sekcja komponowana od nowa (nie skalowany desktop). Rows pionowo, media
pełna szerokość, dekoracyjne adnotacje trace znikają.

## Dane, nie JSX

`src/data/projects.ts` · `services.ts` · `pricing.ts` · `process.ts` · `principles.ts` ·
`ai-automation.ts` · `trust.ts` — **struktura, liczby i klucze**. Całe copy jest
w słownikach, kluczowane tymi samymi kluczami; `dictionaries.test.ts` pilnuje parzystości.
Wymiana warstwy danych na CMS nie ruszy layoutu.

## Motion — budżet (Phase 05, jeszcze nie zaimplementowany)

Tylko **Hero** i **CodeBros transition** mają prawo wyglądać jak „momenty” (GSAP).
Reszta: reveal-e z `Reveal` / CSS, hover, drawer. Mapa z briefu jest w
[01-brand-and-design.md](../01-brand-and-design.md#motion).

Obecnie: hero używa CSS `hero-in` z templatki (paint bez hydracji), reszta jest statyczna.

## Czego ta specyfikacja świadomie nie robi

- **Podstrony** `/work`, `/services`, `/pricing`, `/about`, `/contact` oraz detale usług i
  realizacji mają własne kompozycje opisane w [page-multipage.md](page-multipage.md). Landing
  pozostaje skróconym lejkiem i nie jest layoutem tych tras.
- **Drawer usług** (Phase 04) — landing prowadzi do dedykowanych stron usług.
- **Prefill formularza z kontekstu** (`?type=website`) — Phase 04.
- **Zdjęcia** — portret Wojciecha i zdjęcie CodeBros są podłączone do odpowiednich sekcji.
  Selected Work używa tymczasowych zdjęć zewnętrznych jako wizualizacji layoutu, wyraźnie
  oznaczonych do późniejszej wymiany na prawdziwe screenshoty.

### Ambient hero background

Hero zachowuje kremową powierzchnię jako dominującą bazę. W pustej przestrzeni po prawej
stronie H1 pojawiają się trzy bardzo słabe, asymetryczne warstwy: ciepła poświata, neutralny
beż i niemal niewidoczna ciemna poświata. Warstwy są rozmyte i dryfują w cyklu 29–34 sekund;
grain ma charakter editorial-print i pozostaje poniżej progu zauważalności. To dekoracja bez
wpływu na kontrast ani interakcję z treścią. Przy `prefers-reduced-motion` warstwy są statyczne.
Nie wstawiamy stocku ani generowanych obrazów.

- **Analytics** — wymaga decyzji właściciela i ADR.

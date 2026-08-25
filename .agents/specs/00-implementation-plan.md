# 00 - Plan implementacji

**Żywy status projektu** - tutaj patrzy się na pytanie „co dalej” i „co blokuje”.
Ostatnia aktualizacja: **2026-08-21**.

Konwencja: `⬜ do zrobienia` · `🟡 w toku` · `✅ gotowe` · `⛔ zablokowane (czym)`.

Co dalej, w tej kolejności:

1. Akceptacja [briefu](../00-project-brief.md) i [strategii marki](../10-brand-strategy.md)
   przez właściciela repo - plus odpowiedzi z listy „Czego brakuje”.
2. Decyzje odblokowujące etap 0: języki (`pl` vs `pl + en`), domena.
3. Wybór wariantu H1 z banku haseł i zatwierdzenie listy sekcji → etap 3 (nawigacja).
4. Sesja zdjęciowa według [shot listy](../01-brand-and-design.md#shot-list-do-sesji) -
   odblokowuje „O mnie”, CodeBros i hero.

## Etap 0 - Szkielet techniczny ✅ (z templatki)

Tooling, bramka jakości `pnpm check`, CI, i18n, SEO (metadane, robots, sitemap, manifest),
formularz z Server Action, primitives UI i motion, strona `/system`, przygotowanie zdjęć.

## Etap 0 - Higiena nowego repo 🟡

- [x] `pnpm install`, `.env.local` z `.env.example`
- [x] `package.json` → `name: wojciech-pawlik`
- [x] `pnpm check` i `pnpm build` na zielono (build weryfikowany z tymczasowym
      `NEXT_PUBLIC_SITE_URL`)
- [ ] Locale w `src/i18n/config.ts` - ⛔ zablokowane decyzją `pl` vs `pl + en`
- [ ] `NEXT_PUBLIC_SITE_URL` w `.env.local` i w CI - ⛔ zablokowane brakiem domeny

## Etap 1 - Brief i strategia marki 🟡

- [x] `intake/00-brand-strategy-input.md` - strategia marki dostarczona (2026-08-21)
- [x] `00-project-brief.md` - klient, oferta, grupy, lejek, zakres, KPI, lista braków
- [x] `10-brand-strategy.md` - pozycjonowanie, poziom, filary, ton, bank haseł, testy decyzyjne
- [x] ADR-0010 - marka osobista i dwupoziomowa architektura marki
- [x] `src/data/site.ts` - tożsamość marki (nazwa, descriptor, opis)
- [x] `intake/01-branding-input.md` sekcje 3–5 (kolor, typografia, kierunek) z dokumentu
      art direction
- [ ] `intake/01-branding-input.md` sekcja 2 (logo) i 6 (zdjęcia) - ⛔ brak
- [ ] `intake/03-business-facts.md` - ⛔ brak danych kontaktowych, dowodów, FAQ, opinii
- [ ] `src/data/site.ts` - e-mail, forma prawna, profile
- [ ] Akceptacja właściciela repo (brief + strategia + odpowiedzi na listę braków)

**Blokuje etapy 4+ (sekcje). Etap 2 wykonany, bo kierunek wizualny dostarczono osobno.**

## Etap 2 - Branding i tokeny ✅

- [x] `01-brand-and-design.md` wypełniony (Editorial Engineering, BUILD TRACE, shot list)
- [x] `src/styles/theme.css` - wszystkie `TODO(brand)` zastąpione; nowe tokeny
      `accent-strong`, `line-control`, `canvas-invert-surface`, `radius-marker`
- [x] Fonty przez `next/font`: Instrument Sans + IBM Plex Mono, subset `latin` + `latin-ext`
- [x] `cn.ts` zaktualizowany (`accent-strong`) + test
- [x] Kolory motywu w layoucie i manifeście zgodne z `--color-canvas` (`#f3f0e9`)
- [x] `/system` - 18 par kontrastu liczonych z tokenów; dwie świadomie poniżej AA
      i tak opisane (`content-ghost`, `accent` na jasnym tle)
- [x] `radius-marker`, BUILD TRACE, hairline'y i akcenty pokazane na `/system`
- [x] Skala czasów i stagger przemapowane na dokument (`slow` 440 ms, `hero` 1100 ms,
      `loose` 0,12 s) + lustro w `src/lib/motion/tokens.ts`
- [x] Primitives dociągnięte do kierunku: primary button ciemny z pomarańczowym hover,
      secondary na `line-strong`, pola formularza na `line-control`, navbar pełnej szerokości
- [x] [ADR-0011](../decisions/0011-brand-values-in-tokens.md) - wartości brandowe w tokenach,
      z listą odstępstw wymuszonych kontrastem
- [ ] Logo / lockup - ⛔ brak (obowiązuje lockup typograficzny, favicon = przecięcie trace)
- [ ] OG image 1200 × 630 - ⛔ czeka na zdjęcia i lockup

## Etap 3 - Nawigacja i szkielet strony 🟡

- [x] `SECTION_IDS` z wireframe'u (9 kotwic w kolejności lejka) + `NAV_ITEM_ANCHORS`
- [x] Navbar (wordmark + descriptor, 3 pozycje, CTA), stopka w trybie ciemnym, menu mobilne
      z CTA, przełącznik języka
- [ ] `ROUTES` i `INDEXABLE_ROUTES` - na razie tylko `/`; `/work`, `/work/[slug]`,
      `/about`, `/contact` czekają na treść case studies
- [ ] **Stan navbara po scrollu**: 80 px → 64 px, brak tła nad hero, `navbar-surface`
      po scrollu, 250 ms (wymaga wyspy klienckiej - Phase 04)
- [ ] Metadane per trasa, bez duplikatów `title` (po dodaniu podstron)

## Etap 4 - Sekcje strony głównej 🟡 (Phase 01–02 z briefu UX gotowe)

Specyfikacja: [01-home.md](01-home.md). Kolejność sekcji i copy z briefu UX; motion i drawer
to Phase 04–05, więc kolumna „Statyk” jest tą, która dziś decyduje o jakości strony.

| #   | Sekcja                  | Spec | Statyk | Interakcje / motion  | Blokada                            |
| --- | ----------------------- | ---- | ------ | -------------------- | ---------------------------------- |
| 01  | Hero                    | ✅   | ✅     | ⬜ GSAP (Phase 05)   | -                                  |
| 02  | Approach                | ✅   | ✅     | ⬜ reveal            | -                                  |
| 03  | Selected Work           | ✅   | 🟡     | ⬜ reveal + hover    | screenshoty, treść case studies    |
| 04  | Services                | ✅   | ✅     | ⬜ drawer            | zakres usług spornych              |
| 05  | CodeBros (+ transition) | ✅   | 🟡     | ⬜ GSAP (Phase 05)   | zdjęcie IMG-03, zgoda Michała      |
| 06  | AI Automation           | ✅   | ✅     | ⬜ reveal            | -                                  |
| 07  | Process                 | ✅   | ✅     | ⬜ reveal            | -                                  |
| 08  | Pricing                 | ✅   | ✅     | ⬜ reveal            | czasy realizacji                   |
| 09  | About                   | ✅   | 🟡     | ⬜ image reveal      | portret IMG-01, zgoda co do Univio |
| 10  | Testimonials            | ✅   | ⛔     | -                    | brak prawdziwych opinii            |
| 11  | Final CTA               | ✅   | ✅     | ⬜ reveal            | e-mail (secondary CTA)             |
| 12  | Lead form               | ✅   | ✅     | ⬜ prefill kontekstu | dostawca e-mail, klauzula RODO     |

Wykonane przy okazji:

- [x] Warstwa danych: `projects`, `services`, `pricing`, `process`, `ai-automation`,
      `contact` - struktura i liczby, całe copy w słownikach
- [x] Słowniki `pl` i `en` przepisane na copy z briefu; `dictionaries.test.ts` pilnuje
      parzystości kluczy dla wszystkich list i niepustych nagłówków
- [x] Formularz kwalifikacyjny: trzy `ChoiceGroup` (potrzeba / etap / budżet), opis, kontakt;
      schemat Zod, Server Action i treść maila przepisane (+ testy)
- [x] `hasPublishableContactDetails` przedefiniowane na „e-mail albo telefon” (ADR-0010)
- [x] Primitives: `MediaSlot` (opisana ramka zamiast stocku), `TextLink`, `ChoiceGroup`
- [ ] Visual QA na 1440 / 1280 / 768 / 390 / 320 px (Phase 07 briefu) - **jeszcze nie robione**

## Etap 5 - Podstrony 🟡

| Trasa                  | Spec | Implementacja | Blokada                     |
| ---------------------- | ---- | ------------- | --------------------------- |
| `realizacje/[slug]`    | ✅   | ✅            | Dalsza treść case studies   |
| `services/*`           | ✅   | ✅            | Dalsze dopracowanie detali  |
| `codebros`             | ⬜   | ⬜            | Decyzja o osobnej trasie    |
| `ai-automation`        | ⬜   | ⬜            | Decyzja o osobnej trasie    |
| `polityka-prywatnosci` | ⬜   | ⬜            | Administrator danych, treść |

## Etap 6 - Motion pass ⬜

- [ ] Reveal-e rozłożone zgodnie z budżetem ze specyfikacji
- [ ] Jeden moment scrollowy (jeżeli w zakresie)
- [ ] Interakcje hover na desktopie, bramkowane wskaźnikiem
- [ ] Ścieżka reduced motion sprawdzona na całej stronie

## Etap 7 - SEO i dane strukturalne ⬜

- [ ] JSON-LD (po wprowadzeniu prawdziwych danych)
- [ ] FAQ
- [ ] Obraz OG 1200 × 630
- [ ] `lastModified` w sitemapie tam, gdzie znamy prawdziwą datę

## Etap 8 - Uruchomienie ⬜

- [ ] Dostawca e-mail podłączony i przetestowany
- [ ] Polityka prywatności i zgoda na ciasteczka (jeżeli są osadzenia)
- [ ] Zdjęcia finalne, logo finalne
- [ ] [checklists/launch.md](../checklists/launch.md) odhaczona w całości

## Blokady

Lista żywa, skrócona. Pełna lista braków z przypisaniem do sekcji:
[00-project-brief.md → Czego brakuje](../00-project-brief.md#czego-brakuje--pytania-do-właściciela).

| Co blokuje                                              | Co jest zablokowane                   | Zgłoszone  | Właściciel |
| ------------------------------------------------------- | ------------------------------------- | ---------- | ---------- |
| Logo / lockup - paleta i typografia dostarczone         | OG image, docelowy lockup w navbarze  | 2026-08-21 | Wojciech   |
| Zdjęcia - sesja według shot listy                       | Hero, sekcje 05 i 07, OG image        | 2026-08-21 | Wojciech   |
| Decyzja `pl` vs `pl + en`                               | Etap 0, słowniki, cały copywriting    | 2026-08-21 | Wojciech   |
| Domena i hosting                                        | Etap 0, metadane, sitemapa, CI        | 2026-08-21 | Wojciech   |
| E-mail kontaktowy + dostawca wysyłki + RODO             | Sekcje 11 i 12, publikacja            | 2026-08-21 | Wojciech   |
| Forma prawna działalności                               | Stopka, polityka prywatności, JSON-LD | 2026-08-21 | Wojciech   |
| Treść case studies (Planik, system konkursowy, klienci) | Sekcja 06 i podstrony realizacji      | 2026-08-21 | Wojciech   |
| Zgoda Michała + zakres CodeBros                         | Sekcja 07, podstrona `/codebros`      | 2026-08-21 | Wojciech   |
| Zgoda / brak przeszkód umownych co do nazwy pracodawcy  | Sekcja 05                             | 2026-08-21 | Wojciech   |
| Opinie klientów (min. 3) i prawdziwe pytania do FAQ     | Sekcje 09 i 10                        | 2026-08-21 | Wojciech   |

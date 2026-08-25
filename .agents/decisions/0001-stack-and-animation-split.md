# ADR-0001 - Stack technologiczny i podział odpowiedzialności animacji

- **Status:** Accepted
- **Data:** 2026-01-01

## Kontekst

Strona wizytówka małej firmy ma dwa sprzeczne wymagania: musi wyglądać na drogą (a więc mieć
warstwę motion i dopracowaną typografię) i musi wczytywać się na słabym łączu na telefonie, bo
tam trafia większość ruchu lokalnego. Każda dodatkowa biblioteka na ścieżce krytycznej działa
przeciw drugiemu wymaganiu.

Osobny problem: „jedna biblioteka do wszystkiego” zawsze kończy się użyciem najcięższego
narzędzia do najprostszego zadania - GSAP do hovera przycisku, biblioteka animacji do fade-in.

## Decyzja

Stack jest **zamknięty**:

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Motion for React ·
GSAP + ScrollTrigger · Zod · Vitest + React Testing Library · clsx + tailwind-merge · sharp (dev).

Podział odpowiedzialności animacji:

- **CSS** - reveal-e, wejście hero, hover, wszystkie przejścia „stan A → stan B”.
- **Motion for React** - interakcje wymagające animacji wyjścia i stanu: modale, drawery, menu,
  gesty, count-up, parallax. Ładowany leniwie.
- **GSAP + ScrollTrigger** - sekwencje sterowane scrollem, jeden–dwa momenty na stronę.
  Ładowany leniwie.

Nowa zależność wymaga nowego ADR i zgody właściciela repo. Dotyczy to również „małych” paczek:
biblioteka do slidera, do ikon czy do formularzy prawie zawsze zastępuje 30 linii własnego kodu
i dodaje własne konwencje.

## Konsekwencje

- Wybór narzędzia do animacji nie jest kwestią gustu - jest w tym dokumencie.
- Część rzeczy piszemy sami (slider, lightbox, accordion). To świadomy koszt: kilkadziesiąt linii
  zamiast paczki, której API i tak trzeba by opanować.
- Brak globalnego store, brak biblioteki formularzy, brak CMS-a. Jeżeli projekt naprawdę ich
  potrzebuje, to jest inny projekt niż strona wizytówka i wymaga rozmowy, nie `pnpm add`.
- Aktualizacje wersji są nudne i przewidywalne, bo zależności jest mało.

## Rozważone alternatywy

- **Tylko Motion.** Odrzucone: scroll-driven sekwencje w Motion są możliwe, ale mniej sterowalne
  niż ScrollTrigger, a Motion na ścieżce krytycznej opóźnia pierwszy render treści.
- **Tylko GSAP.** Odrzucone: brak integracji z cyklem życia Reacta dla animacji wyjścia
  (`AnimatePresence`), więcej kodu na proste stany.
- **Biblioteka komponentów (np. gotowy zestaw UI).** Odrzucone: strona ma wyglądać jak projekt
  dla tej konkretnej marki, a nie jak zestaw z domyślnymi promieniami i cieniami.

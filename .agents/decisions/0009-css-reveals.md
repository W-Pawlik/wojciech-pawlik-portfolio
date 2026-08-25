# ADR-0009 - Reveal-e w CSS, Motion tylko do interakcji

- **Status:** Accepted
- **Data:** 2026-01-01

## Kontekst

Odruchowe rozwiązanie animacji wejścia sekcji to komponent biblioteki animacji z wariantami
`initial` i `whileInView`. Koszt tego odruchu jest konkretny:

- biblioteka animacji (~120 kB) wchodzi do bundla **każdej** strony, bo reveal jest wszędzie,
- treść startuje od `opacity: 0` i pojawia się dopiero po pobraniu, sparsowaniu i zamontowaniu
  biblioteki,
- pierwszy ekran czeka na hydrację, mimo że mógłby pomalować się razem z dokumentem.

Efekt jest opisywany przez klienta jako „strona wolno się wczytuje”, a w metrykach widać go jako
opóźniony LCP przy poprawnym TTFB.

## Decyzja

1. **Reveal-e i wejście hero są w CSS.** Keyframe w `src/styles/utilities.css`, przełączany klasą.
2. Widoczność wykrywa jeden `IntersectionObserver` (`src/hooks/use-in-view.ts`), który po pierwszym
   trafieniu **rozłącza się**. Reveal nigdy nie odtwarza się drugi raz.
3. **Hero nie ma JavaScriptu w ogóle.** Sekwencja wejścia to opóźnienia keyframe.
4. Motion zostaje do tego, czego CSS nie potrafi: animacja wyjścia, gesty, animacje layoutu,
   count-up, parallax. Ładowany leniwie, poza ścieżką krytyczną.
5. `prefers-reduced-motion` dla animacji CSS żyje w **jednym** bloku w `utilities.css`. Animacje
   startujące od `opacity: 0` muszą tam jawnie dostać stan końcowy - samo skrócenie czasu trwania
   zostawiłoby treść niewidoczną.

## Konsekwencje

- Zachowanie reveal-i jest identyczne, moment wystąpienia znacznie wcześniejszy.
- Bundle stron publicznych nie zawiera biblioteki animacji.
- Stagger realizujemy opóźnieniem animacji per element (`RevealGroup` plus `RevealItem`), nie
  wariantami biblioteki.
- Bardziej złożone sekwencje, reagujące na pozycję scrolla w sposób ciągły, wymagają Motion albo
  GSAP - i to jest właściwy moment, żeby ich użyć.

## Rozważone alternatywy

- **Biblioteka animacji wszędzie.** Odrzucone: koszt na ścieżce krytycznej opisany powyżej.
- **Scroll-driven animations w CSS (`animation-timeline`).** Odrzucone na teraz: wsparcie
  przeglądarek jest niepełne, a mechanizm nie daje zachowania „raz i koniec” bez dodatkowego kodu.
  Do rozważenia w przyszłym ADR.

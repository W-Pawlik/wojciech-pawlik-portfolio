# ADR-0004 - Scroll natywny, bez biblioteki smooth-scroll

- **Status:** Accepted
- **Data:** 2026-01-01

## Kontekst

Strony „premium” często dodają smooth-scroll (Lenis, Locomotive), bo bezwładność przewijania
czyta się jako dopracowanie. Koszt: biblioteka przechwytuje zdarzenia scrolla i przesuwa treść
transformem, czyli staje między użytkownikiem a najczęstszą interakcją na stronie.

Konsekwencje są znane: rozjazd z natywnym scrollem na trackpadzie i na telefonie, konieczność
`scrollerProxy` dla ScrollTriggera, problemy z `position: sticky`, z kotwicami, z focusem
klawiatury i z przywracaniem pozycji przy powrocie „wstecz”.

Osobno: `scroll-behavior: smooth` w CSS jest darmowe, ale nie daje kontroli nad czasem - skok
z hero na dół strony animuje się ponad sekundę i czyta się jak zawieszenie.

## Decyzja

1. Scroll jest **natywny**. Nie dodajemy biblioteki smooth-scroll.
2. Nie ustawiamy `scroll-behavior: smooth`. Kotwice skaczą natychmiast.
3. Zostaje `scroll-padding-top` równe wysokości navbara, żeby cel kotwicy nie schował się pod nim.
4. Poczucie płynności budujemy animacjami wejścia treści, nie sterowaniem przewijaniem.

## Konsekwencje

- ScrollTrigger działa bez `scrollerProxy` i bez dzielenia zegara z inną biblioteką.
- `position: sticky`, przywracanie pozycji i nawigacja klawiaturą działają tak, jak użytkownik zna.
- Mniej kodu na ścieżce krytycznej.
- Tracimy efekt bezwładności. To świadoma strata: na stronie, której celem jest kontakt, płynność
  scrolla jest mniej warta niż to, że scroll zachowuje się przewidywalnie.

## Rozważone alternatywy

- **Lenis.** Odrzucone: koszty powyżej, przy zysku wyłącznie estetycznym.
- **`scroll-behavior: smooth`.** Odrzucone: brak kontroli nad czasem trwania.

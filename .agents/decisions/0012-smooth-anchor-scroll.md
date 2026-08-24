# ADR-0012 — Płynne przewijanie kotwic

- **Status:** Accepted
- **Data:** 2026-08-23
- **Supersedes:** ADR-0004, tylko w zakresie nawigacji do kotwic

## Decyzja

Odnośniki do sekcji na stronie używają natywnego `scroll-behavior: smooth`. Nie dodajemy
biblioteki przechwytującej scroll ani nie przesuwamy dokumentu przez `transform`. Dla
`prefers-reduced-motion: reduce` globalna reguła przywraca natychmiastowe przewijanie.

Natywny scroll, sticky navbar, focus klawiatury i przywracanie pozycji pozostają bez zmian.

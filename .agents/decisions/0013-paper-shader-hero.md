# ADR-0013 - Paper Shaders jako tło hero

- **Status:** Accepted
- **Data:** 2026-08-24

## Kontekst

Hero potrzebuje ruchomej, abstrakcyjnej warstwy wizualnej inspirowanej dostarczonym
przykładem `MeshGradient`. Dotychczasowa implementacja kafli była zbyt literalna
wobec wcześniejszego referencyjnego obrazu i nie dawała jakości płynnego shaderu.

## Decyzja

Używamy `@paper-design/shaders-react` wyłącznie w istniejącym komponencie
`AmbientBackground`. Hero zachowuje własną typografię, copy, CTA i system kolorów.
Shader działa jako dwie subtelnie złożone warstwy czarno-białego mesh gradientu,
a przy ograniczeniu ruchu zatrzymuje animację przez `speed={0}`.

Nie instalujemy `framer-motion`, `lucide-react`, `@radix-ui/react-slot` ani drugiej
implementacji Buttona, ponieważ należą do nieużywanej, przykładowej treści hero - projekt
ma już własny Button i własną bibliotekę Motion.

## Konsekwencje

- Pierwszy ekran zyskuje płynne, organiczne tło bez zmiany treści marki.
- Dochodzi jedna zależność shaderowa i koszt WebGL; warstwa pozostaje dekoracyjna,
  więc treść i CTA działają niezależnie od jej dostępności.
- Oryginalny parametr `wireframe` z przykładu nie jest użyty, ponieważ nie należy do
  API zainstalowanej wersji `MeshGradient`; drugi mesh daje podobną głębię bez błędnego API.

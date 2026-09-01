# ADR-0014 — Polski jako język główny i lokalizowane adresy

- **Status:** Accepted
- **Data:** 2026-09-01
- **Supersedes:** ADR-0003

## Decyzja

Wejście bez prefiksu języka zawsze kieruje do polskiej wersji (/pl). Angielska wersja jest wybierana
jawnie przez przełącznik języka (/en). Każda indeksowana trasa ma osobny polski i angielski path,
a slugi usług i case studies są lokalizowane zgodnie z językiem treści.

Przykłady: /pl/uslugi/strony-internetowe i /en/services/websites, /pl/o-mnie i /en/about.

## Konsekwencje

Linki wewnętrzne, canonical, hreflang i sitemap muszą korzystać z jednej mapy lokalizowanych tras.
Zmiana publicznego sluga wymaga przekierowania starego wariantu do nowego adresu.

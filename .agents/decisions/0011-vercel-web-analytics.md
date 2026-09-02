# ADR-0011 - Analityka odwiedzin przez Vercel Web Analytics

- **Status:** Accepted
- **Data:** 2026-09-02

## Kontekst

Właściciel chce mierzyć odwiedziny i popularność podstron wdrożonej strony, ale nie chce
na tym etapie dodawać Google Analytics, Meta Pixela, Hotjara ani marketingowych cookies.

## Decyzja

Używamy oficjalnego pakietu `@vercel/analytics` i komponentu `Analytics` w layoucie Next.js.
Analytics pozostaje bez własnych eventów zawierających dane osobowe. Włączenie usługi w
panelu Vercel i wdrożenie produkcji są wymagane, aby dane pojawiły się w dashboardzie.

## Konsekwencje

Vercel Web Analytics dostarcza zagregowane statystyki bez cookies według dokumentacji Vercel.
Polityka prywatności wymienia narzędzie i dostawcę hostingu. Gdyby w przyszłości pojawiły się
narzędzia marketingowe lub skrypty używające cookies, trzeba ponownie ocenić zgodę i baner.

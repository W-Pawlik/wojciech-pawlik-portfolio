# ADR-0002 — Katalog `src/`, brak plików barrel

- **Status:** Accepted
- **Data:** 2026-01-01

## Kontekst

Next.js pozwala trzymać kod w katalogu głównym albo w `src/`. Osobno: w projektach reactowych
odruchowo powstają pliki `index.ts` re-eksportujące zawartość katalogu.

W App Routerze pliki barrel mają konkretny, nieoczywisty koszt: import jednego komponentu z
`components/ui` wciąga cały moduł barrel, a wraz z nim każdy plik, który on re-eksportuje — również
te z `'use client'`. Granica serwer/klient przestaje być widoczna w kodzie, a bundle rośnie
z powodów, których nie widać w diffie.

## Decyzja

1. Cały kod aplikacji żyje w `src/`. W katalogu głównym zostają wyłącznie pliki konfiguracyjne.
2. **Zero plików barrel.** Importujemy bezpośrednio z pliku modułu.
3. Import między katalogami przez alias `@/*`. Ścieżki `../../` są zablokowane lintem;
   `../` w obrębie tego samego folderu jest dozwolone.

## Konsekwencje

- Import jest dłuższy, ale mówi prawdę o grafie zależności.
- Nie da się przypadkiem wciągnąć kodu klienckiego do serwerowego przez re-eksport.
- Brak cykli importów wynikających z barreli.
- Refaktor „przenieś plik” wymaga zmiany kilku importów. To akceptowalny koszt — IDE robi to samo.

## Rozważone alternatywy

- **Barrel per katalog.** Odrzucone: powód powyżej.
- **Kod w katalogu głównym.** Odrzucone: `src/` daje jednoznaczną granicę „to jest aplikacja”,
  co upraszcza `@source` w Tailwindzie i zakresy lintu.

# ADR-0008 — sharp do przygotowania zdjęć

- **Status:** Accepted
- **Data:** 2026-01-01

## Kontekst

Zdjęcia przychodzą z sesji albo od klienta w rozmiarach 3–8 MB. `next/image` optymalizuje je
w czasie żądania, ale:

- pierwsza (zimna) optymalizacja każdego wariantu jest tym dłuższa, im większy plik wejściowy,
- ogromne pliki i tak są w repozytorium, więc każdy klon i każdy deploy je ciągnie,
- statyczne ścieżki (w odróżnieniu od importów) **nie dostają** `blurDataURL`, więc zostaje skok
  „pusta ramka → zdjęcie”, który czyta się jak wolna strona.

## Decyzja

1. Jednorazowy skrypt `scripts/prepare-images.mjs` (`pnpm images:prepare`) na `sharp`:
   - przekodowuje każde zdjęcie w `public/images/` do **docelowej szerokości wyprowadzonej
     z layoutu** (najszerszy boks CSS podwojony dla ekranów o dużej gęstości, potem ścięty tam,
     gdzie detal przestaje być widoczny); progi są w `TARGETS`,
   - generuje `src/lib/images/blur.ts` — podgląd 16 px w base64 dla każdego pliku.
2. Każdy `next/image` na statycznej ścieżce dostaje placeholder przez `blurProps(src)`.
3. Skrypt **nie wchodzi do CI**. Jest lossy i jednorazowy: uruchomiony dwa razy kompresuje już
   skompresowane pliki. Odmawia zapisu, gdy wynik nie jest istotnie mniejszy.
4. Oryginały z sesji trzymamy poza repozytorium.
5. `sharp` jest zależnością **deweloperską**. Nie wchodzi do bundla.

## Konsekwencje

- Dodanie zdjęcia to dwa kroki: wpis w `TARGETS` i uruchomienie skryptu. Plik bez wpisu jest
  pomijany — renderuje się, ale w oryginalnym rozmiarze i bez placeholdera.
- Repozytorium zostaje lekkie, a LCP przewidywalne.
- Rozmiar docelowy trzeba zaktualizować, jeżeli layout sekcji zmieni szerokość kadru.

## Rozważone alternatywy

- **Tylko `next/image` bez wstępnego przygotowania.** Odrzucone: brak placeholdera dla ścieżek
  statycznych i ciężkie repo.
- **CDN obrazów.** Odrzucone: zewnętrzna zależność i abonament dla kilkunastu zdjęć, które
  zmieniają się raz w roku.
- **Statyczne importy zdjęć w JSX.** Odrzucone: dają placeholder, ale rozsypują ścieżki po
  komponentach i utrudniają trzymanie listy kadrów w `src/data/`.

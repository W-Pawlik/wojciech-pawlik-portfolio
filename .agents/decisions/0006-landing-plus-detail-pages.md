# ADR-0006 - Landing z całością treści plus podstrony szczegółowe

- **Status:** Accepted
- **Data:** 2026-01-01

## Kontekst

Dwa skrajne modele strony wizytówki:

- **Jedna strona.** Cała treść na landingu. Prosta w utrzymaniu, dobra dla ruchu z reklamy, ale
  konkuruje sama ze sobą o frazy: jedna strona nie może być najlepszą odpowiedzią na pięć różnych
  intencji wyszukiwania.
- **Klasyczny multipager.** Podstrona na każdą pozycję z menu. Dobra dla SEO, ale rozprasza
  klienta, który chce jednej rzeczy: dowiedzieć się, czy trafił dobrze, i zadzwonić.

Na stronie lokalnej firmy większość ruchu z telefonu wykonuje jedną czynność: przewija do momentu,
w którym uzna, że to właściwa firma, i szuka numeru.

## Decyzja

Model mieszany:

1. **Strona główna niesie wszystkie kluczowe informacje.** Klient nie musi nigdzie klikać, żeby
   wiedzieć, co robimy, ile to kosztuje i jak się skontaktować.
2. **Podstrona istnieje dla szczegółu i dla konkretnej frazy**, nie dla porządku w menu.
   Jedna usługa = jedna intencja wyszukiwania = jedna trasa.
3. **Każda trasa ma wpis w `src/data/routes.ts`.** To źródło prawdy dla nawigacji i sitemapy.
   Trasa bez wpisu nie trafi do sitemapy - i to jest jedyny mechanizm, który o tym pilnuje.
4. Sekcja na landingu, która ma odpowiednik-podstronę, kończy się linkiem do niej. Nie duplikujemy
   treści: landing mówi „co i od ile”, podstrona mówi „jak dokładnie i dlaczego”.
5. Nawigacja ma maksymalnie 4–5 pozycji. Menu nie jest spisem treści.

## Konsekwencje

- Trzeba pilnować duplikacji treści między landingiem a podstroną - to praca redakcyjna, nie
  techniczna.
- Liczba tras rośnie wolno i świadomie; każda ma powód zapisany w briefie.
- Klient z reklamy dostaje wszystko na landingu; klient z wyszukiwarki trafia od razu na szczegół.

## Rozważone alternatywy

- **Tylko landing.** Odrzucone przy ofercie z kilkoma wyraźnie różnymi usługami.
- **Pełny multipager z cienkimi podstronami.** Odrzucone: cienka podstrona z trzema zdaniami nie
  rankuje i rozprasza.

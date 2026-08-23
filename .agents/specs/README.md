# Specyfikacje

Jeden plik = jedna sekcja albo jedna podstrona. Nazwa: `NN-nazwa.md`, numer zgodny z kolejnością
na stronie (podstrony: `page-nazwa.md`).

Specyfikacja powstaje **przed** kodem i musi być zaakceptowana przez właściciela repo.
Bez niej nie zaczynamy implementacji — patrz [../07-quality-and-workflow.md](../07-quality-and-workflow.md).

Plan etapów: [00-implementation-plan.md](00-implementation-plan.md).

W świeżej templatce nie ma tu żadnej specyfikacji — bo nie ma jeszcze briefu ani wireframe'u.

## Szablon

```markdown
# NN — Nazwa sekcji

- **Funkcja w lejku:** (etap z briefu)
- **Funkcja sprzedażowa:** jedno zdanie, po co ta sekcja istnieje
- **Kotwica:** SECTION_IDS.<klucz> albo brak
- **Podstrona-rozwinięcie:** trasa albo „brak”
- **Budżet motion:** ★☆☆☆☆ … ★★★★★

## Copy

Dokładne teksty, we wszystkich językach projektu. Nagłówki z jawnym podziałem na linie.
Klucze w słowniku, pod którymi zamieszkają.

## Fakty do potwierdzenia

Ceny, terminy, gwarancje, zakres. Każdy z adnotacją: potwierdzone / TODO(brief).

## Struktura

Hierarchia elementów i nagłówków. Co jest h2, co listą, co blockquote, co adresem.

## Dane

Kształt wymaganych danych i plik w src/data/.

## Zachowanie — desktop

## Zachowanie — mobile

Co zostaje uproszczone i dlaczego.

## Animacje

| Element | Narzędzie | Token czasu | Easing |
| ------- | --------- | ----------- | ------ |

## Reduced motion

Co się wyłącza, co zostaje.

## Assety

Lista zdjęć: kadr, proporcje, docelowa szerokość (do `TARGETS`), alt w każdym języku.

## SEO

Wpływ na `title` i `description` strony. Czy sekcja generuje treść pod konkretną frazę.

## Testy

Co dokładnie jest testowane.
```

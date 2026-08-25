# ADR-0005 - GSAP ładowany leniwie, bez `@gsap/react`

- **Status:** Accepted
- **Data:** 2026-01-01

## Kontekst

GSAP z ScrollTriggerem to ~459 KB surowo / ~128 KB gzip. Na stronie wizytówce służy do jednego,
maksymalnie dwóch momentów scroll-driven, które:

- są poniżej pierwszego ekranu,
- nie mogą zadziałać przed hydracją,
- są całkowicie wyłączone przy `prefers-reduced-motion`.

Statyczny `import gsap` w module komponentu wciąga tę paczkę do bundla trasy - czyli na ścieżkę
krytyczną **każdej** wizyty, w tym wizyt, które nigdy nie doscrollują do animacji.

Hook `useGSAP()` z `@gsap/react` importuje GSAP statycznie, więc omija każde leniwe ładowanie.

## Decyzja

1. GSAP ładujemy wyłącznie przez `loadGsap()` z `@/lib/motion/gsap`, który robi dynamiczny
   `import()` rdzenia i ScrollTriggera, rejestruje plugin i **cache'uje promise**.
2. Statyczny import `gsap` jest zablokowany lintem (`no-restricted-imports`). Jedyny plik
   z wyjątkiem to sam loader.
3. Nie dodajemy `@gsap/react` i nie używamy `useGSAP()`.
4. Przy `prefers-reduced-motion` nie wołamy `loadGsap()` wcale - nie ma animacji, nie ma pobierania.
5. Efekt musi obsłużyć unmount w trakcie pobierania (flaga `cancelled`) i czyścić animacje przez
   `gsap.context()` → `context.revert()`.

## Konsekwencje

- Kod animacji jest o kilka linii dłuższy (promise + flaga + cleanup). To jedyny koszt.
- Bundle początkowy nie zawiera GSAP-a; użytkownik, który nie doscrolluje, nigdy go nie pobiera.
- Jedno miejsce rejestracji pluginów, więc nie ma sytuacji „ScrollTrigger nie jest zarejestrowany”.

## Rozważone alternatywy

- **Statyczny import.** Odrzucone: koszt na ścieżce krytycznej opisany powyżej.
- **`next/dynamic` na komponencie animowanym.** Odrzucone jako jedyny mechanizm: opóźnia całą
  sekcję (również treść), a chcemy opóźnić wyłącznie bibliotekę.

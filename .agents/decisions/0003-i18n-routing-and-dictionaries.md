# ADR-0003 — Routing per locale i słowniki

- **Status:** Accepted
- **Data:** 2026-01-01

## Kontekst

Strona lokalnej firmy zwykle startuje jednojęzycznie, a po roku pojawia się potrzeba drugiego
języka (klienci zagraniczni, obsługa firm). Dołożenie i18n do gotowej strony, w której teksty są
wpisane w JSX, oznacza przepisanie wszystkich komponentów.

Osobno: teksty w komponentach są nie do skorygowania przez kogokolwiek poza programistą — nawet
literówki wymagają wejścia w kod sekcji.

## Decyzja

1. Każdy route żyje pod segmentem `src/app/[locale]/`, również w projekcie jednojęzycznym.
   Wszystkie locale są prerenderowane statycznie.
2. **Zero tekstu widocznego dla użytkownika w komponentach.** Wszystkie teksty są w
   `src/i18n/dictionaries/`.
3. Słownik języka głównego definiuje kształt (`type Dictionary = typeof pl`); pozostałe są nim
   typowane, więc brakujący klucz to błąd kompilacji.
4. Server Component bierze treść przez `getDictionary()` z `@/i18n/server`. Komponent kliencki
   dostaje teksty **propsami** — `next/root-params` w nim nie działa.
5. `@/i18n/dictionaries` jest wolny od importów z Next i może być użyty na kliencie.
   `@/i18n/server` importuje `next/root-params` i jego import z komponentu klienckiego wysadza
   build, nawet gdy funkcja nie zostanie wywołana.
6. Slugi tras są w języku głównym i **wspólne dla wszystkich locale**. Są indeksowane, więc
   tłumaczenie ich rozbiłoby historię adresu. Kotwice sekcji zostają po angielsku, bo trafiają
   do URL-a jako fragment.
7. Wejście na adres bez prefiksu locale jest przekierowywane przez `src/proxy.ts` na podstawie
   `Accept-Language`, z nagłówkiem `Vary: Accept-Language`.

## Konsekwencje

- Dodanie języka to zmiana danych (nowy słownik + wpis w `locales`), nie zmiana architektury.
- Projekt jednojęzyczny płaci jedynie prefiksem w URL-u.
- Korekta treści to edycja jednego pliku słownika, bez wchodzenia w komponenty.
- Trzeba pamiętać, że tłumaczenie „byle jakie” przechodzi kompilację — jakość języka jest
  w Definition of Done, nie w typach.

## Rozważone alternatywy

- **Brak i18n, teksty w JSX.** Odrzucone: nie da się później dodać języka ani dać klientowi
  możliwości korekty bez ryzyka.
- **Biblioteka i18n z runtime'owym ładowaniem.** Odrzucone: dwa–trzy locale prerenderowane
  statycznie nie potrzebują runtime'u, a każda taka biblioteka dodaje własną konwencję kluczy.
- **Tłumaczone slugi per locale.** Odrzucone dla strony wizytówki: komplikuje sitemapę, hreflang
  i linkowanie wewnętrzne bez realnego zysku na tej skali.

# Checklist - implementacja sekcji

Do odhaczenia przed zgłoszeniem sekcji jako gotowej.

## Przed kodem

- [ ] Istnieje zaakceptowana specyfikacja w `.agents/specs/`.
- [ ] Znana funkcja sekcji w lejku i powód, dla którego jest na stronie.
- [ ] Copy dostarczone (brief lub właściciel repo), we wszystkich językach. Zero wypełniaczy.
- [ ] Fakty (ceny, terminy, zakres) potwierdzone - nie zgadywane.
- [ ] Zdjęcia dostarczone albo świadomie zastąpione placeholderem o docelowych proporcjach.

## Struktura

- [ ] Sekcja jest **Server Component**.
- [ ] Owinięta w `Section` z `id` z `SECTION_IDS`, jeżeli jest celem nawigacji.
- [ ] Poprawna hierarchia nagłówków (`h2` dla nagłówka sekcji, bez przeskoków).
- [ ] Semantyczne elementy tam, gdzie mają sens (`dl`, `blockquote`, `nav`, `ol`, `address`).
- [ ] Interaktywność wydzielona jako osobny `'use client'` - nie cała sekcja.
- [ ] Treść przez `getDictionary()`; komponent kliencki dostaje teksty propsami.
- [ ] Dane w `src/data/`, typowane, `as const`, ceny jako liczby.

## Styl

- [ ] Wyłącznie tokeny. Zero hexów, zero pikselowych rozmiarów typografii w komponencie.
- [ ] `Container` / `Section` / `SectionLabel` / `Button` zamiast lokalnych odpowiedników.
- [ ] Klasy łączone przez `cn()`.
- [ ] Nowy token → dodany w `theme.css`, uwzględniony w `cn.ts` (jeśli `text-*`), pokazany na `/system`.
- [ ] Tekst akapitowy ograniczony `max-w-measure`.
- [ ] Akcent użyty oszczędnie - maksymalnie jeden element w widoku.
- [ ] Sekcja nie powtarza kompozycji poprzedniej, jeżeli to już trzecia taka z rzędu.

## Animacja

- [ ] Narzędzie zgodne z podziałem: CSS dla reveal-i i hoveru, Motion dla interakcji,
      GSAP dla sekwencji scrollowych.
- [ ] Użyte primitives z `components/motion/`, nie ręczne `initial`/`animate`.
- [ ] Czasy i easingi z `lib/motion/tokens.ts`.
- [ ] Animowane tylko `transform` i `opacity`.
- [ ] Reveal odtwarza się raz - nie wraca przy scrollu w górę.
- [ ] GSAP ładowany leniwie i czyszczony przy unmount.
- [ ] Intensywność zgodna z budżetem ze specyfikacji - nie każda sekcja dostaje wszystko.

## Responsywność

- [ ] Sprawdzone na 360, 390, 768, 1024, 1440, 1920 px.
- [ ] Brak poziomego scrolla na każdej z tych szerokości.
- [ ] Mobile to **uproszczenie**, nie skalowanie desktopu.
- [ ] Żadna informacja nie jest dostępna wyłącznie przez hover.
- [ ] CTA na mobile wygodne do kliknięcia (min. 44 px wysokości).

## Dostępność

- [ ] Nawigacja klawiaturą, logiczna kolejność Tab, widoczny focus.
- [ ] Wszystkie obrazy z sensownym `alt` (lub `alt=""` dla dekoracyjnych).
- [ ] Kontrast zgodny z zasadami z `08-accessibility-and-performance.md`.
- [ ] Sprawdzone z `prefers-reduced-motion` - sekcja jest czytelna i użyteczna.

## Wydajność

- [ ] `next/image` z poprawnym `sizes`.
- [ ] `priority` tylko dla hero.
- [ ] Zdjęcia przepuszczone przez `pnpm images:prepare` i mają `blurProps`.
- [ ] Wymiary obrazów zarezerwowane - brak przesuwania layoutu.

## Domknięcie

- [ ] Testy dla logiki interakcji.
- [ ] `pnpm check` przechodzi.
- [ ] `pnpm build` przechodzi.
- [ ] Brak błędów i ostrzeżeń w konsoli.
- [ ] Brak martwego kodu i `TODO` bez odniesienia.
- [ ] `.agents/` zaktualizowane, jeżeli zmieniła się zasada.

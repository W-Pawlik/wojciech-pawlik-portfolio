# Checklist — uruchomienie

Odhaczana **przed** wypuszczeniem strony pod prawdziwą domenę. Punkty oznaczone **BLOKER**
zatrzymują publikację niezależnie od tego, jak dobrze strona wygląda.

## Dane firmy

- [ ] **BLOKER** Wszystkie dane w `src/data/site.ts` są prawdziwe: nazwa, adres, telefon, e-mail,
      godziny. Zero placeholderów, zero flagi danych zastępczych.
- [ ] Zapis NAP jest identyczny jak w profilu Google Business Profile.
- [ ] Telefon działa jako `tel:` na prawdziwym telefonie (nie tylko w DevTools).
- [ ] Ceny, terminy i gwarancje potwierdzone przez właściciela firmy.
- [ ] **BLOKER** Żadna opinia, ocena, liczba klientów ani certyfikat nie jest wymyślona.

## Formularz

- [ ] **BLOKER** Dostawca e-mail podłączony (zmienne środowiskowe ustawione na produkcji).
- [ ] Zgłoszenie testowe **dotarło** na docelową skrzynkę i nie wpadło do spamu.
- [ ] `reply-to` zawiera adres nadawcy, `from` jest na zweryfikowanej domenie.
- [ ] Komunikat sukcesu mówi, kto i kiedy się odezwie.
- [ ] Walidacja po stronie serwera przetestowana z wyłączonym JavaScriptem po stronie klienta.
- [ ] Honeypot nie blokuje użytkownika klawiatury.
- [ ] **BLOKER** Klauzula RODO / zgoda na przetwarzanie danych jest w formularzu i jest wymagana.

## Sprawy prawne

- [ ] **BLOKER** Polityka prywatności istnieje, jest podlinkowana i wymienia administratora danych.
- [ ] Jeżeli są ciasteczka inne niż techniczne (mapa, analityka, chat, widget opinii) —
      **BLOKER** banner zgody działa i domyślnie nic nie ładuje.
- [ ] Dane rejestrowe firmy w stopce, jeżeli wymagane.
- [ ] Prawa do wszystkich zdjęć potwierdzone; atrybucje, jeżeli licencja ich wymaga.

## Treść

- [ ] Zero `TODO(brief)` i `TODO(brand)` w kodzie renderowanym na produkcji.
- [ ] Zero „lorem ipsum”, zero pustych sekcji.
- [ ] Korekta: literówki, spacje nierozdzielające w cenach, poprawne cudzysłowy.
- [ ] Wszystkie języki kompletne; tłumaczenie sprawdzone przez człowieka.
- [ ] Nazwa firmy zapisana wszędzie tak samo.

## Technika

- [ ] `pnpm check` i `pnpm build` przechodzą.
- [ ] **BLOKER** `NEXT_PUBLIC_SITE_URL` na produkcji to prawdziwa domena z `https://`.
- [ ] `/robots.txt` i `/sitemap.xml` zwracają poprawną treść z prawdziwym originem.
- [ ] `/system` jest `noindex` (i nie jest zablokowana w robots.txt).
- [ ] Każda trasa ma unikalny `title` i `description`.
- [ ] Obraz OG 1200 × 630 istnieje i wyświetla się w podglądzie linku.
- [ ] Favicon i manifest mają właściwe kolory i nazwę.
- [ ] 404 i błąd trasy wyglądają jak część strony i dają drogę wyjścia.
- [ ] Przekierowanie ze starej strony (jeżeli była) — mapa 301 przygotowana.
- [ ] Domena z `www` i bez `www` prowadzą do jednej wersji (redirect, nie duplikat).
- [ ] Certyfikat HTTPS działa, brak mixed content.

## Jakość odbioru

- [ ] Sprawdzone na prawdziwym telefonie, nie tylko w emulatorze.
- [ ] Sprawdzone na 360, 390, 768, 1024, 1440, 1920 px — brak poziomego scrolla.
- [ ] Sprawdzone z `prefers-reduced-motion`.
- [ ] Nawigacja klawiaturą przechodzi całą stronę, focus zawsze widoczny.
- [ ] Lighthouse mobile: Performance i Accessibility ≥ 90.
- [ ] Brak błędów i ostrzeżeń w konsoli na żadnej trasie.
- [ ] Strona jest użyteczna przy wyłączonym JavaScripcie: treść, telefon, adres.

## Po uruchomieniu

- [ ] Profil Google Business Profile wskazuje na nową domenę.
- [ ] Sitemapa zgłoszona w narzędziach dla webmasterów.
- [ ] Właściciel firmy wie, gdzie trafiają zgłoszenia i co robić, gdy przestaną przychodzić.
- [ ] Ustalone, kto aktualizuje treść (godziny, ceny) i jak.

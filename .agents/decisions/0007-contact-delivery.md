# ADR-0007 — Dostarczanie zgłoszeń z formularza

- **Status:** Accepted
- **Data:** 2026-01-01

## Kontekst

Formularz jest celem konwersji strony. Zgłoszenie musi dotrzeć do skrzynki, którą właściciel firmy
naprawdę czyta — nie do panelu, w który nikt nie zagląda, i nie do bazy, której nie ma kto obsłużyć.

Jednocześnie na etapie budowy strony nie ma jeszcze konta u dostawcy e-mail ani zweryfikowanej
domeny, a formularz musi być testowalny.

## Decyzja

1. Zgłoszenie idzie **e-mailem** na adres z `CONTACT_NOTIFICATION_EMAIL`. Bez bazy danych,
   bez panelu, bez CRM-a.
2. Cała komunikacja ze światem zewnętrznym jest w **jednym pliku**:
   `src/server/contact/contact-delivery.ts`. Wymiana dostawcy to zmiana tego pliku i niczego więcej.
3. Dopóki zmienne środowiskowe dostawcy są puste, zgłoszenie jest **logowane po stronie serwera**
   (dane wrażliwe zredukowane) i traktowane jako dostarczone. Formularz jest wtedy w pełni
   testowalny, ale **nikt zgłoszenia nie dostaje** — podłączenie dostawcy jest blokerem
   uruchomienia, wypisanym w [checklists/launch.md](../checklists/launch.md).
4. Adres nadawcy jest na domenie zweryfikowanej u dostawcy; adres klienta idzie w `reply-to`.
   Wysyłka „w imieniu” klienta z naszej domeny łamie SPF/DKIM i ląduje w spamie.
5. Błąd dostawcy jest propagowany do Server Action, która zamienia go na ogólny komunikat
   i alternatywną drogę kontaktu (telefon). Szczegóły zostają w logu serwera.
6. Ochrona przed botami to honeypot, nie captcha: pole, którego człowiek nie wypełnia, ukryte
   przed czytnikiem ekranu i przed Tabem. Wypełnione = zwracamy sukces i wyrzucamy zgłoszenie.

## Konsekwencje

- Zero infrastruktury do utrzymania: brak bazy, brak migracji, brak kopii zapasowych.
- Brak archiwum zgłoszeń po stronie strony — historia jest w skrzynce e-mail. Dla strony
  wizytówki to wystarcza; gdy przestanie, to jest osobna decyzja i osobny ADR.
- Trzeba pilnować dostarczalności (SPF, DKIM, DMARC) — test „czy doszło i czy nie w spamie”
  jest w checkliście uruchomienia.

## Rozważone alternatywy

- **Zewnętrzny serwis formularzy.** Odrzucone: obce style, obce ciasteczka, dane klienta u osoby
  trzeciej bez powodu.
- **Zapis do bazy plus panel.** Odrzucone: koszt utrzymania nieproporcjonalny do kilku zgłoszeń
  dziennie.
- **Sam odnośnik `mailto:` zamiast formularza.** Odrzucone: na telefonie otwiera aplikację, której
  użytkownik często nie ma skonfigurowanej, i gubi kontekst pytań.
- **Captcha.** Odrzucone jako pierwszy krok: koszt dla prawdziwego użytkownika jest realny,
  a honeypot na tej skali wystarcza.

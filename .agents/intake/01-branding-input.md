# Wejście 1 - Branding i stylistyka

Wypełnia klient / projektant. Na tej podstawie powstaje
[01-brand-and-design.md](../01-brand-and-design.md), część
[10-brand-strategy.md](../10-brand-strategy.md) i wartości w `src/styles/theme.css`.

Pole, którego nie znasz → wpisz `BRAK`. Nie zgaduj.

> **Stan 2026-08-21:** uzupełnione z dwóch dostarczonych dokumentów -
> [`00-brand-strategy-input.md`](00-brand-strategy-input.md) (sekcja 1) i
> [`01-design-direction-input.md`](01-design-direction-input.md) (sekcje 3–5, częściowo 6).
> Etap 2 bootstrapu jest **wykonany**: tokeny, fonty i kierunek wizualny są w kodzie
> ([ADR-0011](../decisions/0011-brand-values-in-tokens.md)).
>
> Nadal `BRAK`: **logo / lockup, referencje wizualne, zdjęcia.** Fotografia blokuje sekcje
> „O mnie” i CodeBros - shot list jest gotowy w
> [01-brand-and-design.md](../01-brand-and-design.md#shot-list-do-sesji).

## 1. Marka w skrócie

- Nazwa marki (dokładny zapis, z wielkimi literami jak w logo): **Wojciech Pawlik**
  (marka rozszerzona: **CodeBros**)
- Pełna nazwa prawna (do stopki i danych firmy): `BRAK` - forma prawna działalności do ustalenia
- Jak marka ma być odbierana (3 przymiotniki): **precyzyjna · ludzka · techniczna**
  (pełna lista cech: Precise · Human · Technical · Creative · Pragmatic)
- Jak **nie** ma być odbierana (3 przymiotniki): **agencyjna · korporacyjna · efekciarska**
  (dodatkowo: amatorska, artystyczna dla samego efektu, oparta na chwilowym trendzie)
- Poziom: **premium, ale osobisty** - jakość i proces jak w profesjonalnym studio, kontakt
  jak z dobrym freelancerem. Bez udawania studia z 30-osobowym zespołem.
- Jedno zdanie, które marka mówi o sobie: **„Strony i systemy dopasowane do biznesu.
  Nie do szablonu.”**
- Descriptor: **Web & Product Engineer** · rozwinięcie: **Websites · Custom Systems ·
  AI Automation**

## 2. Logo

- Pliki (SVG / AI / EPS - wektor obowiązkowo): `BRAK`
- Warianty: poziomy / pionowy / sygnet / mono - `BRAK`
- Wersje kolorystyczne: na jasnym / na ciemnym / jednokolorowa - `BRAK`
- Pole ochronne i minimalny rozmiar: `BRAK`
- Czy istnieje księga znaku / brandbook (plik): `BRAK`
- Czy logo wolno przerysować / uporządkować: nie dotyczy

Jeżeli logo nie istnieje: czy akceptujesz **lockup typograficzny** jako rozwiązanie
tymczasowe? **tak, przyjęte** - `Wojciech Pawlik` w Instrument Sans 500 plus mono
descriptor. Favicon rysuje przecięcie BUILD TRACE, nie monogram. Otwarte pytanie:
**czy CodeBros ma dostać własny znak**, czy zostaje zapisem typograficznym w tym samym
systemie.

## 3. Kolory

Wartości z [`01-design-direction-input.md`](01-design-direction-input.md). W tokenach
znajdują się dokładnie te wartości, z czterema wyjątkami wymuszonymi kontrastem AA -
tabela odstępstw:
[01-brand-and-design.md](../01-brand-and-design.md#odstępstwa-od-dokumentu-wejściowego).

| Rola                               | HEX       | Uwagi                                                              |
| ---------------------------------- | --------- | ------------------------------------------------------------------ |
| Tło strony (baza)                  | `#F3F0E9` | ciepła złamana biel; czysta biel wykluczona                        |
| Drugi stopień tła / sekcje         | `#E9E5DC` | panele, formularze, fragmenty case studies - nie co druga sekcja   |
| Kolor odwrotny (ciemny przerywnik) | `#11120F` | tryb CodeBros + stopka; `#1A1B18` jako surface na ciemnym          |
| Tekst główny                       | `#11120F` |                                                                    |
| Akcent (akcja, CTA)                | `#FF5A36` | Signal Orange; maks. 5–8% powierzchni                              |
| Akcent - stan hover                | `#E94C2C` | w kodzie także focus ring (3:1 na obu tonach)                      |
| Kolor tekstu na akcencie           | `#11120F` | ciemny - jasny tekst na akcencie ma 2,7:1                          |
| Kolor błędu                        | `#8E1F2F` | ciemne wino, świadomie poza paletą: przy pomarańczu czerwień = CTA |

- Motyw bazowy: **jasny**, z ciemnym przełamaniem na 10–20% wysokości strony
- Kolory, których marka **nie używa**: gradienty, neon, glow, gradient borders,
  wielokolorowe sekcje, niebieski „SaaS”, neonowa zieleń „AI”
- Czy akcent może być użyty na dużych powierzchniach? **nie** - test kasacji: strona musi
  działać po usunięciu akcentu

## 4. Typografia

| Rola                                | Krój            | Wagi     | Licencja / źródło                      |
| ----------------------------------- | --------------- | -------- | -------------------------------------- |
| Nagłówki (display)                  | Instrument Sans | 500      | Google Fonts (OFL), `next/font/google` |
| Tekst                               | Instrument Sans | 400      | Google Fonts (OFL)                     |
| Utility (etykiety, numeracja, dane) | IBM Plex Mono   | 400, 500 | Google Fonts (OFL)                     |

- Czy fonty są dostępne w Google Fonts? **tak** - oba, z subsetem `latin-ext`
- Jeżeli nie: pliki `woff2` + licencja na web: nie dotyczy
- Czy dopuszczasz podmianę kroju na najbliższy dostępny? nie dotyczy
- Wagi 700–900: **wykluczone** z systemu

## 5. Kierunek wizualny

- Nazwa kierunku: **Editorial Engineering** - _creative on the surface, engineering
  underneath_
- 2–4 strony/marki, które podobają się klientowi - i co konkretnie: `BRAK` - kierunek jest
  zdefiniowany antywzorcem, nie referencjami
- 1–2 strony, które klientowi się nie podobają - i co konkretnie: podane **kategoriami**:
  portfolio z Dribbble, strona software house'u, landing SaaS, startup AI, template Framera,
  demo GSAP
- Element charakterystyczny, który ma się powtarzać: **BUILD TRACE** - cienkie linie
  konstrukcyjne, numery sekcji (`01 / SERVICES`), współrzędne, mono metadata; subtelnie, nie
  pełny „blueprint”
- Czy strona ma mieć wyraźny ciemny przerywnik? **tak** - jest nim tryb CodeBros
- Ile animacji: **umiarkowanie** - GSAP/ScrollTrigger maksymalnie w czterech momentach,
  reszta to reveal-e i mikrointerakcje; _motion reveals structure, it does not decorate it_
- Czego wizualnie **nie wolno**: karuzela, wideo w tle, popupy, glassmorphism, glow,
  gradient blobs, duże zaokrąglone karty, pille, karty z ikonami, trzykolumnowy feature
  grid, chmura logotypów pod hero, marquee, animowany terminal, pseudo-3D screenshoty,
  automatyczny carousel opinii, wymyślone liczniki

## 6. Fotografia

- Czy są zdjęcia firmy? `BRAK` - potrzebne zdjęcia autora i (dla CodeBros) obu braci
- Jeżeli tak: ścieżka do plików, rozdzielczość, prawa do użycia: `BRAK`
- Czy planowana jest sesja zdjęciowa? `BRAK` - **shot list jest gotowy** (7 ujęć,
  [01-brand-and-design.md](../01-brand-and-design.md#shot-list-do-sesji))
- Czy wolno użyć zdjęć stockowych? **nie** - wykluczone strategicznie i wizualnie
- Kto/co ma być na zdjęciach: Wojciech przy pracy (dokumentalnie), Wojciech + Michał
  w naturalnym momencie, środowisko i detal stanowiska, realne ekrany produktów
- Czego na zdjęciach być nie może: corporate headshot, skrzyżowane ręce, studio z jednolitym
  tłem, sztuczny uśmiech przy laptopie, stockowi programiści, kod z Unsplash, neonowe
  serwerownie, fake terminale, „AI brains”, roboty, kształty 3D
- Światło i grading: mocne naturalne światło boczne, widoczne cienie, grading neutralny /
  lekko ciepły, saturacja lekko obniżona, kontrast średnio wysoki, bardzo subtelny grain

## 7. Materiały istniejące

- Obecna strona (URL) i co w niej działa / nie działa: `BRAK` - marka nie ma jeszcze strony
- Wizytówki, ulotki, oklejenia, szyld: nie dotyczy
- Profile w social media (do spójności wizualnej): `BRAK` - GitHub / LinkedIn do potwierdzenia

## 8. Ograniczenia

- Terminy: `BRAK`
- Kto po stronie klienta zatwierdza wygląd (jedna osoba): Wojciech Pawlik (właściciel repo)
- Czy są wymagania korporacyjne / franczyzowe: nie dotyczy

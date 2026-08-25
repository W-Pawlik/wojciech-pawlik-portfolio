# Decyzje architektoniczne (ADR)

Jeden plik = jedna decyzja. Nazwa: `NNNN-krotki-tytul.md`.

## Kiedy piszemy ADR

- Dodanie lub usunięcie zależności.
- Zmiana granicy serwer / klient.
- Zmiana podziału odpowiedzialności między bibliotekami animacyjnymi.
- Wybór dostawcy zewnętrznego (e-mail, hosting, analytics, mapy).
- Zmiana modelu routingu albo i18n.
- Zatwierdzenie warstwy wizualnej (paleta, typografia) - to zamyka dyskusję o wyglądzie.
- Świadome złamanie zasady zapisanej w `.agents/`.

## Czego nie zapisujemy

Zwykłych decyzji implementacyjnych. Nazwa zmiennej, kolejność propsów, wybór między dwoma
równoważnymi zapisami tego samego - to należy do przeglądu kodu, nie do ADR.

## Zmiana decyzji

Starego ADR **nie edytujemy**. Piszemy nowy ze statusem `Supersedes NNNN`
i w starym zmieniamy status na `Superseded by NNNN`.

## Szablon

```markdown
# ADR-NNNN - Tytuł

- **Status:** Accepted | Superseded by NNNN
- **Data:** RRRR-MM-DD

## Kontekst

Co wymusiło decyzję. Fakty, nie preferencje.

## Decyzja

Co konkretnie ustalono. W trybie orzekającym.

## Konsekwencje

Co z tego wynika - również to, co staje się trudniejsze.

## Rozważone alternatywy

Co odrzucono i dlaczego.
```

## Spis

ADR-y 0001–0009 są **bazą templatki**: opisują decyzje, które obowiązują w każdym projekcie
wizytówkowym budowanym na tym szkielecie. Kolejne numery należą już do konkretnego projektu -
pierwszym z nich jest zwykle „Wartości brandowe w tokenach” (etap 2 bootstrapu).

| ADR                                                      | Tytuł                                                                         | Status   |
| -------------------------------------------------------- | ----------------------------------------------------------------------------- | -------- |
| [0001](0001-stack-and-animation-split.md)                | Stack technologiczny i podział odpowiedzialności animacji                     | Accepted |
| [0002](0002-src-and-no-barrels.md)                       | Katalog `src/`, brak plików barrel                                            | Accepted |
| [0003](0003-i18n-routing-and-dictionaries.md)            | Routing per locale i słowniki                                                 | Accepted |
| [0004](0004-native-scroll.md)                            | Scroll natywny, bez biblioteki smooth-scroll                                  | Accepted |
| [0005](0005-lazy-gsap.md)                                | GSAP ładowany leniwie, bez `@gsap/react`                                      | Accepted |
| [0006](0006-landing-plus-detail-pages.md)                | Landing z całością treści plus podstrony szczegółowe                          | Accepted |
| [0007](0007-contact-delivery.md)                         | Dostarczanie zgłoszeń z formularza                                            | Accepted |
| [0008](0008-sharp-for-asset-preparation.md)              | sharp do przygotowania zdjęć                                                  | Accepted |
| [0009](0009-css-reveals.md)                              | Reveal-e w CSS, Motion tylko do interakcji                                    | Accepted |
| [0010](0010-personal-brand-and-two-tier-architecture.md) | Marka osobista i dwupoziomowa architektura marki (Wojciech Pawlik + CodeBros) | Accepted |
| [0011](0011-brand-values-in-tokens.md)                   | Wartości brandowe w tokenach (Editorial Engineering)                          | Accepted |

# intake - dokumenty wejściowe

To **wejście** procesu, nie dokumentacja projektu. Trzy formularze do wypełnienia przez właściciela
repo (albo przez klienta z jego pomocą) **przed** etapem 1 [bootstrapu](../11-bootstrap.md).

| Plik                                           | Kto wypełnia                     | Bez niego nie da się                             |
| ---------------------------------------------- | -------------------------------- | ------------------------------------------------ |
| [01-branding-input.md](01-branding-input.md)   | klient / projektant / właściciel | ustawić tokenów, typografii, kierunku wizualnego |
| [02-wireframe-input.md](02-wireframe-input.md) | właściciel repo                  | ustalić listy sekcji, podstron i lejka           |
| [03-business-facts.md](03-business-facts.md)   | klient                           | napisać jednego zdania treści bez zgadywania     |

## Jak z tego korzystać

1. Skopiuj plik, wypełnij, zostaw w tym katalogu (to jest zapis tego, co dostaliśmy i kiedy).
2. Pole, którego klient nie zna, zostaw **puste** i oznacz `BRAK`. Puste pole to informacja;
   wypełnione domysłem to cicha awaria.
3. Agent AI przenosi treść do dokumentów projektu (`00`, `01`, `10`) i do `src/data/site.ts`.
   Dokumenty projektu są od tej chwili źródłem prawdy - te formularze zostają jako archiwum.
4. Każde `BRAK` musi trafić na listę „Czego brakuje” w
   [00-project-brief.md](../00-project-brief.md#czego-brakuje--pytania-do-właściciela)
   i zablokować konkretną sekcję.

## Czego te formularze nie zastąpią

- Rozmowy. Formularz zbiera fakty, nie intencje - jedno pytanie „dlaczego tak?” bywa ważniejsze
  niż cała tabela.
- Sesji zdjęciowej. Fotografia to zwykle połowa efektu wizualnego i nie da się jej wypełnić
  tekstem.
- Decyzji o zakresie. Zakres ustala właściciel repo w briefie, nie klient w formularzu.

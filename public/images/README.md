# public/images

Zdjęcia i grafiki wchodzące do bundla statycznego.

Zasady:

- Nazwy plików `kebab-case`, opisowe: `hero-<co-jest-na-zdjeciu>.jpg`, `service-<slug>.jpg`.
- Każdy plik przed commitem przechodzi przez `pnpm images:prepare` (patrz
  `.agents/decisions/0008-sharp-for-asset-preparation.md`). Skrypt zmniejsza plik do
  rozmiaru wynikającego z layoutu i generuje podgląd blur w `src/lib/images/blur.ts`.
- Plik bez wpisu w `TARGETS` w `scripts/prepare-images.mjs` jest pomijany: renderuje się
  w oryginalnym rozmiarze i bez placeholdera.
- Oryginały (pełna rozdzielczość z sesji) trzymamy **poza repo**. Skrypt jest lossy.
- Prawa do zdjęć: jeżeli którekolwiek zdjęcie pochodzi ze źródła wymagającego atrybucji,
  dopisz je do `CREDITS.json` w tym katalogu.
- `og-default.jpg` - 1200 × 630, obraz Open Graph. Bez niego metadane nie deklarują obrazu
  (lepiej brak niż zepsuty link, który crawler zapamięta).


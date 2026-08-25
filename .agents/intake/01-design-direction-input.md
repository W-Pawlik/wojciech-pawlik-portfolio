# Wejście 1b - Design system / art direction (dokument źródłowy)

> **Archiwum wejścia.** Dokument dostarczony przez właściciela repo **2026-08-21**.
> Nie edytujemy go - nowa wersja kierunku = nowy dokument + aktualizacja
> [`../01-brand-and-design.md`](../01-brand-and-design.md).
>
> Źródłem prawdy dla projektu jest [`../01-brand-and-design.md`](../01-brand-and-design.md)
> i `src/styles/theme.css`. Odstępstwa od tego dokumentu (wymuszone kontrastem AA) są
> wypisane w [ADR-0011](../decisions/0011-brand-values-in-tokens.md).
>
> Czego ten dokument **nie zawiera**: logo / lockupu, referencji („podoba się / nie
> podoba się”), zdjęć. Te pola zostają `BRAK` w
> [`01-branding-input.md`](01-branding-input.md).

---

# DESIGN SYSTEM / ART DIRECTION - WOJCIECH PAWLIK / CODEBROS

## 1. GŁÓWNY KIERUNEK

# Editorial Engineering

Strona powinna wyglądać jak połączenie: **digital editorial + product engineering +
restrained creative direction**

Nie jak:

- portfolio Dribbble developera,
- strona software house'u,
- landing page SaaS,
- startup AI,
- gotowy template Framera,
- demonstracja GSAP.

Pierwsze wrażenie:

> „To jest bardzo dobrze zaprojektowane.”

Drugie:

> „Ta osoba naprawdę rozumie technologię.”

Trzecie:

> „Chcę, żeby moja firma wyglądała tak profesjonalnie.”

Design ma więc sam być **pierwszym case study Wojciecha**.

## 2. IDEA WIZUALNA

Cały system wizualny opiera się na kontraście dwóch światów:

**HUMAN / CREATIVE** - duża typografia, editorial layout, fotografie, asymetria,
przestrzeń, charakter.

**ENGINEERING / SYSTEM** - grid, linie konstrukcyjne, numeracja, metadata, monospace,
precyzyjne alignmenty, oznaczenia sekcji, logiczna struktura.

Nie rozdzielamy ich na dwie różne stylistyki. One współistnieją. To dokładnie odpowiada
pozycjonowaniu:

> **Creative on the surface. Engineering underneath.**

## 3. CHARAKTER WIZUALNY

**mature** - nie młodzieżowy „developer aesthetic”.
**precise** - każdy alignment wygląda na zamierzony.
**editorial** - typografia i kompozycja ważniejsze niż dekoracyjne UI.
**tactile** - fotografie, lekkie tekstury i ciepłe tło nadają stronie fizyczność.
**technical** - techniczność w detalach, nie przez fake terminale i matrixowe animacje.
**confident** - duże elementy, niewiele ozdobników.

## 4. EMOCJE

Strona powinna wywoływać: ciekawość, poczucie wysokiej jakości, zaufanie, przekonanie
o kompetencjach technicznych, poczucie bezpośredniej współpracy z człowiekiem.

Nie powinna wywoływać: chaosu, futurystyczności, gamingowego klimatu, cyberpunku,
„AI hype”, przesadnego luksusu.

## 5. ELEMENT CHARAKTERYSTYCZNY

# BUILD TRACE

System cienkich linii konstrukcyjnych i technicznych adnotacji. Przykłady:

`01 / SERVICES` · `02 / SELECTED WORK` · `SYSTEM_02` · `PROJECT / 2026` · `BUILD → SHIP` ·
`WP / CB`

oraz pionowe i poziome linie, punkty przecięcia, małe współrzędne, numery sekcji, małe
indeksy przy elementach.

Wygląd ma przypominać **oznaczenia dokumentacji projektowej**, ale bardzo subtelnie. Nie
tworzymy pełnego „blueprint aesthetic”. To detal.

## 6. ZASADA KOMPOZYCYJNA

Podstawowym elementem kompozycji NIE jest card. Podstawowym elementem jest:

# GRID + TYPE + IMAGE + RULE

Sekcje budujemy przez grid, whitespace, linię, zmianę skali typografii, duży obraz,
kontrast tła. Cards stosować tylko wtedy, kiedy rzeczywiście coś grupują.

## COLOR SYSTEM

**MAIN BACKGROUND** `#F3F0E9` - ciepła złamana biel, domyślne tło strony. Nie używać
czystego `#FFFFFF` jako głównej powierzchni: czysta biel nadaje projektowi produktowy /
SaaS charakter, ciepłe tło daje editorial i premium feeling.

**SECONDARY BACKGROUND** `#E9E5DC` - subtelne oddzielanie obszarów, panele, formularze,
wybrane fragmenty case studies. Nie może pokrywać co drugiej sekcji.

**PRIMARY DARK** `#11120F` - tekst, CodeBros section, footer, wybrane pełnoekranowe
sekcje, mocne elementy kontrastowe. To nie jest `#000000`.

**DARK SURFACE** `#1A1B18` - surface na ciemnym tle, bardzo oszczędnie.

**PRIMARY TEXT** (na jasnym) `#11120F` · **SECONDARY TEXT** `#696A64` ·
**TERTIARY TEXT** `#93938C` (metadata i mniej istotne informacje)

**TEXT ON DARK** primary `#F3F0E9` · secondary `#A7A79F`

**BORDER LIGHT** `#D5D1C7` · **BORDER DARK** `#30312D`

**ACCENT - SIGNAL ORANGE** `#FF5A36` - jedyny główny kolor akcentowy. Charakter:
technologiczny, energiczny, fizyczny, lekko industrialny. Nie przypomina typowego
niebieskiego SaaS ani neonowej zieleni AI. Używać dla: aktywnych stanów, niewielkich
oznaczeń, hover, selected state, małych fragmentów typografii, primary CTA, markerów
BUILD TRACE. Accent nie może dominować: **5–8% powierzchni wizualnej maksimum.**

**ACCENT HOVER** `#E94C2C`

**WAŻNA ZASADA KOLORU** - nie używać gradientów, neonowych poświat, gradient borders,
glow, tęczowych efektów, wielokolorowych sekcji. Design ma działać nawet po całkowitym
usunięciu accent color. Jeżeli bez pomarańczowego projekt wygląda źle, kompozycja jest za
słaba.

## TYPOGRAPHY

**PRIMARY TYPEFACE: Instrument Sans** - display, headings, body, navigation, buttons. Ma
nowoczesny charakter, ale nie wygląda przesadnie „tech”; nadaje się i do bardzo dużych
tytułów, i do UI.

**TECHNICAL TYPEFACE: IBM Plex Mono** - wyłącznie metadata, numeracja, technical labels,
section markers, daty, małe descriptory. Nie używać monospace do długich akapitów.

### Desktop

| Rola       | Rozmiar                      | Line height | Weight | Tracking |
| ---------- | ---------------------------- | ----------- | ------ | -------- |
| DISPLAY XL | `clamp(72px, 7.3vw, 118px)`  | 0.88–0.94   | 500    | -0.055em |
| H1         | `clamp(60px, 6vw, 96px)`     | 0.94        | 500    | -0.045em |
| H2         | `clamp(44px, 4.2vw, 68px)`   | 1.00        | 500    | -0.038em |
| H3         | `32–40px`                    | 1.05        | 500    | -0.025em |
| BODY LARGE | `22–26px` (max width ~720px) | 1.4         | 400    | -        |
| BODY       | `17–18px`                    | 1.55–1.65   | 400    | -        |
| SMALL      | `14–15px`                    | 1.5         | -      | -        |
| METADATA   | mono `11–12px`               | 1.4         | -      | 0.04em   |
| BUTTON     | `15px`                       | -           | 500    | -0.01em  |

DISPLAY XL używać bardzo rzadko - hero lub jeden kluczowy komunikat. Uppercase stosować
tylko w krótkich labelach.

### Mobile

DISPLAY `48–58px` (lh 0.94, tracking -0.045em) · H1 `46–54px` · H2 `36–42px` (lh
1.00–1.05) · H3 `27–30px` · BODY LARGE `20px` (lh 1.45) · BODY `16px` (lh 1.6) ·
METADATA `10–11px`

### Typography rules

Unikać: wyśrodkowywania wszystkich nagłówków, przesadnie szerokich paragrafów, uppercase
dla całych nagłówków, font-weight 700–900, ogromnych gradientowych słów.

Preferowane: left alignment, świadome łamanie linii, różnice skali, krótkie duże
komunikaty, duża typografia obok małego technical metadata.

## GRID

MAX PAGE WIDTH `1600px` · CONTENT CONTAINER `max-width: 1360px`, side padding `32–48px`
(large desktop `48px`)

Desktop: 12 kolumn, gap `24px` (w większych layoutach `28–32px`).
Tablet: 8 kolumn, padding `24px`, gap `20px`.
Mobile: 4 kolumny, padding `20px`, gap `12px`.

## SPACING SCALE

Podstawowa jednostka `4px`. System: `4 8 12 16 24 32 48 64 80 96 128 160 200`. Nie używać
przypadkowych wartości typu `37px`, `73px`, `91px` bez konkretnego powodu.

## SECTION SPACING

Desktop: minimum `128px`, standard `160px`, duże przejście `200px`. Hero może mieć
indywidualny rytm. Mobile `88–112px` - nie zmniejszać wszystkich przestrzeni mobilnych do
40–60px, strona nadal ma oddychać.

## BORDER SYSTEM

Domyślny `1px solid`; jasne `#D5D1C7`, ciemne `#30312D`. Borders są ważnym elementem
design language. Preferujemy top border, bottom border, pojedyncze linie, separator. Nie:
prostokąt wokół wszystkiego.

## RADIUS SYSTEM

Default `0px` · small functional `6px` · inputs / buttons `8px` · media `0–4px` ·
modal `12px`. Nie używać `20px`, `24px`, `32px` na każdej karcie. Brak dużych radiusów
odróżnia projekt od typowego AI/SaaS designu.

## UI SYSTEM

### BUTTONS

**PRIMARY** - tło `#11120F`, tekst `#F3F0E9`, radius `8px`, height `48px`, padding
`0 20px`, opcjonalny mały arrow po prawej. Hover: tło przechodzi na Signal Orange
`#FF5A36`, tekst pozostaje ciemny lub jasny zależnie od kontrastu. Animacja `180–220ms`.

**SECONDARY** - transparent, border `1px solid #B9B6AD`, hover: subtelne ciemne tło. Nie
tworzyć wszędzie dwóch dużych przycisków obok siebie.

**TEXT LINK** - preferowana forma CTA w wielu miejscach: `View project ↗` / `Zobacz
projekt →`. Underline lub cienka linia może animować się podczas hover.

### NAVBAR

Nie powinien wyglądać jak floating SaaS pill. Default: pełna szerokość containera,
wysokość `72–80px`. Logo / nazwisko po lewej, navigation środek lub prawa strona, CTA małe
i zwarte. Navbar bez osobnego backgroundu podczas pierwszego widoku hero. Po scrollu może
otrzymać półprzezroczyste ciepłe tło, bardzo subtelny blur, dolny border.

**STICKY NAV** po scrollu: height `64px`, background `rgba(243, 240, 233, 0.92)`,
backdrop-filter `blur(12px)`, border-bottom `1px solid #D5D1C7`, animacja wysokości
`250ms`.

### CARDS

Cards nie są podstawową strukturą projektu. Jeśli potrzebne: border-top, minimalny
background, brak shadow, radius max 6px. Preferować **rows** zamiast **cards grid**.

### SERVICE PRESENTATION

Usługi jako duże poziome rekordy, oddzielone liniami:

`01` · `Websites` · `Custom websites designed around your business.` · `→`

Hover może przesuwać arrow, zmieniać metadata, ujawniać mały visual. Nie pakować usług do
trzech identycznych kart z ikonami.

### FORM SYSTEM

Inputy: height `52–56px`, background transparent lub secondary, border głównie bottom albo
pełny subtelny 1px, radius `6px`, focus: border / marker Signal Orange. Nie używać wielkich
floating labels - labels zawsze widoczne.

**SELECTED / CHOICE STATES** - duży tekst, border, zmiana tła, mały signal-orange
indicator. Bez checkboxów wyglądających jak dashboard SaaS.

### BADGES

Tylko gdy mają funkcję (`CODEBROS`, `CASE STUDY`, `AI`). Format: IBM Plex Mono, 11px,
border, minimalny padding. Nie tworzyć hero pełnego badge'y.

### PRICING

Ceny editorialnie, nie jako trzy pricing cards:

`Website` `from 5k PLN` ──── `Advanced web` `15–30k+ PLN` ──── `Custom system`
`from 30k PLN`

Duża typografia + pojedyncze linie.

### MODAL / DRAWER

Preferowany **SIDE DRAWER**: desktop `480–560px`, mobile pełna szerokość. Może służyć do
szczegółów usługi, zakresu cenowego, rozpoczęcia formularza. Animacja translateX, bez
bounce.

### TESTIMONIALS

Nie carousel automatyczny. Duży quote, bardzo mało dekoracji, osoba + firma, maksymalnie
2–3 na całej stronie. Mocny quote może zajmować dużą część viewportu.

### CASE STUDIES

Wizualne centrum projektu. Duże. Nie 3 małe karty projektu w rzędzie. Preferowane: jeden
projekt na dużą przestrzeń, screenshot / film 60–80% szerokości, duży project title,
metadata obok. Każdy case może mieć trochę inny rytm kompozycyjny przy zachowaniu tego
samego systemu.

## CODEBROS VISUAL MODE

CodeBros nie otrzymuje oddzielnego design systemu. Zamiast tego następuje przejście
**LIGHT → DARK**: background `#11120F`, text `#F3F0E9`, accent `#FF5A36`, border
`#30312D`. Monospace metadata staje się trochę bardziej widoczne. Użytkownik czuje:

> „Teraz wchodzimy głębiej w engineering.”

Nie zmieniamy typografii, gridu, radiusów ani podstawowego UI. CodeBros jest innym trybem
tej samej marki.

## PHOTOGRAPHY / IMAGERY

Fotografia jest bardzo ważna. Nie chcemy portfolio składającego się wyłącznie ze
screenshotów. Marka ma mieć człowieka.

### PORTRET WOJCIECHA

Nie: klasyczny corporate headshot, ręce skrzyżowane, studio z jednolitym tłem, laptop
i sztuczny uśmiech.

Preferowane: naturalny dokumentalny portret - Wojciech siedzący lub stojący przy stanowisku
pracy, nie patrzy bezpośrednio do aparatu albo robi to tylko na części zdjęć. Światło:
mocne naturalne boczne. Cienie widoczne. Grading neutralny / lekko ciepły. Saturacja
minimalnie zmniejszona. Kontrast średnio wysoki. Grain bardzo subtelny.

### CODEBROS PHOTO

Zdjęcie Wojciecha i Michała razem. Nie pozowane („dwóch developerów patrzących
w laptop”). Preferowane: rozmowa, praca przy whiteboardzie, jeden pokazuje coś drugiemu,
naturalny moment, szeroki kadr, trochę przestrzeni. Może być czarno-białe lub bardzo lekko
desaturowane.

### SHOT LIST

| #   | Ujęcie         | Subject                                       | Aspect          | Usage             |
| --- | -------------- | --------------------------------------------- | --------------- | ----------------- |
| 01  | HERO PORTRAIT  | Wojciech, waist-up lub 3/4, window side-light | `4:5`           | home hero / about |
| 02  | ENVIRONMENT    | Wojciech przy stanowisku, nie patrzy w kamerę | `3:2`           | -                 |
| 03  | DETAIL         | dłonie / notebook / monitor / fragment        | `4:3`           | -                 |
| 04  | PORTRAIT CLOSE | bardziej osobisty kadr                        | `1:1` lub `4:5` | -                 |
| 05  | CODEBROS       | Wojciech + Michał, szeroki kadr               | `16:9`          | -                 |
| 06  | CODEBROS WORK  | naturalny moment pracy                        | `3:2`           | -                 |
| 07  | DETAIL / CODE  | monitor lub fragment produktu                 | -               | -                 |

Przy 07: nie pokazywać ogromnego czytelnego bloku kodu jako dekoracji. Kod może być
niewyraźnym elementem środowiska.

### PROJECT IMAGERY

Najważniejsze: screenshoty rzeczywistych interfejsów, mockupy ekranów, krótkie screen
recordings, detale UI. Nie pakować wszystkiego do mockupu MacBooka/iPhone'a. W większości
przypadków UI powinno pojawiać się **bezpośrednio na stronie**. Możemy stosować crop,
minimalną perspektywę, scroll capture, detail zoom.

### IMAGE RATIOS

Hero portrait `4:5` · project feature `16:10` · project wide `16:9` · editorial image
`3:2` · detail `1:1`. Nie używać wszędzie identycznego ratio.

### CZEGO NIE UŻYWAĆ

Stockowi programiści przy laptopie, zdjęcia kodu z Unsplash, neonowe serwerownie, ręce
piszące na klawiaturze w niebieskim świetle, fake terminal screenshots, 3D chrome blobs,
generowane abstrakcyjne gradienty, AI brains, roboty, wireframe globes, przypadkowe 3D
shapes.

## ICONOGRAPHY

Ikony nie są głównym językiem marki. Preferować tekst, arrow, numer, typografię. Jeżeli
ikona jest potrzebna: outline, stroke `1.5px`, size `18–20px`. Nie pakować każdej usługi
w osobną ikonę - arrow jest najczęściej wystarczający.

## MOTION SYSTEM

Animacje mają budować rytm, hierarchię, poczucie jakości, przejście między „creative”
i „engineering”. Nie mają udowadniać, że znamy GSAP.

# Motion should reveal structure, not decorate structure.

**Motion** do: reveal prostych elementów, hover, navbar, drawer, formularze, page
transitions, microinteractions.

**GSAP + ScrollTrigger** tylko dla kilku dużych momentów: 1. Hero, 2. Selected Work, 3. Transition do CodeBros, 4. jeden storytelling moment w case study. Nie używać
ScrollTrigger w każdej sekcji.

**Lenis** opcjonalny - tylko jeżeli scroll-driven storytelling faktycznie korzysta
z płynniejszego scrollu. Nie dodawać tylko dlatego, że jest popularny.

**EASING** primary `cubic-bezier(0.22, 1, 0.36, 1)` · secondary
`cubic-bezier(0.16, 1, 0.3, 1)` · microinteraction `ease-out`

**DURATIONS** hover `160–220ms` · UI `240–320ms` · reveal `550–800ms` · large transition
`800–1200ms`

**TEXT REVEAL** - nie animować każdego słowa każdego nagłówka. Hero może mieć clip reveal
line-by-line: transform `translateY(105%) → 0`, duration `800ms`, stagger `80–120ms`.

**NORMAL SECTION REVEAL** - nie opacity 0 → 1 dla wszystkiego. Preferować
`translateY(20–32px)` * opacity, duration `550–700ms`, stagger `60–100ms`.

**IMAGE REVEAL** - container overflow hidden, image start `scale(1.04)`, mask / clip od
dołu lub lewej, duration `900–1100ms`, final `scale(1)`. Bardzo subtelnie.

**PROJECT HOVER** (desktop) - image `scale(1 → 1.015)`, duration `500–700ms`, arrow
translate `0 → 4px`, opcjonalnie metadata zmienia kolor na accent. Nie robić scale 1.1.

**PARALLAX** - bardzo delikatny, maksymalny zakres `20–40px` na dużych obrazach. Nie
stosować na mobile.

**CODEBROS TRANSITION** - jeden z najmocniejszych momentów strony. Jasne tło ustępuje dark
section, BUILD TRACE może animować linię `width: 0 → 100%`, następnie pojawia się
`CODEBROS / SYSTEM MODE`. Nie robić glitch effect, terminal animation ani matrix
characters.

**PAGE TRANSITIONS** - opcjonalnie bardzo krótki transition (np. cienka ciemna powierzchnia
przechodzi przez ekran), całość `450–600ms`. Jeżeli pogarsza perceived performance -
usunąć.

**DRAWER** - translate `100% → 0`, duration `420ms`, ease `cubic-bezier(0.22,1,0.36,1)`,
backdrop opacity max około `0.25`.

**FORM MICROINTERACTION** - selected option: subtelny background transition, border, signal
indicator. Submit: button może zmienić copy `Send project` → `Sent ✓`. Bez confetti.

**PREFERS REDUCED MOTION** - wyłączyć parallax, scroll scrub, image scale, page
transitions, smooth scroll. Pozostawić natychmiastowe opacity i krótkie UI feedback.

## WHITESPACE

Whitespace jest jednym z głównych elementów stylistycznych. Nie próbować „wykorzystać
pustej przestrzeni”. Pusta przestrzeń oddziela myśli, buduje hierarchię, zwiększa poczucie
jakości. Jednocześnie: nie tworzyć pustych ekranów wyłącznie dla efektu premium - każde
duże odstępy muszą wynikać z kompozycji.

## CONTRAST

Strona powinna mieć duże skoki skali: bardzo duży H2 obok `11px mono metadata`, duży obraz
obok małego opisu. Nie próbować utrzymywać wszystkich elementów w podobnej skali.

## RYTM STRONY

**quiet → bold → quiet → visual → technical → quiet → conversion**

Nie: hero, wow, wow, wow, wow. Jeżeli każda sekcja jest efektowna, żadna nie jest
efektowna.

## UI DENSITY

Marketingowe fragmenty: niska gęstość. Case studies: średnia. CodeBros / engineering:
nieco większa. Formularz: bardzo prosty.

## RESPONSIVE PHILOSOPHY

Mobile nie jest pomniejszonym desktopem. Na mobile: usunąć dekoracyjne technical labels,
uprościć grid, ograniczyć parallax, ograniczyć sticky storytelling, duże typography
zachować, primary CTA zawsze łatwo dostępne, case studies nadal duże.

**mobile retains character, not complexity.**

## DESIGN RULES - ALWAYS

1. Kompozycję budujemy przez grid, typography i imagery.
2. Accent color stosujemy oszczędnie.
3. Każda sekcja posiada jasno określony alignment.
4. Duża typografia jest ważniejsza niż dekoracyjny element.
5. Cards używamy tylko wtedy, kiedy semantycznie grupują dane.
6. Każdy motion ma uzasadnienie.
7. Fotografia ma wyglądać naturalnie.
8. Projekty pokazujemy duże.
9. Metadata używa IBM Plex Mono.
10. CodeBros pozostaje częścią tego samego design systemu.
11. Borders są częstsze niż shadows.
12. Na stronie zawsze jest więcej neutralnego koloru niż accentu.
13. Primary CTA jest łatwe do znalezienia.

## DESIGN RULES - NEVER

Gradient blobs, glassmorphism, glow, neon, ogromne rounded cards, pill everywhere, icon
cards, 3-column SaaS feature grid, logo cloud zaraz pod hero, orbit animation, marquee bez
uzasadnienia, liczniki wymyślone dla social proof, animowany code terminal, stock
photography, pseudo-3D floating screenshots, animacja każdego elementu, cztery rodzaje
radius, pięć różnych kolorów accent, sticky scroll na pół strony tylko dla efektu, endless
horizontal marquee, automatyczny testimonials carousel.

## NAJWIĘKSZE RYZYKO

> Zrobienie kolejnego bardzo dobrego portfolio developera zamiast strony, która sprzedaje
> usługi biznesowi.

Efekty wizualne nigdy nie mogą utrudniać odpowiedzi na pytania: **Co robisz? Czy robisz coś
dla firmy takiej jak moja? Czy jesteś w stanie to dowieźć? Ile to kosztuje? Jak
zaczynamy?**

## DRUGIE RYZYKO

Przesadna techniczność. Portfolio nie jest kierowane przede wszystkim do developerów. Nie
pokazujemy kompetencji przez listę `Next.js / React / TypeScript / Node.js / PostgreSQL /
Docker / AWS` na pierwszym ekranie. Klient biznesowy powinien najpierw zobaczyć:
_rozwiązuję realne problemy._ Stack pojawia się później jako supporting evidence.

## TRZECIE RYZYKO

Zbyt „designer portfolio”. Nie możemy stworzyć strony pięknej, ale niepraktycznej. Menu
pozostaje czytelne, CTA oczywiste, copy czytelne, case studies da się eksplorować,
formularz jest prosty. **UX wygrywa z eksperymentem.**

## PRIMARY DESIGN PRINCIPLE

# The interface itself is proof of capability.

Strona ma demonstrować design awareness, frontend quality, UX, motion i technical
precision, bez konieczności pisania „tworzę nowoczesne strony z dobrym UX”.

## FINAL FILTER

Przed dodaniem dowolnego elementu: 1. Czy pomaga użytkownikowi zrozumieć ofertę? 2. Czy
wzmacnia charakter Wojciecha / CodeBros? 3. Czy nadal dodałbym ten element, gdyby nie był
aktualnie modny?

Jeśli na wszystkie trzy odpowiedź brzmi **nie** - element należy usunąć.

# SYSTEM MANTRA

**Less decoration. More direction.**

**Less template. More character.**

**Less tech theatre. More engineering.**

# piotrwesolowski.com

Strona ofertowa Piotra Wesołowskiego — AI Product Engineer. Next.js 16 (App Router),
Tailwind CSS 4, komponenty w stylu shadcn/ui, PL (domyślnie) + EN.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
npm run lint
```

## Struktura

| Ścieżka | Co zawiera |
|---|---|
| `src/config/site.ts` | Linki, Calendly, e-mail, telefon, social media, pasek zaufania, referencje, `showPrices` |
| `src/config/services.ts` | Usługi: slug URL i fraza SEO per język, opcjonalna cena |
| `src/messages/pl.ts`, `en.ts` | **Wszystkie teksty.** `en.ts` jest typowany kształtem `pl.ts` — brak klucza = błąd builda |
| `content/case-studies/*.json` | Case studies (PL + EN w jednym pliku) |
| `src/i18n/routes.ts` | Jedno źródło prawdy dla adresów URL (+ rewrites w `next.config.ts`) |
| `src/styles/tokens.css` | Wspólne tokeny (kolory, typografia, radius) — do skopiowania do pioter.ai |
| `src/lib/json-ld.ts`, `src/lib/seo.ts`, `src/lib/og.tsx` | JSON-LD, metadata/hreflang, obrazki OG |

### Adresy URL

Strony fizycznie żyją pod `app/[locale]/…` (np. `/pl/services/audit`), a publiczne,
zlokalizowane adresy są mapowane statycznymi rewrites wygenerowanymi z `src/i18n/routes.ts`:

| Strona | PL | EN |
|---|---|---|
| Główna | `/` | `/en` |
| O mnie | `/o-mnie` | `/en/about` |
| Usługa | `/uslugi/{slug.pl}` | `/en/services/{slug.en}` |
| Polityka prywatności | `/polityka-prywatnosci` | `/en/privacy-policy` |

Canonical i `hreflang` (z `x-default` → PL) generuje `pageMetadata()` w `src/lib/seo.ts`.

## Jak dodać nową usługę

1. `src/config/services.ts` — dopisz `id` do `serviceIds` i obiekt do `services`
   (`slug` i `keyword` dla PL i EN, opcjonalnie `price`).
2. `src/messages/pl.ts` i `en.ts` — dodaj `services.items.<id>` (skopiuj istniejący blok:
   `title`, `short`, `tags`, `intro` z `{Keyword}`, `forWhom`, `deliverables`, `steps`).
3. `src/components/sections/service-icon.tsx` — przypisz ikonę z `lucide-react`.
4. `src/components/sections/services-grid.tsx` — ustaw szerokość kafelka w `spans`
   (bento: suma w wierszu = 3 kolumny na desktopie).

Podstrona, rewrites, sitemap, OG image i JSON-LD powstaną automatycznie.

## Jak dodać case study

1. Utwórz `content/case-studies/<nazwa>.json` (wzór: `placeholder-1.json`).
2. Ustaw `order` (kolejność), `url` (pełny opis na pioter.ai), treści `pl` i `en`.
3. Ustaw `"draft": false` — szkice (`true`) są widoczne tylko w `npm run dev`.
4. Usuń pliki `placeholder-*.json`.

Sekcja „Realizacje” ukrywa się, gdy nie ma opublikowanych wpisów — wtedy przycisk
„Zobacz realizacje” prowadzi na pioter.ai.

## Kontakt

Sekcja kontaktu pokazuje Calendly, telefon i e-mail — wszystkie z `src/config/site.ts`
(`calendlyUrl`, `phone` / `phoneDisplay`, `email`). Telefon trafia też do stopki i JSON-LD.

## Analityka

Vercel Web Analytics (`@vercel/analytics`) — bez cookies, bez identyfikacji użytkownika,
więc bez banera zgody. Działa po włączeniu Web Analytics w projekcie na Vercel
(lokalnie w konsoli pojawia się 404 dla `/_vercel/insights/script.js` — to normalne).

## Wspólne tokeny z pioter.ai

`src/styles/tokens.css` jest niezależny od projektu. W pioter.ai:

1. Skopiuj plik, w `globals.css` zostaw `@import "tailwindcss";` i dodaj `@import "./tokens.css";`,
   usuń stare bloki `@theme` / `:root` / `.dark`.
2. Font: `Inter({ variable: "--font-inter", subsets: ["latin", "latin-ext"] })`.
3. Uwaga: obecne tokeny pioter.ai to gołe wartości HSL użyte bez `hsl()`, przez co klasy
   kolorów (`bg-background` itp.) generują niepoprawny CSS — nowy plik to naprawia.

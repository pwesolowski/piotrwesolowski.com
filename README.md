# piotrwesolowski.com

Wizytówka Piotra Wesołowskiego — AI Product Engineer. Jedna strona, PL (domyślnie) + EN.
Next.js 16 (App Router), Tailwind CSS 4.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
npm run lint
```

## Gdzie co zmienić

| Ścieżka | Co zawiera |
|---|---|
| `src/config/site.ts` | Imię, rola, telefon, e-mail, Calendly, linki (LinkedIn, GitHub, pioter.ai) |
| `src/messages/pl.ts`, `en.ts` | **Wszystkie teksty**: opis, doświadczenie, technologie. `en.ts` jest typowany kształtem `pl.ts` — brak klucza = błąd builda |
| `src/app/[locale]/page.tsx` | Układ wizytówki |
| `public/piotr-wesolowski.vcf` | Plik „Zapisz kontakt” (vCard) — zaktualizuj razem z danymi w `site.ts` |
| `public/profilePhoto.jpeg` | Zdjęcie |
| `src/styles/tokens.css` | Wspólne tokeny (kolory, typografia, radius) z pioter.ai |

## Adresy URL

| Strona | PL | EN |
|---|---|---|
| Wizytówka | `/` | `/en` |
| Polityka prywatności | `/polityka-prywatnosci` | `/en/privacy-policy` |

Stare adresy (`/o-mnie`, `/uslugi/*`, `/en/about`, `/en/services/*`) przekierowują 308
na stronę główną — patrz `legacyRedirects` w `src/i18n/routes.ts`.

## Analityka

Vercel Web Analytics — bez cookies, więc bez banera zgody. Lokalnie w konsoli pojawia się
404 dla `/_vercel/insights/script.js` — to normalne.

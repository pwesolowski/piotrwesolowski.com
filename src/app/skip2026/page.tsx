import { cookies } from "next/headers";
import Image from "next/image";

import { unlock } from "./actions";
import { ACCESS_TOKEN, COOKIE_NAME, YOUTUBE_ID } from "./auth";

export default async function Skip2026Page({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const unlocked = (await cookies()).get(COOKIE_NAME)?.value === ACCESS_TOKEN;
  const { error } = await searchParams;

  return (
    <>
      <header className="skip-header">
        <Image src="/skip2026/logo-skip.png" alt="SKIP Group — Don't waste the waste" width={149} height={57} priority />
      </header>

      <main className="skip-main">
        <h1 className="skip-title">
          Film dla <strong>SKIP Group</strong>
        </h1>

        {unlocked ? (
          <div className="skip-video">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?rel=0`}
              title="SKIP Group — film"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        ) : (
          <form action={unlock} className="skip-card">
            <h2>
              Podaj <strong>hasło</strong>
            </h2>
            <p>Film jest dostępny tylko dla osób z hasłem.</p>
            <label htmlFor="password" className="skip-sr-only">
              Hasło
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Hasło"
              required
              autoFocus
              autoComplete="current-password"
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? "password-error" : undefined}
            />
            {error && (
              <p id="password-error" className="skip-error" role="alert">
                Nieprawidłowe hasło. Spróbuj jeszcze raz.
              </p>
            )}
            <button type="submit">
              Pokaż film <span aria-hidden="true">›</span>
            </button>
          </form>
        )}
      </main>

      <footer className="skip-footer">Don&apos;t waste the waste</footer>
    </>
  );
}

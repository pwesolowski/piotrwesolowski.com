import Image from "next/image";

// TEMPORARY page (/skip2026) — delete src/app/skip2026 and public/skip2026 when no longer needed.
export default function Skip2026Page() {
  return (
    <>
      <header className="skip-header">
        <Image src="/skip2026/logo-skip.png" alt="SKIP Group — Don't waste the waste" width={149} height={57} priority />
      </header>

      <main className="skip-main">
        <h1 className="skip-title">
          Film dla <strong>SKIP Group</strong>
        </h1>

        <div className="skip-card">
          <h2>
            Film jest już <strong>niedostępny</strong>
          </h2>
        </div>
      </main>

      <footer className="skip-footer">Don&apos;t waste the waste</footer>
    </>
  );
}

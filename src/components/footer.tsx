import { Container } from "./container";

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/piotr-wesolowski", external: true },
  { label: "Email", href: "mailto:kontakt@piotrwesolowski.com" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200/60 bg-white/70">
      <Container className="flex flex-col items-center justify-between gap-4 py-8 text-sm text-slate-600 sm:flex-row">
        <p className="text-center sm:text-left">© {new Date().getFullYear()} Piotr Wesołowski. All rights reserved.</p>
        <div className="flex items-center gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="hover:text-indigo-500 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}


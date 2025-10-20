import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-slate-100 via-white to-slate-100">
      <main className="flex-1">
        <Hero />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

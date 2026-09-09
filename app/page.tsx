import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Engineering } from "@/components/sections/Engineering";
import { Projects } from "@/components/sections/Projects";
import { GithubSection } from "@/components/sections/Github";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background text-foreground transition-theme selection:bg-[#19B9EE] selection:text-[#05070A]">
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Education />

        <Engineering />
        <Projects />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}

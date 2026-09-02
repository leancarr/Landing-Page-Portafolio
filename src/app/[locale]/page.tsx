import Hero from "@/components/Hero";
import { ProjectsList } from "@/components/ProjectsList";
import AboutSection from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { setRequestLocale } from "next-intl/server";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Hero />
      <ProjectsList />
      <AboutSection />
      <ContactSection />
    </main>
  );
}

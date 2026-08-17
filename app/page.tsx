import { SiteHeader } from "@/components/home/site-header";
import { Hero } from "@/components/home/hero";
import { Recognition } from "@/components/home/recognition";
import { ConsultationTopics } from "@/components/home/consultation-topics";
import { Approach } from "@/components/home/approach";
import { Sessions } from "@/components/home/sessions";
import { About } from "@/components/home/about";
import { Faq } from "@/components/home/faq";
import { FinalCta } from "@/components/home/final-cta";
import { SiteFooter } from "@/components/home/site-footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Recognition />
        <ConsultationTopics />
        <Approach />
        <Sessions />
        <About />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}

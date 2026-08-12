import { SiteHeader } from "@/components/landing/site-header"
import { Hero } from "@/components/landing/hero"
import { Recognition } from "@/components/landing/recognition"
import { ConsultationTopics } from "@/components/landing/consultation-topics"
import { Approach } from "@/components/landing/approach"
import { Sessions } from "@/components/landing/sessions"
import { About } from "@/components/landing/about"
import { Faq } from "@/components/landing/faq"
import { FinalCta } from "@/components/landing/final-cta"
import { SiteFooter } from "@/components/landing/site-footer"

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
  )
}

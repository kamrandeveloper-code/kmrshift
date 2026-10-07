import { Approach } from "@/components/approach";
import { Capabilities } from "@/components/capabilities";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Metrics } from "@/components/metrics";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        <Hero />
        <Capabilities />
        <Approach />
        <Metrics />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}

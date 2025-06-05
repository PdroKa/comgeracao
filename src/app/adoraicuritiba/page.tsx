import { Header } from "@/components/landingPage/header";
import { CallToAction, HeroSection } from "@/components/landingPage/calltoAction";
import { About } from "@/components/landingPage/sobre";
import { TeamSection } from "@/components/landingPage/teamSection";
import { PrincingSection } from "@/components/landingPage/princing";
import { FAQ } from "@/components/landingPage/FAQ";
import { Map } from "@/components/landingPage/map";
import { FooterAdoraiCwb } from "@/components/landingPage/footer";

export default function AdoraiCuritiba() {
    return (
        <div id="inicio" className="scroll-mt-36">
            <Header />
            <HeroSection />
            <About />
            <TeamSection />
            <PrincingSection />
            <FAQ />
            <Map />
            <FooterAdoraiCwb />
        </div>
    );
}

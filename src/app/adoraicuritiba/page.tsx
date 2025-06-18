import { Header } from "@/components/landingPage/header";
import { HeroSection } from "@/components/landingPage/heroSection";
import { About } from "@/components/landingPage/sobre";
import { TeamSection } from "@/components/landingPage/teamSection";
import { PrincingSection } from "@/components/landingPage/princing";
import { FAQ } from "@/components/landingPage/FAQ";
import { Map } from "@/components/landingPage/map";
import { FooterAdoraiCwb } from "@/components/landingPage/footer";
import { Metadata } from "next";
import CountdownTimer from "./components/countdown";

export const metadata: Metadata = {
    title: "Adorai Curitiba 2025 - 2 dias de Adoração",
    description: "Adorai Curitiba - Curitiba para Jesus, pelas mãos de Maria"
}

export default function AdoraiCuritiba() {

    return (
        <div id="inicio" className="scroll-mt-36">
            <Header />
            <HeroSection />
            <About />
            <TeamSection />
            <CountdownTimer />
            <FAQ />
            <Map />
            <FooterAdoraiCwb />
        </div>
    );
}

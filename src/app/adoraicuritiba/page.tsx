import { Header } from "../components/landingPage/header";
import { HeroSection } from "../components/landingPage/hero";
import { VideoComBotao } from "../components/landingPage/videoComBotao";

export default function AdoraiCuritiba() {
    return (
        <div className="h-screen bg-cover bg-center min-h-screen-lg  bg-custom max-w-7xl mx-auto items-center">
            <Header />
            <HeroSection />
            <VideoComBotao />
            {/* <Princing /> */}
            {/* <FAQ /> */}
        </div>
    );
}

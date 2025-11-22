import { Header } from "@/components/landingPage/header";
import { HeroSection } from "./components/heroSection";
import { navigationItems } from "@/config/nativation";
import { HeroCamp } from "./components/hero";
import { About } from "./components/sobre";
import { ButtonWhatsApp } from "@/components/ui/button";

export default function Campgeracao() {
  const dadosEvento = {
    data: '05-08 | Março | 2026',
    local: 'Curitiba',
    titulo: 'CAMP GERAÇÃO',
    subtitulo: 'O acampamento que transforma vidas.',
  }; // Adicione os dados do evento aqui
  return (
    <div id="#campinicio" className="scroll-mt-36">
      <HeroCamp />
      <About />
      <ButtonWhatsApp
        href={'https://api.whatsapp.com/send/?phone=%2B554199301105&text=%20Oi%20gera%C3%A7%C3%A3o%2C%20Tudo%20bem%3F%0AGostaria%20de%20tirar%20uma%20duvida&type=phone_number&app_absent=0'}
        children='Entre no grupo do WhatsApp' /> 
      {/* 
      
      <PrincingSection />
      <FAQ />
    
      <FooterAdoraiCwb />
      
        */}
    </div>
  );
}
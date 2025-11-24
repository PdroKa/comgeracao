import { Button } from '@/components/ui/button'
import { LiteYoutube } from '@/components/ui/video'
import Image from 'next/image'
import { GradientH1 } from '@/components/ui/GradientTitle'

export function HeroSection() {
    return (
        <section className="relative w-full min-h-screen overflow-hidden sm:px-6 ">
            <video
                src="/videos/acampaIA"
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                poster="/pictures/acampaIA.jpg" // imagem leve como fallback
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/0 to-background z-[1]" />
            <div className="absolute inset-0 bg-black/40 z-[1]" />

            <div className="relative z-20 py-8 px-4 md:px-0 mx-auto max-w-5xl lg:py-12 gap-16 sm:gap-10">
                <div className="flex flex-col justify-center items-center">
                    <p className="mt-2 mb-8 md:text-2xl text-gray-200 font-semibold">
                      
                    </p>
                    <GradientH1>
                    CAMP GERACAO
                    </GradientH1>
                    <p className="mb-4 text-xs sm:text-sm font-normal lg:text-xl text-gray-200">
                       
                    </p>
                </div>

                <div className="flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-center h-32 sm:h-16 p-4 sm:p-0">
                    <a href="#sobre">
                        Saiba mais
                    </a>
                    <a href="#princing">
                        <Button className="inline-flex w-full justify-center items-center py-3 px-5 text-2xl font-medium text-center text-black
                        bg-primary hover:bg-primary/80 transition-colors">
                            QUERO ME INSCREVER
                        </Button>
                    </a>
                </div>
            </div>
        </section>

    );
}
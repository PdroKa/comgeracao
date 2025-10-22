import { Button } from '@/components/ui/button'
import { LiteYoutube } from '../ui/video'
import Image from 'next/image'
import { GradientH1 } from '../ui/GradientTitle'

export function HeroSection() {
    return (
        <section className="relative w-full min-h-svh overflow-hidden sm:px-6">
            <video
                src="/videos/acampaIA.mp4"
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                poster="/og-image.avif" // imagem leve como fallback
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/0 to-background z-[1]" />
            <div className="absolute inset-0 bg-black/40 z-[1]" />
            <div className="relative z-20 py-8 px-4 md:px-0 mx-auto max-w-4xl lg:py-12 grid lg:grid-cols-1 gap-16 sm:gap-10">
                <div className="flex flex-col justify-center items-center">
                    <p className="mt-2 mb-8 md:text-2xl text-gray-200 font-semibold">
                        ? | ? | CURITIBA
                    </p>
                    <GradientH1>
                        CAMP GERAÇÃO 2K25
                    </GradientH1>
                    <p className="mb-4 text-xs sm:text-sm font-normal lg:text-xl text-gray-200">
                        Curitiba para Jesus pelas <span className="text-primary font-bold">mãos de Maria.</span>
                    </p>
                </div>

                <div>
                    <LiteYoutube />
                </div>

                <div className="flex flex-col-reverse gap-2 sm:flex-row sm:items-center sm:justify-center">
                    <a href="#sobre">
                        <Button variant="ghost" className="text-white">
                            Saiba mais
                        </Button>
                    </a>
                    <a href="#princing">
                        <Button className="inline-flex w-full justify-center items-center py-3 px-5 text-base font-medium text-center text-black rounded-lg 
                        bg-primary hover:bg-primary/80 transition-colors">
                            Garantir Ingresso
                        </Button>
                    </a>
                </div>
            </div>
        </section>

    );
}
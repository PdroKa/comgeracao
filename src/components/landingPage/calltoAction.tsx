import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { LiteYoutube } from '../ui/video'
import Image from 'next/image'

export function HeroSection() {
    return (
        <section className="relative w-full min-h-2/3 overflow-hidden">
            <Image
                src="/og-image.avif"
                alt="Imagem de fundo Hero"
                fill
                className="z-0 object-cover"
                priority
                quality={70}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/0 to-background z-10" />

            <div className="relative z-20 py-8 px-4 md:px-0 mx-auto max-w-4xl lg:py-12 grid lg:grid-cols-1 gap-13 lg:gap-16">
                <div className="flex flex-col justify-center items-center">
                    <p className="mt-2 mb-8 md:text-2xl text-gray-200 font-semibold">
                        11-12 | OUT | CURITIBA
                    </p>
                    <h1 className="mb-1 text-center text-2xl sm:text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">
                        ADORAI CURITIBA 2K25
                    </h1>
                    <p className="mb-4 text-xs sm:text-sm font-normal lg:text-xl text-gray-200">
                        Curitiba para Jesus pelas <span className="text-primary font-bold">mãos de Maria.</span>
                    </p>
                </div>

                <div>
                    <LiteYoutube />
                </div>

                <div className="flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-center">
                    <a href="#sobre">
                        <Button variant="ghost" className="text-white">
                            Saiba mais
                        </Button>
                    </a>
                    <a href="#princing">
                        <Button className="inline-flex w-full justify-center items-center py-3 px-5 text-base font-medium text-center text-black rounded-lg 
                        bg-primary hover:bg-primary/80 transition-colors">
                            Aproveitar Pré-venda
                            <ArrowRight />
                        </Button>
                    </a>
                </div>
            </div>
        </section>

    );
}
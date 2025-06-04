import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { LiteYoutube } from '../ui/video'
import Image from 'next/image'

export function CallToAction() {
    return (
        <section id='inicio' className='scroll-mt-40 relative w-full h-[100vh] overflow-hidden '>
            <Image
                src="/og-image.jpg"
                alt="Imagem de fundo Hero"
                layout="fill"
                objectFit="cover"
                priority // importante para capa
                quality={75} // pode ajustar se quiser mais leveza
                className="z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/0 to-background z-10" />

            <div className="relative z-20 py-8 px-4 mx-auto max-w-6xl lg:py-16 grid lg:grid-cols-1 gap-8 lg:gap-16 ">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="mb-1 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">
                        Adorai Curitiba 2K25
                    </h1>
                    <p className="mt-2 text-lg text-muted-foreground">
                        11 e 12 de Outubro de 2025
                    </p>
                    <p className="mb-4 text-sm font-normal lg:text-xl text-gray-200">
                        Curitiba para Jesus pelas <span className='text-primary font-bold'>mãos de Maria.</span>
                    </p>
                    <p className="mb-4 text-lg font-normal lg:text-xl text-gray-200">
                        Prepare-se para viver uma experiência transformadora na presença de Deus.
                    </p>
                </div>

                <div>
                    <LiteYoutube />
                </div>

                <div className="flex items-start justify-start flex-col-reverse space-y-4 sm:flex-row sm:items-center sm:justify-center sm:space-y-0">
                    <a href="#sobre">
                        <Button variant={'ghost'}>
                            Saiba mais
                        </Button>
                    </a>
                    <Link href="#princing">
                        <Button className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-black rounded-lg bg-primary hover:bg-primary/80 transition-colors">
                            Aproveitar Pré-venda
                            <ArrowRight />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export function HeroSection() {
    return (
        <section className="relative w-full h-[100vh] overflow-hidden">
            {/* Imagem de fundo */}
            <Image
                src="/og-image.jpg"
                alt="Imagem de fundo Hero"
                layout="fill"
                objectFit="cover"
                priority // importante para capa
                quality={75} // pode ajustar se quiser mais leveza
                className="z-0"
            />

            {/* Gradiente por cima da imagem */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/0 to-background z-10" />

            {/* Conteúdo acima da imagem */}
            <div className="relative z-20 flex items-center justify-center h-full px-4 text-center">
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-bold text-white md:text-5xl">
                        Chamada principal do seu CTA
                    </h1>
                    <p className="mt-4 text-lg text-white/90">
                        Subtítulo explicando o propósito da seção.
                    </p>
                    <button className="mt-6 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl shadow hover:bg-yellow-300 transition">
                        Comprar agora
                    </button>
                </div>
            </div>
        </section>
    );
}
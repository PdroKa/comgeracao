import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function CallToAction() {
    return (
        <section className='bg-heroSection'>
            <div id='inicio' className="py-8 px-4 mx-auto max-w-6xl lg:py-16 grid lg:grid-cols-1 gap-8 lg:gap-16 scroll-mt-20">
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
                    <iframe
                        className="mx-auto w-full aspect-video max-w-4xl h-72 rounded-lg sm:h-96 shadow-xl"
                        src="https://www.youtube.com/embed/kyiEboFeDd4?si=qi6G5OoDcPoNWUC6"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        loading="lazy"
                    ></iframe>
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
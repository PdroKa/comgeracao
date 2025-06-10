import Image from "next/image"
import { ButtonLink } from "../ui/button"

export function About() {
    return (
        <section
            id="sobre"
            className="bg-foreground py-16 lg:py-24 scroll-mt-20 relative"
            aria-labelledby="about-title"
        >
            <div className="max-w-4xl mx-auto px-4 lg:px-6">
                <div className="grid gap-4 items-center">
                    {/* Texto */}
                    <div>
                        <h2
                            id="about-title"
                            className="mb-6 flex-1/2 text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-black"
                        >
                            O QUE É O{" "}
                            <span className="relative z-10 font-bold text-primary py-1 px-2 inline-block before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-background">
                                ADORAI CURITIBA?
                            </span>
                        </h2>
                        <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
                            O <strong>Adorai Curitiba</strong> é um <strong>retiro de 2 dias</strong> que reúne jovens e famílias para viverem momentos de adoração, oração, unidade e transformação.
                            Um encontro onde a presença de Deus é o centro, e onde cada detalhe é preparado para te levar a uma experiência profunda com o Espírito Santo.
                        </p>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Além do retiro, quem se inscreve na <strong>pré-venda</strong> recebe uma <strong>camiseta oficial "Verdadeiros Adoradores"</strong>, um <strong>ebook digital "Pentecostes"</strong> e os <strong>200 primeiros garantem acesso ao Pré-Adorai no Hard Rock Curitiba</strong> — um momento único de comunhão e louvor antes do evento principal.
                        </p>
                    </div>

                    {/* Imagens */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                        <Image
                            className="w-full rounded-lg"
                            src="https://i.ibb.co/K369xSN/MG-0158.jpg"
                            alt="Pessoas adorando no Adorai Curitiba"
                            width={1920}
                            height={1080}
                            sizes="(max-width: 768px) 100vw, 768px"
                        />
                        <Image
                            className="w-full rounded-lg sm:mt-6 lg:mt-10"
                            src="https://i.ibb.co/mCyQYgjM/MG-0110.jpg"
                            alt="Ministração no Adorai Curitiba"
                            width={1920}
                            height={1080}
                            sizes="(max-width: 768px) 100vw, 768px"
                        />
                    </div>
                    <div className="w-full flex items-center justify-center">
                        <ButtonLink className="w-full hover:animate-bounce" href={'#princing'}>
                            Garanta Já
                        </ButtonLink>
                    </div>
                </div>
            </div>
        </section>
    )
}
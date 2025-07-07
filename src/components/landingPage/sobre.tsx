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
                    <div >
                        <h2
                            id="about-title"
                            className="text-start sm:text-center font-open mb-6 flex-1/2 text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-black"
                        >
                            O QUE É O{" "}
                            <span className="relative z-10 font-bold text-primary py-1 px-2 inline-block before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rotate-1 before:-z-10 before:bg-background">
                                ADORAI CURITIBA?
                            </span>
                        </h2>
                        <p className="text-gray-800 mb-4 text-lg leading-relaxed">
                            <strong className="bg-background text-secondary px-1 font-bold">Adorai Curitiba</strong>: Um Chamado para Transformar Gerações <br />
                            <strong className="bg-background text-secondary px-1 font-bold">Imagine um evento onde o céu toca a terra</strong>
                            , onde corações são incendiados pelo amor de Deus e onde uma geração inteira se levanta para{" "}
                            <strong className="bg-background text-secondary px-1 font-bold">adorar em espírito e em verdade</strong>.
                            Em 2024, vivemos o extraordinário uma juventude despertando para o seu propósito.
                            <br />
                            Em 2025, será ainda maior.

                            <strong>
                                {' '}Você está pronto para fazer parte dessa história?
                            </strong>
                            {' '}Um encontro que não apenas impactará sua vida, mas também tocará profundamente aqueles ao seu redor. Prepare-se para momentos inesquecíveis de <strong>adoração profunda</strong>, <strong>pregações avivalistas</strong> e a <strong>presença real de Jesus</strong>.
                            O convite está lançado:
                            <strong className="bg-background text-secondary px-1 font-bold">
                                venha, desperte, transforme!
                            </strong>
                            <br />
                            <strong className="bg-background text-secondary px-1 font-bold">
                                99 não é 100!
                            </strong>
                        </p>
                    </div>

                    {/* Imagens */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                        <div className="relative rounded-lg sm:mb-6 lg:mb-10 overflow-hidden">
                            <Image
                                src="/pictures/_MG_0087.avif"
                                alt="Pessoas adorando no Adorai Curitiba"
                                width={600}
                                height={400}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover rounded-lg"
                                quality={50}
                                placeholder="blur"
                                blurDataURL="/pictures/_MG_0087.avif" // usa a mesma imagem como blur
                            />
                            <div className="absolute inset-0 bg-background opacity-60 rounded-lg" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-60">
                                <p className="text-white text-sm font-bold ">
                                    EM ESPIRITO E VERDADE
                                </p>
                            </div>
                        </div>
                        <div className="relative rounded-lg sm:mt-6 lg:mt-10">
                            <Image
                                src="/pictures/_MG_0128.avif"
                                alt="Homem em meio ao povo adorando"
                                width={600}
                                height={400}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover rounded-lg"
                                quality={50}
                                placeholder="blur"
                                blurDataURL="/pictures/_MG_0128.avif" // usa a mesma imagem como blur
                            />
                            <div className="absolute inset-0 bg-background opacity-50 rounded-lg"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <p className="text-white text-sm font-bold opacity-60">
                                    99 NÃO É 100
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-center">
                        <ButtonLink variant={'outline'} href={'#princing'}>
                            Garanta Já
                        </ButtonLink>
                    </div>
                </div>
            </div>
        </section>
    )
}
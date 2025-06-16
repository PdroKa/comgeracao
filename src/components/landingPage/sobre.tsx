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
                        <p className="text-gray-800 mb-4 text-lg leading-relaxed">
                            <strong className="bg-background text-secondary px-2 rounded font-bold">Adorai Curitiba</strong>: Um Chamado para Transformar Gerações <br />
                            <strong className="bg-background text-secondary px-2 rounded font-bold">Imagine um evento onde o céu toca a terra</strong>, onde corações são incendiados pelo amor de Deus e onde uma geração inteira se levanta para <strong className="bg-background text-secondary px-2 rounded font-bold">adorar em espírito e em verdade</strong>. 
                            Em 2024, vivemos o extraordinário — uma juventude despertando para o seu propósito.
                            <br />
                            Em 2025, será ainda maior.

                            <strong className="bg-background text-secondary px-2 rounded font-bold">Você está pronto para fazer parte dessa história? </strong>
                            Um encontro que não apenas impactará sua vida, mas também tocará profundamente aqueles ao seu redor. Prepare-se para momentos inesquecíveis de <strong>adoração profunda</strong>, <strong>pregações avivalistas</strong> e a <strong>presença real de Jesus</strong>.

                            O convite está lançado: <strong className="bg-background text-secondary px-2 rounded font-bold">venha, desperte, transforme!</strong>
                            <br />
                            <strong className="bg-background text-secondary px-2 rounded font-bold">99 não é 100!</strong>
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
                        <ButtonLink href={'#princing'}>
                            Garanta Já
                        </ButtonLink>
                    </div>
                </div>
            </div>
        </section>
    )
}
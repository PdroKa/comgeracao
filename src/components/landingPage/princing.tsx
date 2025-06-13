import { ButtonLink } from '@/components/ui/button'
import { DataPrincing } from '@/config/princing'
import { Check } from 'lucide-react'
import { ButtonEinscricao } from '../e-inscricao/button'

export function PrincingSection() {
    return (
        <section
            id="princing"
            className="relative py-16 md:py-32"
            aria-labelledby="princing-heading"
        >
            <div className="mx-auto max-w-4xl px-4 md:px-0">
                <header className="mb-10 text-start sm:text-center">
                    <h2
                        id="princing-heading"
                        className="text-2xl md:text-5xl font-extrabold leading-tight text-foreground"
                    >
                        Lote <span className="text-primary">Pré-Venda</span> Aberto!
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-6xl mx-auto md:mx-0">
                        Garanta já: ingresso + Camiseta oficial + Ebook Pentecostes". <br />
                        <strong className="text-primary font-semibold">
                            Os 200 primeiros
                        </strong>{" "}
                        ganham acesso ao <strong>Pré-Adorai no Hard Rock!</strong>
                    </p>
                </header>



                <div className="bg-card text-card-foreground relative rounded-3xl border border-border shadow-xl">
                    <div className="grid items-center gap-10 divide-y md:grid-cols-2 md:divide-x md:divide-y-0 p-8 md:p-12">

                        {/* 🔥 Coluna esquerda */}
                        <div className="text-center md:pr-12">
                            {DataPrincing.badge &&
                                <div className="inline-block bg-accent-foreground text-white text-xs px-4 py-1 rounded-full mb-4">
                                    {DataPrincing.badge}
                                </div>
                            }


                            <h3 className="text-2xl font-semibold">{DataPrincing.title}</h3>
                            <p className="mt-2 text-base text-muted-foreground">{DataPrincing.lote}</p>

                            <div className="my-10">
                                <span className="inline-block text-6xl font-bold text-accent-foreground">
                                    <span className="text-4xl align-top">R$</span>
                                    {DataPrincing.preco.reais}
                                </span>
                                <p className="text-xs mt-2 text-muted-foreground">
                                    {DataPrincing.preco.incluso}
                                </p>
                            </div>
                            <ButtonEinscricao>
                                Garantir minha vaga agora
                            </ButtonEinscricao>
                            <p className="mt-10 text-sm text-muted-foreground leading-relaxed">
                                Acesso completo ao evento: pregações, momentos de louvor, oração, espaços de adoração e muito mais.
                            </p>
                        </div>

                        {/* 🔥 Coluna direita - Benefícios */}
                        <div>
                            <h4 className='font-bold mx-6 mb-3'>Benefícios do ingresso</h4>
                            <ul className="space-y-4">
                                {DataPrincing.beneficios.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <Check width={20} height={20} className="text-green-500 mt-1" />
                                        <span className="text-sm leading-snug">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="mt-6 text-sm text-muted-foreground">
                                Participe de um dos maiores eventos católicos do Brasil. Junte-se a milhares de adoradores em um mover profético e transformador.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section >


    )
}
import { ButtonLink } from '@/components/ui/button'
import { DataPrincing } from '@/config/princingSchema'
import { Check } from 'lucide-react'
import { ButtonEinscricao } from '../e-inscricao/button'

export function PrincingSection() {
    const { titleIngresso, beneficios, badge, bonus, preco, lote, } = DataPrincing
    return (
        <section
            className="relative py-16 md:py-32 bg-background/90"
            aria-labelledby="princing-heading"
        >
            <div className="mx-auto max-w-4xl px-4 md:px-0">
                <header className="mb-10 text-start sm:text-center">
                    <h2
                        id="princing-heading"
                        className="text-2xl md:text-5xl font-extrabold leading-tight text-foreground"
                    >
                        LOTE <span className="text-primary font-open">PRÉ-VENDA</span> ABERTO!
                    </h2>
                    <p className="text-sm sm:text-lg text-muted-foreground max-w-6xl mx-auto md:mx-0">
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
                            {!badge &&
                                <div className="inline-block bg-accent-foreground text-white text-[10px] sm:text-xs px-4 sm:py-1 rounded-full mb-4">
                                    {badge}
                                </div>
                            }


                            <h3 className="text-2xl font-semibold">{titleIngresso.toUpperCase()}</h3>
                            <p className="mt-2 text-sm sm:text-base text-gray-600">{lote}</p>

                            <div className="my-10">
                                <span className="inline-block text-6xl font-bold text-accent-foreground">
                                    <span className="text-2xl align-top text-gray-700">R$</span>
                                    {preco.reais}
                                    <span className="text-3xl align-bottom">,88</span>
                                </span>
                                <p className="text-xs mt-2 text-gray-600">
                                    {preco.incluso}
                                </p>
                            </div>
                            <ButtonEinscricao>
                                Garantir minha vaga agora
                            </ButtonEinscricao>
                            <p className="mt-6 sm:mt-10 text-xs sm:text-sm text-gray-600 leading-relaxed">
                                Acesso completo ao evento: pregações, momentos de louvor, oração, espaços de adoração e muito mais.
                            </p>
                        </div>

                        {/* 🔥 Coluna direita - Benefícios */}
                        <div>
                            <h4 className='font-bold mx-6 mb-3'>Benefícios do ingresso</h4>
                            <ul className="space-y-4">
                                {beneficios.map((beneficio, index) => (
                                    <li key={`beneficio-${index}`} className="flex items-end gap-3">
                                        <Check width={20} height={20} className="text-green-500 mt-1 shrink-0" />
                                        <span className="text-sm leading-snug">
                                            {beneficio}
                                        </span>
                                    </li>
                                ))}

                                <div className='border-b border-6 bg-background'></div>

                                {bonus && bonus.map((item, index) => (
                                    <li key={`bonus-${index}`} className="flex items-center gap-3">
                                        <Check width={20} height={20} className="text-yellow-500 mt-1 shrink-0" />
                                        <span className="text-sm leading-snug font-semibold">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <p className="mt-6 text-xs sm:text-sm text-muted-foreground">
                                Participe de um dos maiores eventos católicos de Curitiba. Junte-se a milhares de adoradores em um mover profético e transformador.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section >


    )
}
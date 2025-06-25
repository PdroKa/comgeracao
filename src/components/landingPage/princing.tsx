import { ButtonLink } from '@/components/ui/button'
import { DataPrincing } from '@/config/princingSchema'
import { Check } from 'lucide-react'
import { ButtonEinscricao } from '../e-inscricao/button'

export function PrincingSection() {
    const { titleIngresso, beneficios, bonus, preco, lote, } = DataPrincing
    return (
        <section
            className="relative py-16 md:py-32 bg-background/90"
            aria-labelledby="princing-heading"
        >
            <div className="mx-auto max-w-4xl px-4">
                <header className="mb-10 text-start sm:text-center">
                    <h2
                        id="princing-heading"
                        className="text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-foreground"
                    >
                        LOTE <span className="text-primary font-open">PRÉ-VENDA</span> ABERTO!
                    </h2>
                    <p className="text-xs sm:text-base text-muted-foreground max-w-6xl mx-auto md:mx-0">
                        Garanta já: ingresso + Camiseta oficial + Ebook Pentecostes". 
                        <br />
                        <strong className="text-primary font-semibold">
                            Os 200 primeiros
                        </strong>{" "}
                        ganham acesso ao <strong>Pré-Adorai no Hard Rock!</strong>
                    </p>
                </header>

                <div className="bg-card text-card-foreground relative rounded-md border border-border shadow-xl">
                    <div className="grid items-center gap-6 divide-y md:grid-cols-2 md:divide-x md:divide-y-0 p-8 md:p-12">

                        {/* 🔥 Coluna esquerda */}
                        <div className="text-start md:text-center md:pr-12 order-2 sm:order-first">
                            <div className='hidden sm:block'>
                                <h3 className="text-base font-semibold">{titleIngresso.toUpperCase()}</h3>
                                <p className="text-sm text-gray-600">{lote}</p>
                            </div>

                            <div className="my-5">
                                {/* PARCELADO */}
                                <div className="flex flex-col !text-base items-start md:items-center">
                                    <p className="text-gray-800">
                                        {"12x "}
                                        <strong className="text-xl sm:text-3xl">
                                            R$&nbsp;{preco.parcelado}
                                        </strong>
                                    </p>
                                    <p className="text-gray-700">
                                        {"ou "}
                                        <strong>
                                            R$&nbsp;{preco.total}
                                        </strong> {" à vista"}
                                    </p>
                                </div>

                                <p className="text-xs mt-1 sm:mt-2 text-gray-600">
                                    {preco.incluso}
                                </p>
                            </div>
                            <div className='relative flex items-center justify-center overflow-hidden w-full'>
                                <ButtonEinscricao className='text-sm'>
                                    GARANTIR MINHA VAGA
                                </ButtonEinscricao>
                            </div>
                            <p className="mt-3 sm:mt-10 text-xs sm:text-sm text-gray-600 leading-relaxed">
                                Acesso completo ao evento: pregações, momentos de louvor, oração, espaços de adoração e muito mais.
                            </p>
                        </div>

                        {/* 🔥 Coluna direita - Benefícios */}
                        <div className='text-sm'>
                            <div className='mb-4'>
                                <h3 className="sm:hidden text-base sm:text-xl font-semibold">{titleIngresso.toUpperCase()}</h3>
                                <p className="sm:hidden text-xs sm:text-sm text-gray-600">{lote}</p>
                            </div>

                            <h4 className='font-bold text-sm mx-6 mb-1'>Benefícios do ingresso</h4>
                            <ul className="space-y-2">
                                {beneficios.map((beneficio, index) => (
                                    <li key={`beneficio-${index}`} className="flex items-end gap-3">
                                        <Check width={20} height={20} className="text-green-500 mt-1 shrink-0" />
                                        <span className="leading-snug">
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
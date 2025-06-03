import { Button } from '@/components/ui/button'
import { DataPrincing } from '@/config/princing'
import { Check } from 'lucide-react'
import Link from 'next/link'

const beneficiosAdorai = [
    'Ingresso para os 2 dias do retiro',
    'Camiseta oficial — “Verdadeiros Adoradores”',
    'Ebook digital exclusivo — “Pentecostes”',
    'Santa missa nos 2 dias',
    'Pregações e ministrações impactantes',
    ' Espaço de adoração',
    '🎁 Bônus: Acesso ao Pré-Adorai no Hard Rock (para os 200 primeiros)',
]
export function PrincingSection() {
    return (
        <section id="princing" className="relative bg-background py-16 md:py-32">
            <div className="mx-auto max-w-6xl px-6">

                {/* Título principal com bom contraste */}
                <header className="mx-auto text-start mb-10">
                    <h1 className="text-balance text-3xl md:text-5xl font-extrabold leading-tight text-foreground">
                        Lote <span className="text-primary">Pré-Venda</span> Aberto!
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Garanta já: {DataPrincing.description}. <br />
                        <strong className="text-primary font-semibold">Os 200 primeiros</strong> ganham acesso ao Pré-Adorai no Hard Rock!
                    </p>
                </header>

                {/* Card com fundo escuro e texto claro */}
                <div className="bg-card  text-card-foreground relative rounded-3xl border border-border shadow-xl">
                    <div className="grid items-center gap-12 divide-y md:grid-cols-2 md:divide-x md:divide-y-0 p-8 md:p-12">

                        {/* Coluna esquerda */}
                        <div className="text-center md:pr-12">
                            <div className="inline-block bg-accent-foreground text-white text-xs px-4 py-1 rounded-full mb-4">
                                {DataPrincing.badge}
                            </div>

                            <h2 className="text-2xl font-semibold text-background">
                                {DataPrincing.title}
                            </h2>
                            <p className="mt-2 text-base text-muted-foreground">
                                {DataPrincing.lote}
                            </p>

                            <div className="my-10">
                                <span className="inline-block text-6xl font-bold text-accent-foreground">
                                    <span className="text-4xl align-top">
                                        R$
                                    </span>
                                    {DataPrincing.preco.reais}
                                </span>
                                <p className="text-xs mt-2 text-stone-700">
                                    {DataPrincing.preco.incluso}
                                </p>
                            </div>
                            <Link href={'/adoraicuritiba/Checkout'}>
                                <Button className="w-full md:w-auto text-base font-semibold">
                                    Garantir minha vaga agora
                                </Button>
                            </Link>

                            <p className="mt-10 text-sm text-muted-foreground leading-relaxed">
                                Acesso completo ao evento, pregações, momentos de louvor, oração, espaços de adoração e muito mais.
                            </p>
                        </div>

                        {/* Coluna direita */}
                        <div className='text-background'>
                            <h3 className="sr-only">Benefícios do ingresso</h3>
                            <ul className="space-y-4">
                                {DataPrincing.beneficios.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <Check className="size-5 text-green-500 mt-1" />
                                        <span className="text-sm  leading-snug">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="mt-6 text-sm text-background">
                                Participe de um dos maiores eventos catolicos do Brasil. Junte-se a milhares de pessoas nesse mover.
                            </p>

                            <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
                                <img
                                    src="/patrocinador-logo.png"
                                    alt="Logo dos patrocinadores do evento Adorai Curitiba"
                                    className="h-10 invert"
                                />
                                <p className="text-sm text-muted-foreground">Apoio oficial: Patrocinadores</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}
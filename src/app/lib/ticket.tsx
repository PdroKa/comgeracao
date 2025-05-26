import { SquareCheck } from "lucide-react";

export function Ticket() {
    return (
        <div>


            <div className="rounded-[32px] bg-gradient-to-b w-1/2 bg-accent-blue-dark px-6 pb-6 pt-4 space-y-6 relative overflow-hidden transition-colors">

                {/*  Imagem de fundo */}


                {/* Cabeçalho */}
                <div className="relative z-10 space-y-2">
                    <p className="uppercase text-sm tracking-widest font-bold text-new-light">
                        Pré venda ingressos
                    </p>
                    <h3 className="text-white text-2xl lg:text-4xl font-medium mb-6">
                        Ingresso + Camiseta + Ebook <span className="text-2xl">(50 dia de pentecostes)</span>
                    </h3>
                </div>

                {/* <!-- Linha divisória --> */}
                <div className="h-px w-full bg-white/50"></div>

                {/* <!-- Barra de progresso --> */}
                <div className="z-10 w-full space-y-6">
                    <div className="flex flex-col items-center w-full gap-4 lg:px-10">
                        <div className="relative w-full h-2 rounded-[0.625rem] bg-black/50">
                            <div className="absolute h-full bg-white rounded-full w-[99%]"></div>
                            <div className="absolute top-0 translate-x-20 -mt-2.5 left=[99%]">
                                <div className="w-6 h-6 rounded-lg bg-yellow-400 flex items-center justify-center">
                                    <div className="w-4 h-4 bg-brown-900 rounded">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-center text-sm lg:text-base font-bold uppercase tracking-widest text-white">
                            30% das vagas já preenchidas!
                        </p>
                    </div>
                </div>
            </div>
            {/* <!-- Preço e informações --> */}
            <div className="h-80 rounded-[32px] bg-gradient-to-b w-1/2 bg-accent-blue-dark  px-6 pb-6 pt-4 space-y-6 relative overflow-hidden transition-colors">
                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-2 text-white">

                    <div className="space-y-2 text-center lg:text-start">
                        <div className="flex items-center justify-center lg:justify-start gap-4">
                            <p className="text-lg line-through">R$ 6.591</p>
                            <span className="bg-new-light text-black rounded-[10px] px-3 h-[30px] flex items-center justify-center font-medium text-lg">
                                60% OFF
                            </span>
                        </div>
                        <p className="text-xl">
                            12x de <span className="text-2xl">R$ 216,41</span>
                        </p>
                        <p className="text-lg">
                            ou R$ 2.597 à vista
                        </p>
                    </div>

                    <div className="flex items-center gap-2 border border-white rounded-[5px] px-2 py-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                            <path d="M13 5v2M13 17v2M13 11v2" />
                        </svg>
                        <span className="text-xs font-bold uppercase">
                            Economize quase R$ 4 MIL
                        </span>
                    </div>

                </div>
                <div className="h-px w-full bg-white/50 relative">
                    <p className="absolute -top-3 bg-accent-blue-dark">
                        Bonus da Pré venda
                    </p>
                </div>

                <div>
                    <div className="flex items-center gap-4">
                        <SquareCheck />
                        <p>Pre Adorai curitiba!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
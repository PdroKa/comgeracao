import type { Metadata } from "next";

import { Suspense } from "react";
import Loading from "./loading";



export const metadata: Metadata = {
    title: "Ingressos Adorai Curitiba 2025 | Garanta sua vaga",
    description: "Garanta seu ingresso para o Adorai Curitiba 2025. Dois dias de avivamento, adoração e encontro com Deus em Curitiba."
};

// export default function Checkout() {
//     return (
//         <>
//             <Suspense fallback={<Loading />}>
//                 <div className="w-full h-screen max-w-4xl mx-auto aspect-[16/9] rounded-2xl shadow-2xl overflow-hidden">
//                    <h1>Checkout</h1>
//                 </div>
//             </Suspense>
//         </>
//     )
// }

import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ShoppingBag, Truck, Shield, RotateCcw, Clock, Check, Ticket, Tickets } from "lucide-react";
import Image from "next/image";
import { DataPrincing } from "@/config/princingSchema";
import { ButtonEinscricao } from "@/components/e-inscricao/button";

const { titleIngresso, beneficios, bonus, preco, lote, } = DataPrincing
function ProductDetails() {
    return (
        <div className="flex flex-col text-sm sm:text-base space-y-6 bg-white text-card-foreground rounded-md overflow-hidden">
            <div className="mb-6 p-4 bg-zinc-300 text-sm sm:text-base">
                <h4>Meu ingresso</h4>
            </div>
            <div className="flex flex-col-reverse md:flex-row gap-8 p-4">
                <div className="flex-1/3 relative">
                    <Image
                        src="/pictures/Camiseta-oficial-verdadeiros-adoradores.avif"
                        alt="Camiseta oficial Verdadeiros adoradores"
                        width={400}
                        height={500}
                        className="rounded-md"
                    />
                    <div className="absolute md:h-56 inset-0 flex items-start justify-end opacity-80">
                        <p className="text-white !text-xs font-bold text-center bg-zinc-800 w-full">
                            BONUS PRÉ-VENDA
                        </p>
                    </div>
                </div>
                <div className="space-y-4">
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
    );
};

function OrderSummary() {
    return (
        <Card className="bg-gray-50 text-sm sm:text-base">
            <CardHeader className="text-sm sm:text-base p-4 bg-zinc-300">
                <h4>Resumo do ingresso</h4>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
                <div className="space-y-3">
                    <div className="flex justify-between">
                        <span className="text-gray-600">{`${titleIngresso} | ${lote}`}</span>
                        <span>R$&nbsp;{preco.total}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                        <span>Total</span>
                        <div className="flex flex-col text-sm items-end">
                            <p className="text-gray-800">
                                {"12x "}
                                <strong className="text-sm sm:text-xl">
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
                    </div>
                </div>

                <ButtonEinscricao className="w-full py-6 text-sm sm:text-base" size="lg">
                    <Ticket className="mr-2" />
                    Garanta já seu ingresso
                </ButtonEinscricao>

                <p className="text-xs text-center text-gray-500 mt-2 sm:mt-4">
                    Secure checkout powered by Stripe. Your payment information is
                    encrypted.
                </p>
            </CardContent>
        </Card>
    );
};

export default function Checkout() {
    return (
        <div className="min-h-screen bg-background">
            <header className="shadow-sm py-4">
                <div className="container mx-auto px-4">
                    <Image className="mx-auto block" width={65} height={65} src="/Logo-remove-240.png" alt="Logo, Adorai Curitiba" loading='lazy' />
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                        <ProductDetails />
                    </div>
                    <div className="lg:col-span-1">
                        <OrderSummary />
                    </div>
                </div>
            </main>
        </div>
    );
}

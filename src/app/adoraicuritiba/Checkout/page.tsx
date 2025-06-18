import type { Metadata } from "next";

import { Suspense } from "react";
import Loading from "./loading";

export const metadata: Metadata = {
    title: "Ingressos Adorai Curitiba 2025 | Garanta sua vaga",
    description: "Garanta seu ingresso para o Adorai Curitiba 2025. Dois dias de avivamento, adoração e encontro com Deus em Curitiba."
};

export default function Checkout() {
    return (
        <>
            <Suspense fallback={<Loading />}>
                <div className="w-full h-screen max-w-4xl mx-auto aspect-[16/9] rounded-2xl shadow-2xl overflow-hidden">
                   <h1>Checkout</h1>
                </div>
            </Suspense>
        </>
    )
}
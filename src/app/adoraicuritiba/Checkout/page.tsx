import type { Metadata } from "next";

import { Suspense } from "react";
import Loading from "./loading";

export const metadata: Metadata = {
    title: 'Inscrição - Adorai Curitiba 2025',
    description: `Adorai Curitiba 2025 - Curitiba para Jesus, pelas mãos de Maria.
    Imagine um evento onde o céu toca a terra, onde corações são incendiados pelo amor de Deus e onde uma geração se levanta para adorar em espírito e em verdade. Em 2024 vivemos o extraordinário! Uma juventude despertando para seu propósito. Em 2025, será ainda maior.`,
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
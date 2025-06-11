import type { Metadata } from "next";

import { Suspense } from "react";
import Loading from "./loading";

export const metadata: Metadata = {
    title: 'Inscrição - Adorai Curitiba 2025',
    description: 'Faça sua inscrição no Adorai Curitiba 2025',
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
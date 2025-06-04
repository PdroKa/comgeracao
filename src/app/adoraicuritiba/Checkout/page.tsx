import type { Metadata } from "next";

import { Suspense } from "react";
import Loading from "./loading";

export const metadata: Metadata = {
    title: 'Inscrição - Adorai Curitiba 2025',
    description: 'Faça sua inscrição no Adorai Curitiba 2025',
    // 👇 Preconnect usando link tags
    other: {
        'link:preconnect:1': 'https://checkout.einscricao.app//?event_id=100725&apiUrl=https://www.e-inscricao.com&msApiUrl=https://ei-pay.e-inscricao.com&LOG=false&receiptUrl=https://recibo.e-inscricao.tech&apiParticipantsUrl=https://participants.e-inscricao.com&hostUrl=https%3A%2F%2Fwww.e-inscricao.com%2Fcolodedeus%2Fgeracaoatmk25&themeColorPrimary=%23010101&themeColorSecondary=%23ddbb53&themeLogo=https%3A%2F%2Fi.ibb.co%2F0RQVFWvq%2FLogo-remove-500.png',
        'link:preconnect:2': 'https://checkout.einscricao.app',
        'link:preconnect:3': 'https://www.e-inscricao.com',
        'link:preconnect:4': 'https://ei-pay.e-inscricao.com',
        'link:preconnect:5': 'https://participants.e-inscricao.com',
        'link:preconnect:6': 'https://recibo.e-inscricao.tech',
    },
};
export default function Checkout() {
    return (
        <>
            <Suspense fallback={<Loading />}>
                <div className="w-full h-screen max-w-4xl mx-auto aspect-[16/9] rounded-2xl shadow-2xl overflow-hidden">
                    <iframe
                        loading="eager"
                        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                        id="ei-widget-iframe"
                        className="w-full h-full"
                        rel="prefetch"
                        src="https://checkout.einscricao.app//?event_id=100725&apiUrl=https://www.e-inscricao.com&msApiUrl=https://ei-pay.e-inscricao.com&LOG=false&receiptUrl=https://recibo.e-inscricao.tech&apiParticipantsUrl=https://participants.e-inscricao.com&hostUrl=https%3A%2F%2Fwww.e-inscricao.com%2Fcolodedeus%2Fgeracaoatmk25&themeColorPrimary=%23010101&themeColorSecondary=%23ddbb53&themeLogo=https%3A%2F%2Fi.ibb.co%2F0RQVFWvq%2FLogo-remove-500.png"
                        allow="clipboard-read; clipboard-write self"
                        title="Inscrição Geração ATMK"
                    />
                </div>
            </Suspense>
        </>
    )
}
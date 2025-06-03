export function CheckIn() {
    return (
        <div className="w-full h-screen max-w-4xl mx-auto aspect-[16/9] rounded-2xl shadow-2xl overflow-hidden">
            <iframe
                sandbox="allow-scripts allow-same-origin allow-forms"
                id="ei-widget-iframe"
                className="w-full h-full"
                src="https://checkout.einscricao.app//?event_id=100725&apiUrl=https://www.e-inscricao.com&msApiUrl=https://ei-pay.e-inscricao.com&LOG=false&receiptUrl=https://recibo.e-inscricao.tech&apiParticipantsUrl=https://participants.e-inscricao.com&hostUrl=https%3A%2F%2Fwww.e-inscricao.com%2Fcolodedeus%2Fgeracaoatmk25&themeColorPrimary=%23010101&themeColorSecondary=%23ddbb53&themeLogo=https%3A%2F%2Fi.ibb.co%2F0RQVFWvq%2FLogo-remove-500.png"
                allow="clipboard-read; clipboard-write self"
                loading="lazy"
                title="Inscrição Geração ATMK"
            />
        </div>


    )
}
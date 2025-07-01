'use client'

import { Button } from "../ui/button";
import { useEffect } from "react";

export function ButtonEinscricao({ children, className, size, ...props }: {
    children: React.ReactNode,
    className?: string,
    size?: "default" | "ghost" | "sm" | "lg" | "icon" | null | undefined
}) {

    useEffect(() => {
        // Executa o script global (que você recebeu) se ainda não foi executado
        if (typeof window !== 'undefined') {
            import('@e-inscricao/widget'!)
        }
    }, [])

    return (
        <Button
            {...props}
            size={size}
            className={`w-full text-base font-semibold ${className}`}
            data-einscricao-event="97574"
            data-einscricao-url="https://checkout.einscricao.app/"
            data-einscricao-api-url="https://www.e-inscricao.com"
            data-einscricao-theme-color-primary="#000"
            data-einscricao-theme-color-secondary="#dcbe59"
            data-einscricao-ms-api-url="https://ei-pay.e-inscricao.com"
            data-einscricao-receipt-url="https://recibo.e-inscricao.tech"
            data-einscricao-theme-logo="https://comgeracao.com.br/Logo-remove-240.png"
            data-einscricao-api-participants-url="https://participants.e-inscricao.com"
            aria-label="Realizar inscrição no evento Adorai Curitiba"
            type="button">
            {children}
        </Button>

    )
}


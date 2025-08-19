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
            data-einscricao-event={process.env.NEXT_PUBLIC_EINSCRICAO_EVENT}
            data-einscricao-url={process.env.NEXT_PUBLIC_EINSCRICAO_URL}
            data-einscricao-api-url={process.env.NEXT_PUBLIC_EINSCRICAO_API_URL}
            data-einscricao-theme-color-primary={'#000'}
            data-einscricao-theme-color-secondary={'#dcbe59'}
            data-einscricao-ms-api-url={process.env.NEXT_PUBLIC_EINSCRICAO_MS_API_URL}
            data-einscricao-receipt-url={process.env.NEXT_PUBLIC_EINSCRICAO_RECEIPT_URL}
            data-einscricao-theme-logo={process.env.NEXT_PUBLIC_EINSCRICAO_THEME_LOGO}
            data-einscricao-api-participants-url={process.env.NEXT_PUBLIC_EINSCRICAO_API_PARTICIPANTS_URL}
            aria-label="Realizar inscrição no evento Adorai Curitiba"
            type="button">
            {children}
        </Button>

    )
}


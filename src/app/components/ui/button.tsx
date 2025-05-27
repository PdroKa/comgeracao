import React from "react";
import { cn } from "@/app/lib/utils";

export function Button({ children, variant = 'primary', link, ...props }: {
    children: React.ReactNode,
    variant?: 'primary' | 'secundary' | 'ghost',
    link?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>
) {
    return (
        <a href={link}>
            <button {...props} className={cn('py-3 px-6 text-white rounded-xl font-bold whitespace-nowrap hover:opacity-95 disabled:opacity-70',
                variant === 'primary' && 'bg-accent-purple',
                variant === 'secundary' && 'bg-background-tertiary',
                variant === 'ghost' && 'border-white border',
                props.className
            )}>
                {children}

            </button>
        </a>
    )
}
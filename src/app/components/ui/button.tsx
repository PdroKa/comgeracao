import React from "react";
import { cn } from "@/app/lib/utils";

export function Button({ children, variant = 'primary', ...props }: {
    children: React.ReactNode,
    variant?: 'primary' | 'secundary' | 'ghost'
} & React.ButtonHTMLAttributes<HTMLButtonElement>
) {
    return (
        <button {...props} className={cn('py-3 px-6 text-white rounded-xl font-bold whitespace-nowrap hover:opacity-95 disabled:opacity-70',
            variant === 'primary' && 'bg-accent-purple',
            variant === 'secundary' && 'bg-background-tertiary',
            variant === 'ghost' && 'border-border-primary',
            props.className
        )}>
            {children}
        </button>
    )
}
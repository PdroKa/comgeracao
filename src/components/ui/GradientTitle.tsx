import { ReactNode } from "react";

interface GradientHeadingProps {
    children: ReactNode
}
export function GradientH1({ children }: GradientHeadingProps) {
    return (
        <div className='w-full flex flex-col items-center justify-center overflow-hidden rounded-md'>
            <h1 className="font-open mb-1 text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none  text-white">
                {children}
            </h1>
            <div className="w-full relative">
                {/* Gradients */}
                <div className="absolute left-1/7 -top-1 bg-gradient-to-r from-transparent via-tertiary to-transparent h-[6px] w-3/4 blur-sm" />
                <div className="absolute left-1/7 -top-1 bg-gradient-to-r from-transparent via-secondary to-transparent h-px w-3/4" />
                <div className="absolute left-1/3 -top-1 bg-gradient-to-r from-transparent via-primary to-transparent h-[8px] w-1/4 blur-sm" />
                <div className="absolute left-1/3 -top-1 bg-gradient-to-r from-transparent via-primary to-transparent h-px w-1/4" />
            </div>
        </div>
    );
}

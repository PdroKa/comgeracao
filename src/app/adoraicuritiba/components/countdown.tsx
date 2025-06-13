'use client'

import { PrincingSection } from '@/components/landingPage/princing'
import Countdown from 'react-countdown'

export default function CountdownTimer() {
    return (
        <Countdown
            date={new Date('2025-10-11T09:00:00')}
            renderer={({ days, hours, minutes, seconds, completed }) => {
                if (completed) {
                    return <PrincingSection />
                } else {
                    return (
                        <div>
                            <header className="mb-10 text-center sm:text-center">
                                <h2
                                    id="princing-heading"
                                    className="text-2xl md:text-5xl font-extrabold leading-tight text-foreground"
                                >
                                    ESTA  <span className="text-primary">CHEGANDO</span>
                                </h2>
                                <p className="mt-4 text-lg text-muted-foreground max-w-6xl mx-auto md:mx-0">
                                    Faltam:
                                </p>
                            </header>

                            <div className="flex gap-4 text-center justify-center items-center font-bold text-2xl md:text-4xl">
                                <div className="flex flex-col">
                                    <span>{days}</span>
                                    <span className="text-sm font-normal">dias</span>
                                </div>
                                <div className="flex flex-col">
                                    <span>{hours}</span>
                                    <span className="text-sm font-normal">horas</span>
                                </div>
                                <div className="flex flex-col">
                                    <span>{minutes}</span>
                                    <span className="text-sm font-normal">minutos</span>
                                </div>
                                <div className="flex flex-col">
                                    <span>{seconds}</span>
                                    <span className="text-sm font-normal">segundos</span>
                                </div>
                            </div>
                        </div>
                    )
                }
            }}
        />
    )
}



'use client'
import { PrincingSection } from "@/components/landingPage/princing";
import { memo } from "react";
import Countdown from "react-countdown";



const CountdownDisplay = ({ days, hours, minutes, seconds }: any) => (
    <section
        id="dataPrincing"
        className="relative py-8 sm:py-16 md:py-32"
        aria-labelledby="princing-heading"
    >
        <div className="mx-auto max-w-4xl px-4 md:px-6">
            <header className="mb-10 text-start sm:text-center">
                <h2
                    id="princing-heading"
                    className="text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-foreground"
                >
                    ESTÁ <span className="text-primary">CHEGANDO</span>
                    <br />
                  
                </h2>
                <p className="text-lg text-muted-foreground">
                    Faltam:
                </p>
            </header>

            <div className="h-80 rounded-md border border-border shadow-xl bg-card text-card-foreground  p-3 sm:p-6 flex justify-center items-center gap-6 flex-wrap">
                <TimeUnit value={days} label="dias" />
                <TimeUnit value={hours} label="horas" />
                <TimeUnit value={minutes} label="minutos" />
                <TimeUnit value={seconds} label="segundos" />
            </div>
        </div>
    </section>
);

type TimeUnitProps = { value: number; label: string };

const TimeUnit = memo(({ value, label }: TimeUnitProps) => (
    <div className="flex flex-col items-center">
        <span className="text-3xl md:text-5xl font-bold">
            {value.toString().padStart(2, "0")}
        </span>
        <span className="text-sm font-medium text-muted-foreground">{label}</span>
    </div>
));

export function CountdownTimer({ targetDate }: { targetDate: Date }) {
    return (
        <div >
            <Countdown
                date={targetDate}
                renderer={({ days, hours, minutes, seconds, completed }) =>
                    completed ? (
                        <>Hello Word!</>
                    ) : (
                        <CountdownDisplay
                            days={days}
                            hours={hours}
                            minutes={minutes}
                            seconds={seconds}
                        />
                    )
                }
            />
        </div>
    );
}

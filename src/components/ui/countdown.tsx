'use client'

import { useEffect, useState } from 'react'

type CountdownProps = {
    date: string
    onComplete?: () => void
}

type TimeLeft = {
    dias: number
    horas: number
    minutos: number
    segundos: number
}

export function CountdownHook({ date, onComplete }: CountdownProps) {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        dias: 0,
        horas: 0,
        minutos: 0,
        segundos: 0
    })

    const [completed, setCompleted] = useState(false)

    useEffect(() => {
        const target = new Date(date).getTime()

        const updateTime = () => {
            const now = new Date().getTime()
            const difference = target - now

            if (now >= target) {
                setCompleted(true)
                if (onComplete) onComplete()
                return
            }

            if (difference <= 0) {
                setCompleted(true)
                if (onComplete) onComplete()
                clearInterval(timer)
                return
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24))
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
            const minutes = Math.floor((difference / 1000 / 60) % 60)
            const seconds = Math.floor((difference / 1000) % 60)

            setTimeLeft({ dias: days, horas: hours, minutos: minutes, segundos: seconds })
        }

        updateTime()
        const timer = setInterval(updateTime, 1000)

        return () => clearInterval(timer)
    }, [date, onComplete])

    if (completed) return (null) // ou algum placeholder

    return (
        <div className="p-4 sm:p-6 flex justify-center items-center gap-3 sm:gap-4">
            {Object.entries(timeLeft).map(([label, value]) => (
                <div key={label} className="flex flex-col items-center">
                    <span className="text-3xl md:text-5xl font-bold">
                        {value.toString().padStart(2, "0")}
                    </span>
                    <span className="text-sm font-medium text-muted-foreground">{label}</span>
                </div>
            ))}
        </div>
    )
}


export function CountdownRender({ render }: { render?: any }) {
    const [showRender, setShowRender] = useState(false)
    return (
        <div>
            {!showRender ? (
                <CountdownHook
                    date="2025-07-03T09:09:00"
                    onComplete={() => setShowRender(true)}
                />
            ) : render
            }
        </div>
    )
}
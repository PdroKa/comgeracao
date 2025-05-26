'use client'

import { Play } from "lucide-react";
import React, { useRef, useState, useEffect } from 'react'
import ReactPlayer from 'react-player'

export function VideoComBotao() {
    const playerRef = useRef<ReactPlayer>(null)
    const [playing, setPlaying] = useState(false)
    const [ended, setEnded] = useState(false)
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const handleFullScreen = () => {
        const playerElement = playerRef.current?.getInternalPlayer()?.getIframe()
        if (playerElement) {
            if (playerElement.requestFullscreen) {
                playerElement.requestFullscreen()
            } else if ((playerElement as any).webkitRequestFullscreen) {
                (playerElement as any).webkitRequestFullscreen()
            } else if ((playerElement as any).mozRequestFullScreen) {
                (playerElement as any).mozRequestFullScreen()
            } else if ((playerElement as any).msRequestFullscreen) {
                (playerElement as any).msRequestFullscreen()
            }
        }
    }

    if (!isClient) {
        // Enquanto não for cliente, pode mostrar um loader ou nada
        return null
    }

    return (
        <div className="flex flex-col items-center space-y-6">
            <div className="w-full aspect-video max-w-4xl relative">
                <ReactPlayer
                    ref={playerRef}
                    url="https://www.youtube.com/watch?v=XNcBUpnAcCs"
                    playing={playing}
                    controls
                    width="100%"
                    height="100%"
                    onEnded={() => {
                        setEnded(true)
                        setPlaying(false)
                    }}
                />

                {!playing && !ended && (
                    <button
                        onClick={() => setPlaying(true)}
                        className="absolute inset-0 flex items-center justify-center bg-black text-white text-4xl rounded-lg hover:bg-black/70 transition"
                    >
                       <Play size={60} className="text-white fill-accent-yellow" />
                    </button>
                )}

                <button
                    onClick={handleFullScreen}
                    className="absolute top-2 right-2 bg-white text-black px-3 py-1 rounded-md text-xs hover:bg-gray-200 transition"
                >
                    Fullscreen
                </button>
            </div>

            <button
                className={`px-6 py-3 rounded-lg text-white font-bold transition ${ended
                    ? 'bg-blue-600 hover:bg-blue-700'
                    : 'bg-gray-400 cursor-not-allowed'
                    }`}
                disabled={!ended}
            >
                {ended ? 'Liberado - Próximo Passo' : 'Assista até o final'}
            </button>
        </div>
    )
}

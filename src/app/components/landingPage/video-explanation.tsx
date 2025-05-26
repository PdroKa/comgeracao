'use client'

import { Play } from "lucide-react";
import { useState } from "react";
import ReactPlayer from "react-player";

export function VideoExplanation() {
    const [fimDoVideo, setFimDoVideo] = useState(false)

    return (
        <div className="flex flex-col items-center space-y-6">
            <div className="w-full aspect-video max-w-4xl">
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=XNcBUpnAcCs"
                    controls
                    width="100%"
                    height="100%"
                    onEnded={() => setFimDoVideo(true)} // Quando termina ativa o botão
                />
            </div>

            <button
                className={`px-6 py-3 rounded-lg text-white font-bold transition ${fimDoVideo
                    ? 'bg-blue-600 hover:bg-blue-700'
                    : 'bg-gray-400 cursor-not-allowed'
                    }`}
                disabled={!fimDoVideo}
            >
                {fimDoVideo ? 'Próximo' : 'Assista o vídeo até o final'}
            </button>
        </div>
    )
}
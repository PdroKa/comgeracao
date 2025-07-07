// 'use client'
import { YouTubeEmbed } from '@next/third-parties/google'
export function LiteYoutube() {

    return (

        <YouTubeEmbed
            params=''
            videoid="qHoV4uBFeVA"
            playlabel="Adorai Curitiba 2025"
            style='
            margin-inline: auto;
            max-width: var(--container-4xl);
            background-color: #000;
            border-radius: 0.50rem;
            '
        />

    )
}
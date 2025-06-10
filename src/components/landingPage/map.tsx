import { GoogleMapsEmbed } from "@next/third-parties/google"
import { ButtonLink } from "../ui/button"

type MapType = {
    apiKey: string
}
export function Map() {
    const apiKey = process.env.GOOGLE_API_KEY!
    return (
        <div id="local" className="scroll-mt-36">
            {/* 🔥 Header SEO + acessível */}
            <header className="mx-auto max-w-2xl text-center my-4">
                <h2
                    id="faq-heading"
                    className="text-balance text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground"
                >
                    LOCAL
                </h2>
                <p className="mt-4 text-sm text-muted-foreground">
                    R. Prof. Joaquim de Matos Barreto, 98 - São Lourenço, Curitiba - PR
                </p>
            </header>
            <GoogleMapsEmbed
                height={400}
                mode='place'
                width="100%"
                allowfullscreen={true}
                zoom="16"
                loading="lazy"
                apiKey={apiKey}
                language="pt-BR"
                region="BR"
                maptype="roadmap"
                q="Colégio Marista Santa Maria,São+Lourenço,Curitiba"
            />
            <div className="w-full flex items-center justify-center">
                <ButtonLink className="mt-10" href={'#princing'}>
                    Garanta Já
                </ButtonLink>
            </div>
        </div>
    )
}
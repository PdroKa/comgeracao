import { GoogleMapsEmbed } from "@next/third-parties/google"

export function Map() {
    return (
        <div id="local" className="scroll-mt-36">
            {/* 🔥 Header SEO + acessível */}
            <header className="mx-auto max-w-2xl text-center my-4">
                <h2
                    id="faq-heading"
                    className="text-balance text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground"
                >
                    Local
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
                apiKey={'AIzaSyDVsdBw3V7RrcNuvwnL_Cv8JlceY9Asakk'}
                language="pt-BR"
                region="BR"
                maptype="roadmap"
                q="Colégio Marista Santa Maria,São+Lourenço,Curitiba"
            />
        </div>
    )
}
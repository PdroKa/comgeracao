import { GoogleMapsEmbed } from "@next/third-parties/google"

export function Map() {

    return (
        <div  id="local" className="scroll-mt-40">
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
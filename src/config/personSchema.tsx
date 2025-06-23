import Script from "next/script"

export const members = [
    {
        name: 'Moises Rocha',
        role: 'Fundador da Comunidade Filhos de João Batista',
        avatar: '/pregadores/Moises-rocha.avif',
    },
    {
        name: 'Eduardo Oliveira',
        role: 'Pregador e Missionário Com.Filhos de João Batista',
        avatar: '/pregadores/eduardo-oliveira.avif',
    },
    {
        name: 'Padre Ailton',
        role: 'Fundador da Fraternidade São João Paulo II',
        avatar: '/pregadores/padre-ailton.avif',
    },
    {
        name: 'Gil Motta',
        role: 'Fundador da comunidade Metanoia',
        avatar: '/S-JPII.png',
    },
    {
        name: 'William Bernardo',
        role: 'Fundador da comunidade Geração de adoradores',
        avatar: '/pregadores/William.avif',
    },
    {
        name: 'Padre Fernando',
        role: 'Diretor espiritual',
        avatar: '/S-JPII.png',
    },
    {
        name: 'Padre ?',
        role: 'Padre ?',
        avatar: '/S-JPII.png',
    },
]

export function TeamSchema() {
    return (
        <Script
            id="team-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": members.map((member) => ({
                        "@type": "Person",
                        name: member.name,
                        jobTitle: member.role,
                        image: member.avatar,
                        url: "https://comgeracao.com.br",
                        worksFor: {
                            "@type": "Organization",
                            name: "Adorai Curitiba",
                        },
                    })),
                }),
            }}
        />
    )
}

import Script from "next/script"

export const members = [
    {
        name: 'Moises Rocha',
        role: 'Moises Rocha ',
        avatar: '/pregadores/Moises-rocha.avif',
    },
    {
        name: 'carlo Acutis',
        role: 'Santo dev',
        avatar: '/S-Carlo.png',
    },
    {
        name: 'Santa Terezinha',
        role: 'Missionaria enclausurada',
        avatar: '/S-Terezinha.png',
    },
    {
        name: 'Santa faustina',
        role: 'Receba a misericordia',
        avatar: '/S-Faustina.png',
    },
    {
        name: 'São Jõao Paulo II',
        role: 'Papa da Juventude',
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

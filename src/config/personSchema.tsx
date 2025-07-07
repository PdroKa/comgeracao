import Script from "next/script"

export const members = [
    {
        name: 'Moisés Rocha',
        role: 'Fundador da Comunidade Filhos de João Batista',
        avatar: '/pregadores/Moises.avif',
    },
    {
        name: 'Eduardo Oliveira',
        role: 'Missionário Com. Filhos de João Batista',
        avatar: '/pregadores/Eduardo.avif',
    },
    {
        name: 'Padre Ailton',
        role: 'Fundador da Fraternidade São João Paulo II',
        avatar: '/pregadores/Ailton.avif',
    },
    {
        name: 'Gill Motta',
        role: 'Fundador da Comunidade Metanoia',
        avatar: '/pregadores/Gill (1).avif',
    },
    {
        name: 'Willian Bernardo',
        role: 'Fundador da Comunidade Geração de Adoradores',
        avatar: '/pregadores/Will.avif',
    },
    {
        name: 'Padre Fernando',
        role: 'Diretor espiritual da Com. Geração de Adoradores',
        avatar: '/pregadores/Fernando.avif',
    },
    {
        name: 'Padre Clayton Munhoz',
        role: 'Assessor do Setor Juventude',
        avatar: '/pregadores/Clayton.avif'
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

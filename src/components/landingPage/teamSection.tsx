import Image from "next/image"

const members = [
    {
        name: 'Padre Pio',
        role: 'Padre Mistico',
        avatar: '/S-Padre-Pio.png',
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

export function TeamSection() {
    return (
        <section id="team" className="py-12 md:py-32 scroll-mt-20">
            <div className="mx-auto max-w-6xl px-8  lg:py-4 lg:px-6 flex flex-col">
                <h2 className="mb-8 text-3xl font-bold md:mb-16 lg:text-5xl">Participação</h2>

                <div>
                    <div className="grid grid-cols-2 gap-4 py-6 md:grid-cols-4">
                        {members.map((member, index) => (
                            <div key={index} className="flex flex-col items-center md:items-start">
                                <div className="size-40 rounded-full overflow-hidden border p-0.5 bg-background shadow shadow-zinc-950/5">
                                    <Image
                                        className="w-full h-full object-cover object-top"
                                        src={member.avatar}
                                        width={500}
                                        height={500}
                                        alt={member.name}
                                        loading="lazy"
                                    />
                                </div>
                                <span className="mt-2 block text-sm">{member.name}</span>
                                <span className="text-muted-foreground block text-xs">{member.role}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
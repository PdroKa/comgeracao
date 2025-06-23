import { members, TeamSchema } from "@/config/personSchema"
import Image from "next/image"

export function TeamSection() {
    return (
        <section
            id="line-up"
            className="py-12 md:py-32 scroll-mt-16"
            aria-labelledby="team-heading"
        >
            <TeamSchema />
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
                <h2
                    id="team-heading"
                    className="font-open mb-8 text-center text-3xl font-bold md:mb-16 lg:text-5xl"
                >
                    LINE-UP
                </h2>

                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
                    {members.map((member) => (
                        <div
                            key={member.name}
                            className="flex flex-col items-center text-center md:items-start md:text-left"
                        >
                            <div className="size-32 sm:size-40 rounded-full overflow-hidden border border-muted shadow-md">
                                <Image
                                    src={member.avatar}
                                    width={250}
                                    height={250}
                                    alt={`Foto de ${member.name}`}
                                    className="w-full h-full object-cover hover:scale-110 transition-transform"
                                    loading="lazy"
                                />
                            </div>
                            <span className="mt-3 block text-base font-medium">{member.name}</span>
                            <span className="text-muted-foreground block text-xs sm:text-sm">{member.role}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
type SiteConfig = {
    name: string
    title: string
    description: string
    url: string
    ogImage: string
    links: {
        instagram?: string
        whatsapp?: string
        facebook?: string
        youtube?: string
        suporte?: string
    }
    keywords?: string[]
}

export const siteConfig: SiteConfig = {
    name: 'Com Geração',
    title: 'Adorai Curitiba 2025 | 12 de Outubro',
    description: 'Retiro de 2 dias com momentos de adoração, oração e unidade. Garanta seu ingresso na pré-venda e viva essa experiência única com Deus.',
    url: 'https://comgeracao.com.br/adoraicuritiba',
    ogImage: 'https://comgeracao.com.br/og-image.avif',
    links: {
        instagram: "https://instagram.com/adoraicuritiba",
        whatsapp: "https://wa.me/5541999999999",
        facebook: "https://facebook.com/adorai.curitiba",
        youtube: "https://youtube.com/@adorai.curitiba",
        suporte: "https://wa.me/5541999999999"
    },
    keywords: [
        "Adorai",
        "Adorai Curitiba",
        "Retiro espiritual",
        "Retiro católico",
        "Adoração",
        "Evento Curitiba",
        "Adoradores",
        "12 de Outubro",
        "Verdadeiros adoradores",
        "Jovens adoradores",
    ],
}
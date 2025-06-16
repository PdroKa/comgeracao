type Princing = {
    titleIngresso: string
    lote: string
    preco: {
        incluso: string
        reais: string
    }
    badge?: string
    bonus?: string[]
    beneficios: string[]
}

export const DataPrincing: Princing = {
    titleIngresso: "Ingresso Adorai Curitiba",
    lote: "Lote de pré-venda — Vagas limitadas",
    preco: {
        incluso: 'INGRESSO INDIVIDUAL',
        reais: '168'
    },
    badge: "🎁 Pré-Adorai no Hard Rock para os 200 primeiros",
    bonus: [
        "🎁 Bônus:  Camiseta oficial — 'Verdadeiros Adoradores'",
        "🎁 Bônus:  Ebook digital exclusivo — 'Pentecostes'",
        "🎁 200 Primeiros:  Pré Adorai no HARD-ROCK CAFÉ",
    ],
    beneficios: [
        'Ingresso para os 2 dias',
        'Pregações e ministrações impactantes',
        'Espaço de adoração',
    ],
}

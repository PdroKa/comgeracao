type Princing = {
    titleIngresso: string
    lote: string
    preco: {
        incluso: string
        reais: string | number
    }
    badge?: string
    bonus?: string[]
    beneficios: string[]
}

export const DataPrincing: Princing = {
    titleIngresso: "Ingresso Adorai Curitiba",
    lote: "Lote de pré-venda — Vagas limitadas",
    preco: {
        incluso: 'INGRESSO INDIVIDUAL - PAGAMENTO EM ATÉ 12x',
        reais: '148'
    },
    badge: "🎁 Pré-Adorai no Hard Rock para os 200 primeiros",
    bonus: [
        "🎁 200 Primeiros:  Pré Adorai no HARD-ROCK CAFÉ",
        "🎁 Bônus:  Camiseta oficial",
        "🎁 Bônus:  Ebook digital exclusivo",
    ],
    beneficios: [
        'Ingresso para os 2 dias',
        'Pregações e ministrações impactantes',
        'Espaço de adoração',
    ],
}

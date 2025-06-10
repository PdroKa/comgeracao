type Princing = {
    title: string
    lote: string
    preco: {
        incluso: string
        reais: string
    }
    badge?: string
    bonus?: string
    beneficios: string[]
}

export const DataPrincing: Princing = {
    title: "Ingresso Adorai Curitiba",
    lote: "Lote de pré-venda — Vagas limitadas",
    preco: {
        incluso: 'INGRESSO INDIVIDUAL',
        reais: '168'
    },
    badge: "🎁 Pré-Adorai no Hard Rock para os 200 primeiros",
    bonus: "Acesso ao Pré-Adorai no Hard Rock (para os 200 primeiros)",
    beneficios: [
        "Ingresso para os 2 dias",
        "Camiseta oficial — 'Verdadeiros Adoradores'",
        "Ebook digital exclusivo — 'Pentecostes'",
        "Pregações e ministrações impactantes",
        "Espaço de adoração",
        "🎁 Bônus: Acesso ao Pré-Adorai no Hard Rock (para os 200 primeiros)",
    ],
}

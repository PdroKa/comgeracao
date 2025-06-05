type Princing = {
    title: string
    lote: string
    preco: {
        incluso: string
        reais: number
    }
    badge?: string
    bonus?: string
    beneficios: string[]
}

export const DataPrincing: Princing = {
    title: "Ingresso Adorai Curitiba",
    lote: "Lote de pré-venda — Vagas limitadas",
    preco: {
        incluso: 'Valor por pessoa — inclui camiseta + ebook',
        reais: 150
    },
    badge: "🎁 Pré-Adorai no Hard Rock para os 200 primeiros",
    bonus: "Acesso ao Pré-Adorai no Hard Rock (para os 200 primeiros)",
    beneficios: [
        "Ingresso para os 2 dias do retiro",
        "Camiseta oficial — 'Verdadeiros Adoradores'",
        "Ebook digital exclusivo — 'Pentecostes'",
        "Santa missa nos 2 dias",
        "Pregações e ministrações impactantes",
        "Espaço de adoração",
        "🎁 Bônus: Acesso ao Pré-Adorai no Hard Rock (para os 200 primeiros)",
    ],
}

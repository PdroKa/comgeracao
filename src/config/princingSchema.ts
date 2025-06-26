type Princing = {
    titleIngresso: string
    lote: string
    preco: {
        incluso: string
        total: string | number
        parcelado: string | number
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
        total: '158,88',
        parcelado: '13,24'
    },
    badge: "🎁 Pré-Adorai no Hard Rock para os 200 primeiros",
    bonus: [
        "🎁 200 Primeiros:  Pré Adorai no HARD-ROCK CAFÉ",
        "🎁 Bônus:  Camiseta oficial",
        "🎁 Bônus:  Entrada antecipada no dia 12",
        "🎁 Bônus:  Ebook digital exclusivo",
    ],
    beneficios: [
        'Acesso completo aos dois dias de retiro',
        'Pulseira de identificação estilizada do evento',
        'Momento de Consagração A Nossa Senhora',
        'Pregações e ministrações impactantes',
        'Espaço de adoração',
    ],
}

type Princing = {
    titleIngresso: string
    lote: string
    preco: {
        incluso: string
        total: string | number
        parcelado: any
    }
    badge?: string
    bonus?: string[]
    beneficios: string[]
}

export const DataPrincing: Princing = {
    titleIngresso: "Ingresso Adorai Curitiba",
    lote: "1° Lote",
    preco: {
        incluso: 'INGRESSO INDIVIDUAL',
        total: '119,90',
        parcelado: '13,28'
    },
    badge: "🎁 Pré-Adorai no Hard Rock para os 100 primeiros",
    bonus: [
        //"🎁 100 Primeiros:  Pré Adorai no HARD-ROCK CAFÉ",
       // "🎁 Bônus:  Camiseta oficial",
        //"🎁 Bônus:  Pulseira em tecido personalizada do evento",
        //"🎁 Bônus:  Ebook digital exclusivo",
    ],
    beneficios: [
        'Acesso completo aos dois dias de evento',
        'Pulseira de identificação estilizada do evento',
        'Momento de Consagração A Nossa Senhora',
        'Pregações e ministrações impactantes',
        'Tenda Profética',
    ],
}

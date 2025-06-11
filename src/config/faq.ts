type FaqItems = {
    id: string
    pergunta: string
    resposta: string | string[]

}

export const faqItems: FaqItems[] = [

    {
        id: '1',
        pergunta: 'O QUE O MEU INGRESSO INCLUI?',
        resposta: 'O seu ingresso te dá direito a uma entrada individual ao Adorai Curitiba 2025, para os dois dias de evento.',
    },
    {
        id: '2',
        pergunta: 'QUANDO E ONDE O EVENTO SERÁ REALIZADO?',
        resposta:
            `Serão dois dias de evento: 11/10 (00h às 00h) e 12/10 (00h às 00h).
            Endereço: R. Prof. Joaquim de Matos Barreto, 98 - São Lourenço, Curitiba - PR.`
    },
    {
        id: '3',
        pergunta: 'COMO VAI FUNCIONAR?',
        resposta:
            `Serão 2 dias intensos com Santa Missa, Adoração, teatro e 99 pregações por dia. Espero ver você participando de todos esses momentos!
Em breve traremos mais informações. Fique ligado no nosso Instagram: @comgeracao `
    },
    {
        id: '4',
        pergunta: 'Posso transferir minha inscrição para outra pessoa?',
        resposta:
            'Sim! É possível transferir sua inscrição, mas você deve comunicar nossa equipe com no mínimo 7 dias de antecedência do evento.',
    },
    {
        id: '5',
        pergunta: 'E se eu não puder comparecer? Tenho reembolso?',
        resposta:
            'Não realizamos reembolso, pois sua inscrição garante toda a preparação antecipada do evento. Porém, ela é transferível para outra pessoa.',
    },
]
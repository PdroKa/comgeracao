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
            `Serão dois dias de evento: 11/10 (14h às 21h30) e 12/10 (07h às 19h).
            Endereço: R. Prof. Joaquim de Matos Barreto, 98 - São Lourenço, Curitiba - PR.`
    },
    {
        id: '3',
        pergunta: 'COMO VAI FUNCIONAR?',
        resposta:
            `Serão 2 dias intensos com Santa Missa, Adoração, teatro e pregações. Espero ver você participando de todos esses momentos!
Em breve traremos mais informações. Fique ligado no nosso Instagram: @comgeracao `
    },
    {
        id: '4',
        pergunta: 'Terá Santa Missa?',
        resposta:
            `Sim, haverá Santa Missa em ambos os dias. 
            Sábado: 16h00 
            Domingo: 8h00`,
    },
    {
        id: '5',
        pergunta: 'Minha alimentação está inclusa?',
        resposta:
            `A alimentação não está inclusa, sendo de responsabilidade de cada participante. 
            Mas fique tranquilo(a), teremos food trucks no local com várias opções para você se alimentar bem durante o evento`,
    },
    {
        id: '6',
        pergunta: 'Comprei meu ingresso no ano passado. Posso ir nos dois dias?',
        resposta:
            `Simmm! Pode ficar tranquilo(a), quem comprou o ingresso no Adorai 2024 tá garantido pros dois dias. Te espero lá, hein? 😄🙌`,
    },
    {
        id: '7',
        pergunta: 'E se eu não puder comparecer? Tenho reembolso?',
        resposta:
            `Prazo para Solicitação de Reembolso, O participante poderá solicitar o reembolso do valor do ingresso até 7 dias após a compra.
        Para solicitar o reembolso, o participante deverá enviar um e-mail para eventos@comunidadegeracao.com.br`,
    },    
    {
        id: '8',
        pergunta: 'Posso transferir minha inscrição para outra pessoa?',
        resposta:
            'Sim! É possível transferir sua inscrição, mas você deve comunicar nossa equipe com no mínimo 7 dias de antecedência do evento.',
    },
]
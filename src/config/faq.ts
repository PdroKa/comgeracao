type FaqItems = {
    id: string
    pergunta: string
    resposta: string | string[]

}

export const faqItems: FaqItems[] = [

    {
        id: '1',
        pergunta: 'O QUE O MEU INGRESSO INCLUI?',
        resposta: 'O ingresso lhe dá o direito à entrada individual ao Adorai Curitiba 2025, para os 2 dias do evento.',
    },
    {
        id: '2',
        pergunta: 'QUANDO E ONDE O EVENTO SERÁ REALIZADO?',
        resposta:
            `Serão dois dias de evento: 11/10 (15h às 21h30) e 12/10 (08h às 19:30h).
            Endereço: R. Prof. Joaquim de Matos Barreto, 98 - São Lourenço, Curitiba - PR.`
    },
    {
        id: '3',
        pergunta: 'COMO VAI FUNCIONAR?',
        resposta:
            `Serão 2 dias intensos com Santa Missa, Adoração, teatro e pregações. Espero ver você participando de todos esses momentos!
Em breve traremos mais informações. Fique ligado no nosso Instagram: @adoraicuritiba `
    },
    {
        id: '4',
        pergunta: 'Terá Santa Missa?',
        resposta:
            `Sim, haverá Santa Missa em ambos os dias. 
            Sábado: 16h
            Domingo: 17h`,
    },
    {
        id: '5',
        pergunta: 'Minha alimentação está inclusa?',
        resposta:
            ` A alimentação não está inclusa, sendo de responsabilidade de cada participante.
Mas fique tranquilo(a)! Teremos food trucks no local com diversas opções, além de restaurantes próximos para você se alimentar bem durante o evento.`,
    },
    {
        id: '6',
        pergunta: 'Comprei meu ingresso no ano passado. Posso ir nos dois dias?',
        resposta:
            `Simmm! Pode ficar tranquilo(a), quem comprou o ingresso no Adorai 2024 tá garantido pros dois dias. Te espero lá, hein? 😄🙌`,
    },
    {
        id: '9',
        pergunta: 'Terá estacionamento no local?',
        resposta:
            `Sim! Teremos estacionamento disponível no local do evento. A compra da vaga deve ser feita antecipadamente pelo nosso site, no momento da inscrição. As vagas são limitadas, então garanta a sua o quanto antes`,
    },
    {
        id: '7',
        pergunta: 'E se eu não puder comparecer? Tenho reembolso?',
        resposta:
            `Prazo para Solicitação de Reembolso, O participante poderá solicitar o reembolso do valor do ingresso até 7 dias após a compra.
        Para solicitar o reembolso, o participante deverá enviar uma mensagem para (41) 99930-1105`,
    },
    {
        id: '8',
        pergunta: 'Posso transferir minha inscrição para outra pessoa?',
        resposta:
            'Sim! É possível transferir sua inscrição, mas você deve comunicar nossa equipe com no mínimo 7 dias de antecedência do evento.',
    },
]
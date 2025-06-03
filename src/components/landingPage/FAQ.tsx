import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { faqItems } from '@/config/faq'
import Link from 'next/link'

export function FAQ() {
  return (
    <section id='faq' className="py-16 md:py-24" aria-labelledby="faq-title">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <header className="mx-auto max-w-xl text-center">
          <h2
            id="faq-title"
            className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl"
          >
            Perguntas Frequentes — Adorai Curitiba
          </h2>
          <p className="text-muted-foreground mt-4 text-balance">
            Encontre respostas rápidas sobre o retiro, inscrições, benefícios da pré-venda e o Pré-Adorai no Hard Rock.
          </p>
        </header>

        <div className="mx-auto mt-12 max-w-xl text-black">
          <Accordion
            type="single"
            collapsible
            className="bg-card w-full rounded-2xl border px-8 py-3 shadow-sm"
          >
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-dashed"
              >
                <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                  {item.pergunta}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-base">{item.resposta}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="text-muted-foreground mt-6 px-8 text-center">
            Não encontrou sua resposta? Fale com nossa equipe pelo{' '}
            <Link
              href="#suporte"
              className="text-primary font-medium hover:underline"
            >
              nosso suporte
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
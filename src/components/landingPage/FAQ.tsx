import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { faqItems } from '@/config/faq'
import Link from 'next/link'

export function FAQ() {
  return (
    <section
      id="faq"
      className="py-16 md:py-24 scroll-mt-24"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* 🔥 Header SEO + acessível */}
        <header className="mx-auto max-w-2xl text-center">
          <h2
            id="faq-heading"
            className="text-balance text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground"
          >
            <span className="text-primary">PERGUNTAS </span>
             & RESPOSTAS
          </h2>
        </header>

        {/* 🔥 Accordion */}
        <div className="mx-auto mt-12 max-w-4xl">
          <Accordion
            type="single"
            collapsible
            className="bg-card w-full rounded-xl border border-border shadow-sm"
          >
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
              >
                <AccordionTrigger className="rounded-none px-6 py-4 cursor-pointer 
                border border-background text-base font-semibold text-accent-foreground hover:no-underline">
                  {item.pergunta}
                </AccordionTrigger>
                <AccordionContent className='p-0'>
                  <p className="bg-background text-base text-secondary px-6 py-4">{item.resposta}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* 🔥 Suporte */}
          <p className="text-muted-foreground mt-8 px-6 text-center text-sm">
            Não encontrou sua resposta? Fale diretamente com nossa equipe pelo{' '}
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
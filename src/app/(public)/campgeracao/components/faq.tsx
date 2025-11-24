import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
}
  from '@/components/ui/accordion'
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
        <header className="mx-auto max-w-2xl text-start sm:text-center">
          <h2
            id="faq-heading"
            className="text-balance text-2xl sm:text-4xl lg:text-5xl font-extrabold text-foreground"
          >PERGUNTAS &
            <span className={`font-open text-primary`}> RESPOSTAS</span>

          </h2>
        </header>

        {/* 🔥 Accordion */}
        <div className="mx-auto mt-12 max-w-4xl">
          <Accordion
            type="single"
            collapsible
            className=" w-full shadow-sm"
          >
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className='rounded-md mb-1'
              >
                <AccordionTrigger className="px-6 py-4 cursor-pointer  
                sm:text-base border-b-2 font-semibold bg-card text-accent-foreground hover:no-underline">
                  {item.pergunta.toUpperCase()}
                </AccordionTrigger>

                <AccordionContent className='p-0 whitespace-pre-line' >
                  <p className="bg-zinc-700 text-sm sm:text-base text-card rounded-md px-6 py-4 border">
                    {item.resposta}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* FOOTER  */}
          <p className="text-muted-foreground mt-8 px-6 text-center text-sm">
            Não encontrou sua resposta? Fale diretamente com nossa equipe pelo{' '}
            <Link
              href="https://api.whatsapp.com/send/?phone=%2B554199301105&text=%20Oi%20gera%C3%A7%C3%A3o%2C%20Tudo%20bem%3F%0AGostaria%20de%20tirar%20uma%20duvida&type=phone_number&app_absent=0"
              className="text-primary font-medium hover:underline"
              target="_blank"
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
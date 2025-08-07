import { navigationItems } from '@/config/nativation'
import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineWhatsapp } from "react-icons/md";
import { LuInstagram, LuMapPin } from "react-icons/lu";


export function FooterAdoraiCwb() {
    return (
        <footer className="py-16 md:py-32 scroll-mt-24">
            <div className="mx-auto max-w-4xl px-6">
                {/* LOGO */}
                <a className="mx-auto block size-fit" href="#inicio" aria-label="Ir para o topo da página">
                    <Image width={65} height={65} src="/Logo-remove-240.png" alt="Logo, Adorai Curitiba" loading='lazy' />
                </a>

                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                    {navigationItems.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className="text-muted-foreground hover:text-primary block duration-150">
                            <span>{link.title}</span>
                        </a>
                    ))}
                </div>
                <div className="my-8 flex  flex-wrap justify-center gap-6 text-sm">
                    <Link
                        href="https://api.whatsapp.com/send/?phone=%2B554188917845&text=Bom%20dia%20gera%C3%A7%C3%A3o%2C%20Tudo%20bem%3F%0AGostaria%20de%20tirar%20uma%20duvida&type=phone_number&app_absent=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                        className="text-muted-foreground hover:text-primary block">
                        <MdOutlineWhatsapp size={24} />
                    </Link>
                    <Link
                        href="https://www.instagram.com/adoraicuritiba/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="text-muted-foreground hover:text-primary block">
                        <LuInstagram size={24} />
                    </Link>
                    <Link
                        href="https://maps.app.goo.gl/koNzpWuN6nk8UD1t9"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GoogleMaps"
                        className="text-muted-foreground hover:text-primary block">
                        <LuMapPin size={24} />
                    </Link>
                </div>
                <span className="text-muted-foreground block text-center text-sm">
                     © {new Date().getFullYear()} Geração de Adoradores. Uma missão da Comunidade Católica para formar adoradores em espírito e verdade.
                </span>
            </div>
        </footer>
    )
}
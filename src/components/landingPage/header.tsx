import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { navigationItems } from "@/config/nativation";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
    return (
        <header className="sticky top-0 z-50 bg-header backdrop-blur-md w-full py-3 sm:py-2 px-4 sm:px-6 lg:px-8">
            <nav
                className="max-w-6xl mx-auto flex items-center justify-between py-4"
                aria-label="Navegação principal"
            >
                {/* Menu Desktop */}
                <ul className="hidden md:flex gap-4 items-center">

                    {navigationItems.map((link, index) => (
                        link.title === 'Ingresso' ? null : (

                            <li key={index} >
                                <a href={link.href} className="text-sm font-medium hover:text-primary transition">
                                    {link.title}
                                </a>
                            </li>
                        )
                    ))}
                </ul>

                {/* Logo centralizada */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <a href="#inicio" aria-label="Ir para o topo da página">
                        <Image width={70} height={70} src="/Logo-remove-240.png" alt="Logo, Adorai Curitiba" priority />
                    </a>
                </div>

                {/* Botão Desktop */}
                <div className="hidden md:flex items-center gap-4">
                    <Link href="#princing">
                        <Button variant="ghost" className="text-sm font-medium hover:text-primary">
                            Ingresso
                        </Button>
                    </Link>
                </div>

                {/* Menu Mobile */}
                <div className="md:hidden flex items-center">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" aria-label="Abrir menu">
                                <Menu className="w-6 h-6" />
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="end" className="w-48">
                            {navigationItems.map((link, index) => (
                                <DropdownMenuItem key={index} asChild>
                                    <a href={link.href}>{link.title}</a>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </nav>
        </header >
    )
}
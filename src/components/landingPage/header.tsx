import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";

export function Header() {
    return (
        <header className="sticky top-0 z-50 bg-header backdrop-blur-md w-full py-2 sm:py-3 sm:px-6">
            <nav
                className="mx-auto flex items-center justify-between py-4 max-w-4xl"
                aria-label="Navegação principal"
            >
                {/* Menu Desktop */}
                <ul className="hidden md:flex gap-4 items-center">
                   
                </ul>

                {/* Logo centralizada */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <a href="#inicio" aria-label="Ir para o topo da página">
                        <Image width={65} height={65} src={'@/public/logo.png'} alt="Logo, Adorai Curitiba" priority
                        />
                    </a>
                </div>

                {/* Botão Desktop */}
                <div className="hidden md:flex">
                    <a href="#princing">
                        <Button variant="ghost" className="text-sm font-medium hover:text-primary px-0">
                            PARTICIPAR
                        </Button>
                    </a>
                </div>

                {/* Menu Mobile */}
                <div className="md:hidden flex items-center">
                    <DropdownMenu >
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" aria-label="Abrir menu">
                                <Menu width={50} height={50} />
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="end" className="w-48">
                            {/* {navigationItems.map((link, index) => (
                                <DropdownMenuItem key={index} asChild>
                                    <a href={link.href}>{link.title}</a>
                                </DropdownMenuItem>
                            ))} */}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </nav>
        </header >
    )
}
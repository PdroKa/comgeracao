import Image from "next/image";
import { Button } from "../ui/button";
import { Facebook, Instagram, MapPin } from "lucide-react";

export function Header() {
    return (
        <header className="sticky top-0 z-50 bg-black/70 backdrop-blur-md w-full px-4 sm:px-6 lg:px-8">
            <nav className="max-w-7xl mx-auto flex flex-col items-center justify-between py-6 sm:flex-row">
                <ul className="flex items-center gap-4">
                    <li>
                        <a href="#"><Instagram /></a>
                    </li>
                    <li>
                        <a href="#"><Facebook /></a>
                    </li>
                    <li>
                        <a href="#"><MapPin /></a>
                    </li>
                </ul>
                <div className="flex justify-center flex-1">
                    <a href="#">
                        <Image
                            src="/Logo-UpserScale.png"
                            alt="Adorai Curitiba Logo"
                            width="100"
                            height="100"
                        />
                    </a>
                </div>
                <div className="flex items-center gap-4">
                        <Button link="#ingresso" variant="ghost">
                            Ingresso
                        </Button>
                </div>
            </nav>
        </header>
    )
}
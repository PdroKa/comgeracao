import Image from "next/image";
import { Button } from "../ui/button";

export function Header() {
    return (
        <div className="sticky top-0 z-50 bg-black/70 backdrop-blur-md w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex items-center justify-between py-6">
                <div className="flex items-center gap-4">
                    <a className="text-white" href="#INICIO">Inicio</a>
                    <a className="text-white" href="#Local">Lugar</a>
                    <a className="text-white" href="#FAQ">FAQ</a>
                </div>
                <div className="flex justify-center flex-1">
                    <a href="#/">
                        <Image
                            src="/Logo-UpserScale.png"
                            alt="Adorai Curitiba Logo"
                            width="100"
                            height="45"
                        />
                    </a>
                </div>
                <div className="flex items-center gap-4">
                    <a className="text-white" href="#Suporte">Suporte</a>
                    <button className="bg-yellow-500 px-4 py-2 rounded">Ingresso</button>
                </div>
            </div>
        </div>
    )
}
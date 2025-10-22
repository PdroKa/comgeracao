export default function CardapioPage() {
    return (
        <main className="flex justify-center items-center h-screen">
            <iframe
                src="/cardapio.pdf"
                className="w-full h-screen shadow-lg"
                title="Cardápio do Evento"
            ></iframe>
        </main>
        )
}
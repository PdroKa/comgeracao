export function HeroCamp() {
    return (
        <main className="h-screen relative flex flex-col justify-center items-center text-center px-4">
            {/* VIDEO BACKGROUND */}
            <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                poster="/pictures/acampaIA.jpg"
            >
                <source src="/videos/hero-acampa-completo-AI.webm" type="video/webm" />
                <source src="/videos/hero-acampa-completo-AI.mp4" type="video/mp4" />
            </video>
            {/* OVERLAYS */}
            <div className="absolute inset-0  from-white/0 to-background z-[1]" />
            <div className="absolute inset-0 bg-black/40 z-[1]" />

            {/* CONTEUDO HERO */}
            <header className="absolute z-20 top-7">
                <img src="/pictures/logo-acampa-removebg.png" alt="" className="w-40"/>
            </header>

            <section className="relative z-20  flex flex-col justify-center items-center text-center px-4">
                <h1 className="text-4xl md:text-5xl max-w-3xl leading-[150%]">
                    O ACAMPAMENTO QUE{" "}
                    <span className="text-primary bg-white px-1">TRANSFORMA</span>{" "}
                    {" "}VIDAS
                </h1>

                <p className="mt-4">06-08 I MARÇO I 2026</p>
                <a
                    href="#"
                    className="mt-6 bg-primary text-white px-6 py-3 rounded font-semibold text-lg hover:scale-105 hover:bg-primary/80 transition"
                >
                    FAÇA SUA INSCRIÇÃO AGORA
                </a>
            </section>
        </main>
    )
}
import { cn } from "@/lib/utils"

export function Map({ url = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.4485533993334!2d-49.2683135!3d-25.389791799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce6c0a136f773%3A0x6c0eddc6553d1aec!2sCol%C3%A9gio%20Marista%20Santa%20Maria!5e0!3m2!1sen!2sbr!4v1748520663330!5m2!1sen!2sbr", className }:
    {
        url?: string,
        className?: string,
        variant?: {}

    }) {
    return (
        <iframe
            id="local"
            className={cn(`w-full h-96 opacity-70 hover:opacity-80 transition-opacity scroll-mt-20`, className)}
            src={url}
            loading="lazy"
        >
        </iframe>
    )
}
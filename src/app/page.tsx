import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen max-w-7xl mx-auto items-center">
      <a href="/adoraicuritiba">
        <Image
          src="/Logo-UpserScale.png"
          alt="Adorai Curitiba Logo"
          width="100"
          height="45"
        />
      </a>
    </div>
  );
}

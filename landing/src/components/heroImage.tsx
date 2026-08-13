import Image from "next/image";

const HeroImage = () => {
    return (
        <Image
            src="/image/personajehero.svg"
            alt="QONTROL Hero Background"
            fill
            priority // 👈 Carga inmediata para el LCP
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.25]"
        />
    );
};

export default HeroImage;
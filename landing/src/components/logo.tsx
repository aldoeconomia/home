import Image from "next/image";

export const Logo1 = () => (
    <Image
        src="/icon/logo.svg"
        width={120} // Ajusta el ancho al tamaño deseado
        height={40}  // Ajusta la altura al tamaño deseado
        alt="Logo"
        priority
    />
);
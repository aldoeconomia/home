import Image from "next/image";

export const Logo1 = () => (
    <Image
        src="/icon/logo.svg"
        width={250} // Ajusta el ancho al tamaño deseado
        height={50}  // Ajusta la altura al tamaño deseado
        alt="Logo"
        priority
    />
);
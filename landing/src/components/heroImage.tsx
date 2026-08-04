import Image from "next/image";

const HeroImage = () => {
    return (
        <img
            src="/image/personajehero.svg"
            alt="hero image"
            className="h-full w-full object-cover object-center filter brightness-[0.25]"
        />
    );
};

export default HeroImage;
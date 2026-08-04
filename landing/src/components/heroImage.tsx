import Image from "next/image";

const HeroImage = () => (
  /* Usamos 100vh para que sea exactamente el alto de la pantalla */
  /* fixed o absolute dependiendo de si quieres que se quede quieta al scrollear */
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      overflow: "visible",
        filter: "brightness(25%)",
    }}
  >
    <Image
      src="/image/personajehero.svg"
      alt="hero image"
      fill
      style={{
        objectFit: "cover",
        objectPosition: "center",
      }}
      priority
    />
  </div>
);

export default HeroImage;

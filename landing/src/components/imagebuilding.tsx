"use client";

export function ImageBuilding() {
  return (
    <section
      className="relative w-full h-2/3 bg-cover bg-center bg-no-repeat flex items-center justify-start px-0"
      style={{
        backgroundImage: "url('/image/Personajeencimaedificios.svg')",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-3xl px-8 md:px-24 py-16 text-left">
        <h1 className="text-5xl md:text-7xl var(--font-montserrat) font-bold uppercase tracking-tight text-white leading-tight">
          Controla todo en un solo lugar
        </h1>
        <p className="mt-8 text-lg md:text-xl text-white var(--font-montserrat)">
          Mantén tu operación organizada y lista para escalar.
        </p>
      </div>
    </section>
  );
}

export default ImageBuilding;

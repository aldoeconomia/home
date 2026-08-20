import React from 'react';

const Hero = () => {
    return (
        <section className="relative w-full overflow-hidden bg-back pt-28 pb-16 lg:py-0 lg:min-h-[calc(100vh-5rem)] flex items-center">

            <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 gap-10 lg:gap-8">

                <div className="flex flex-col items-center lg:items-start justify-center w-full lg:w-1/2 text-center lg:text-left z-20">


                    {/* Título Principal */}
                    <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] font-medium tracking-tight text-black">
                        <strong className="font-bold text-brand">Qontrol Forms</strong> es el formulario que todos los negocios necesitan para estar seguros
                    </h1>

                </div>

                {/* Columna Derecha: Imagen */}
                <div className="w-full lg:w-1/2 flex justify-center items-center relative mt-8 lg:mt-0">
                    <div className="relative w-64 sm:w-72 lg:w-80">
                        <img
                            src="/image/qontroapp.png"
                            alt="Qontrol App Preview"
                            className="relative z-10 w-full h-auto drop-shadow-2xl"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
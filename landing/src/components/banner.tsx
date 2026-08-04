import React from 'react';

export default function Banner() {
    return (
        <div className="flex items-center justify-center p-6">
            <div
                className="flex w-105 h-22.5 items-center gap-4  border-2 border-blue bg-blue-back px-4 text-blue font-['Montserrat'] font-bold shadow-sm"
            >
                {/* Circle Container */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center  bg-blue">
                    {/* Icon with 33px height */}
                    <svg
                        className="h-8.25 w-8.25 text-blue-back animate-spin-slow"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                    </svg>
                </div>

                {/* Text Content */}
                <div className="flex flex-col justify-center text-left leading-snug">
          <span className="text-base font-bold text-blue">
            Proceso en curso
          </span>
                    <p className="text-xs font-semibold text-blue">
                        Actualmente nos encontramos desarrollando la nueva versión
                    </p>
                </div>
            </div>
        </div>
    );
}
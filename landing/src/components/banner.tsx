import React from 'react';

export default function Banner() {
    return (
        <div className="hidden md:flex items-center gap-2.5 border border-blue bg-blue-back px-3 py-1.5 text-blue text-xs font-['Montserrat'] font-semibold shadow-sm">
            {/* Circle Container */}
            <div className="flex h-5 w-5 shrink-0 items-center justify-center bg-blue text-blue-back">
                {/* Icon */}
                <svg
                    className="h-3.5 w-3.5 animate-spin-slow"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                </svg>
            </div>

            {/* Text Content */}
            <div className="flex items-center gap-1.5 leading-none">
                <span className="font-bold">Proceso en curso:</span>
                <span className="hidden lg:inline text-[11px] font-medium opacity-90">
                    Desarrollando nueva versión
                </span>
            </div>
        </div>
    );
}
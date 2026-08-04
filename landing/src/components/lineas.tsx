import React from 'react';

interface BarProps {
  orientation: 'horizontal' | 'vertical';
  size: string; // Ejemplo: "100px", "50%", "20rem"
  thickness?: string; // Grosor de la barra
  color?: string; // Clase de color de Tailwind (ej: "bg-black")
  className?: string; // Para posicionamiento extra (top, left, etc.)
}

const DecorativeBar: React.FC<BarProps> = ({
  orientation,
  size,
  thickness = "12px", // Grosor por defecto como el de la imagen
  color = "bg-black",
  className = "",
}) => {
  const isHorizontal = orientation === 'horizontal';

  const style: React.CSSProperties = {
    width: isHorizontal ? size : thickness,
    height: isHorizontal ? thickness : size,
  };

  return (
    <div
      style={style}
      className={`${color} ${className} absolute pointer-events-none`}
      aria-hidden="true"
    />
  );
};

export default DecorativeBar;
export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <p className="pointer-events-none absolute inset-0 flex select-none items-center justify-center font-black text-[40vw] text-black/8 leading-none">
        404
      </p>
      <div className="relative z-10">
        <h1 className="font-medium text-4xl text-brand tracking-tight">
          Página no encontrada
        </h1>
        <p className="mx-auto mt-5 max-w-sm text-lg text-brand">
          Algo salió mal. La página que estás buscando no existe o ha sido movida.
        </p>
        </div>
      </div>
  );
}

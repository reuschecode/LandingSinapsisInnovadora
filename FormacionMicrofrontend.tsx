import { useEffect, useState } from 'react';

export const FormacionMicrofrontend = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  // URL del proyecto de formación desde variable de entorno
  const formacionUrl = import.meta.env.VITE_FORMACION_URL || 'http://localhost:3001';

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-screen relative bg-slate-950">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-blue-500 text-sm font-mono animate-pulse">
            Cargando formación...
          </div>
        </div>
      )}
      <iframe
        src={formacionUrl}
        className="w-full h-full border-none"
        title="Formación IA"
        allow="fullscreen"
        loading="lazy"
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};
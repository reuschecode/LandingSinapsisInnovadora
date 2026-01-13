import { useEffect, useState } from 'react';

export const DoxfMicrofrontend = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  const doxfUrl = import.meta.env.VITE_DOXF_URL || 'http://localhost:3002';

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-screen relative bg-slate-950">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-blue-500 text-sm font-mono animate-pulse">
            Cargando DOXF...
          </div>
        </div>
      )}
      <iframe
        src={doxfUrl}
        className="w-full h-full border-none"
        title="DOXF"
        allow="fullscreen"
        loading="lazy"
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};
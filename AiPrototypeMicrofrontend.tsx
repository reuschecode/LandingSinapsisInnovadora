import { useEffect, useState } from 'react';

export const AiPrototypeMicrofrontend = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  const aiPrototypeUrl = import.meta.env.VITE_AI_PROTOTYPE_URL || 'http://localhost:3003';

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-screen relative bg-slate-950">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-blue-500 text-sm font-mono animate-pulse">
            Cargando AI Prototype...
          </div>
        </div>
      )}
      <iframe
        src={aiPrototypeUrl}
        className="w-full h-full border-none"
        title="AI Prototype"
        allow="fullscreen"
        loading="lazy"
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};
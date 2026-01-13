import { useEffect, useState } from 'react';

export const AiProductSprintMicrofrontend = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  const aiProductSprintUrl = import.meta.env.VITE_AI_PRODUCT_SPRINT_URL || 'http://localhost:3004';

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-screen relative bg-slate-950">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-blue-500 text-sm font-mono animate-pulse">
            Cargando AI Product Sprint...
          </div>
        </div>
      )}
      <iframe
        src={aiProductSprintUrl}
        className="w-full h-full border-none"
        title="AI Product Sprint"
        allow="fullscreen"
        loading="lazy"
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};
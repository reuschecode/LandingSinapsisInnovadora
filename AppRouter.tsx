import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import App from './App';

const FormacionMicrofrontend = lazy(() => 
  import('./FormacionMicrofrontend').then(module => ({ 
    default: module.FormacionMicrofrontend 
  }))
);

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route 
          path="/formacion/*" 
          element={
            <Suspense fallback={
              <div className="flex items-center justify-center h-screen bg-slate-950">
                <div className="text-blue-500 text-sm font-mono animate-pulse">
                  Cargando...
                </div>
              </div>
            }>
              <FormacionMicrofrontend />
            </Suspense>
          } 
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
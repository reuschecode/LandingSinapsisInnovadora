import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import App from "./App";

const FormacionMicrofrontend = lazy(() =>
  import("./FormacionMicrofrontend").then((module) => ({
    default: module.FormacionMicrofrontend,
  }))
);

const DoxfMicrofrontend = lazy(() =>
  import("./DoxfMicrofrontend").then((module) => ({
    default: module.DoxfMicrofrontend,
  }))
);

const AiPrototypeMicrofrontend = lazy(() =>
  import("./AiPrototypeMicrofrontend").then((module) => ({
    default: module.AiPrototypeMicrofrontend,
  }))
);

const AiProductSprintMicrofrontend = lazy(() =>
  import("./AiProductSprintMicrofrontend").then((module) => ({
    default: module.AiProductSprintMicrofrontend,
  }))
);

const LoadingFallback = () => (
  <div className="flex items-center justify-center h-screen bg-slate-950">
    <div className="text-blue-500 text-sm font-mono animate-pulse">
      Cargando...
    </div>
  </div>
);

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/formacion/*"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <FormacionMicrofrontend />
            </Suspense>
          }
        />
        <Route
          path="/dxof/*"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <DoxfMicrofrontend />
            </Suspense>
          }
        />
        <Route
          path="/ai-prototype/*"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <AiPrototypeMicrofrontend />
            </Suspense>
          }
        />
        <Route
          path="/ai-product-sprint/*"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <AiProductSprintMicrofrontend />
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@arcgis/core/assets/esri/themes/dark/main.css';

import './calcite-imports';
import './index.css';

import { MapStateProvider } from './arcgisUtils/MapStateContext';
import { App } from './App';

import { setAssetPath } from '@esri/calcite-components/dist/components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// CDN hosted assets
setAssetPath(window.location.href);

// Create a root element for the application
const root = createRoot(document.querySelector('#root')!);

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});
// Render the application
root.render(
  <StrictMode>
    <MapStateProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </MapStateProvider>
  </StrictMode>
);

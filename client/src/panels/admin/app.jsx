import { HelmetProvider } from 'react-helmet-async';

import './global.css';

import { useScrollToTop } from './hooks/use-scroll-to-top';

import Router from './routes/sections'; // Assumes Router resides inside routes/sections directory
import ThemeProvider from './theme';

// ----------------------------------------------------------------------

export default function AdminPanel() {
  useScrollToTop();

  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </HelmetProvider>
  );
}

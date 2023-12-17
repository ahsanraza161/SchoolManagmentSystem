import { HelmetProvider } from 'react-helmet-async';
import './global.css';
import { useScrollToTop } from './hooks/use-scroll-to-top';

import Router from './routes/sections';
import ThemeProvider from './theme';

// ----------------------------------------------------------------------

export default function AdminPanel({ navConfig }) {
  useScrollToTop();

  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router navConfig={navConfig} />
      </ThemeProvider>
    </HelmetProvider>
  );
}

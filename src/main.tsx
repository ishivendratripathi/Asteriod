import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import PrivacyPolicy from './PrivacyPolicy';
import Stars from './Stars';
import Terms from './Terms';
import NotFound from './NotFound';
import Pricing from './Pricing';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <div className="bg-slate-950 min-h-screen min-w-screen">
          <Nav />
          <Routes>
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/" element={<App />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </React.StrictMode>,
  );
}

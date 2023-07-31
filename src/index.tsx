import React from 'react';
import 'styles/_baseCSS.module.scss';
import ReactDOM from 'react-dom/client';
import RoutesApp from './routes';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import ScrollToTop from 'components/ScrollToTop';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <RecoilRoot>
        <RoutesApp />
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>
);


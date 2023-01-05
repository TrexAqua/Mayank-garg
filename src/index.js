import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import { AnimatePresence } from 'framer-motion';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
]);

root.render(
  <AnimatePresence mode={'wait'}>
    <RouterProvider key={Math.random()} router={router} />
  </AnimatePresence>
);

reportWebVitals();

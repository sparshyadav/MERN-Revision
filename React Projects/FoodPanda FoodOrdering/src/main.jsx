import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


// import React from 'react';
// import ReactDOM from 'react-dom';
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import App from './App';
// import About from './components/About';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />
//   },
//   {
//     path: "/about",
//     element: <About />
//   }
// ]);

// ReactDOM.render(
//   <RouterProvider router={router} />,
//   document.getElementById('root')
// );

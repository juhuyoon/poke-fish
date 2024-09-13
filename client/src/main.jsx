import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home.jsx';
import Food from './components/Food.jsx';
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/food",
        element: <Food />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

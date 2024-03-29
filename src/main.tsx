import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import EditComment from './pages/EditComment';
import Home from './pages/Home';
import My from './pages/My';
import NewComment from './pages/NewComment';
import NotFound from './pages/NotFound';
import ProtectedRoute from './pages/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Home /> },
      { path: '/comments', element: <Home /> },
      { path: '/comments/:title', element: <Home /> },
      {
        path: '/comment/new',
        element: (
          <ProtectedRoute>
            <NewComment />
          </ProtectedRoute>
        ),
      },
      {
        path: '/my',
        element: (
          <ProtectedRoute>
            <My />
          </ProtectedRoute>
        ),
      },
      {
        path: '/my/:id',
        element: (
          <ProtectedRoute>
            <EditComment />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

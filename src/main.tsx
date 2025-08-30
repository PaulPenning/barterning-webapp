import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DashboardPage from './pages/Dashboard'
import InventoryPage from './pages/Inventory'
import ImportPage from './pages/Import'
import RoutesPage from './pages/Routes'
import SettingsPage from './pages/Settings'
import UpgradesPage from './pages/Upgrades'
import ErrorPage from './pages/ErrorPage'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <DashboardPage /> },
        { path: 'inventory', element: <InventoryPage /> },
        { path: 'import', element: <ImportPage /> },
        { path: 'routes', element: <RoutesPage /> },
        { path: 'upgrades', element: <UpgradesPage /> },
        { path: 'settings', element: <SettingsPage /> },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL }
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

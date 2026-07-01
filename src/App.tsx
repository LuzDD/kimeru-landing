import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import Privacidad from './pages/Privacidad'
import Terminos from './pages/Terminos'
import EliminarDatos from './pages/EliminarDatos'
import FloatingWhatsApp from './components/ui/FloatingWhatsApp'
import ScrollToTop from './components/ui/ScrollToTop'

function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
      <FloatingWhatsApp />
    </>
  )
}

const router = createBrowserRouter(
  [
    {
      element: <RootLayout />,
      children: [
        { path: '/',               element: <Home /> },
        { path: '/privacidad',    element: <Privacidad /> },
        { path: '/terminos',      element: <Terminos /> },
        { path: '/eliminar-datos', element: <EliminarDatos /> },
      ],
    },
  ],
  { basename: '/' },
)

export default function App() {
  return <RouterProvider router={router} />
}

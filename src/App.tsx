import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Privacidad from './pages/Privacidad'
import Terminos from './pages/Terminos'
import EliminarDatos from './pages/EliminarDatos'
import FloatingWhatsApp from './components/ui/FloatingWhatsApp'

const router = createBrowserRouter(
  [
    { path: '/',               element: <Home /> },
    { path: '/privacidad',    element: <Privacidad /> },
    { path: '/terminos',      element: <Terminos /> },
    { path: '/eliminar-datos', element: <EliminarDatos /> },
  ],
  { basename: '/kimeru' },
)

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <FloatingWhatsApp />
    </>
  )
}

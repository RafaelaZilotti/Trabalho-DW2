import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './Login.jsx'
import Singup from './Singup.jsx'
import Error from './Error.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
    {
    path: "/",
    element:<Login/>
  },
  {
    path: "/Singup",
    element:<Singup/>
  },
  {
    path: "/GeradorDeLink",
    element:<App/>
  },
  {
    path: "*",
    element:<Error/>
  }
]) //array de rotas, path é o caminho para as rotas

//Nesse projeto estão sendo usados o router, supabase, e configurações padrão do react -(pro projeto rodar é necessario instalar tudo isso)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './Login.jsx'
import Singup from './Singup.jsx'
import Error from './Error.jsx'
import RecuperarSenha from './RecuperarSenha.jsx'
import RedefinirSenha from './RedefinirSenha.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import GeradorDeLink from './App.jsx';

const router = createBrowserRouter([
  { path: "/", element: <Login/> },
  { path: "/Singup", element: <Singup/> },
  { path: "/GeradorDeLink/:id", element: <GeradorDeLink/> }, // rota dinâmica
  { path: "/RecuperarSenha", element: <RecuperarSenha/>},
  { path: "*", element: <Error/> },
  { path: "/RedefinirSenha", element: <RedefinirSenha/>}
]);
 //array de rotas, path é o caminho para as rotas

//Nesse projeto estão sendo usados o router, supabase, biblioteca react-hook-mask, e configurações padrão do react -(pro projeto rodar é necessario instalar tudo isso)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

import {useState} from "react"
import { Navigate, useNavigate } from "react-router-dom"
function Singup(){

  const navigate = useNavigate()
  const [NomeUsuario,setNomeUsuario] = useState("")
  const [EmailUsuario, setEmailUsuario] = useState("")
  const [SenhaUsuario, setSenhaUsuario] = useState("")
   function CriarUsuario(){

    if (NomeUsuario != ""){
      if(EmailUsuario != ""){
        if(SenhaUsuario !=""){
          navigate('/')
        }
      }
    }

   }

    return(
        <>
            <h1>Bem-Vindo ao WhatsHub</h1>
            <p>Crie sua conta...</p>
            <label>Nome</label>
            <input placeholder="Fulano da Silva" type="text" value={NomeUsuario} onChange={(e) => setNomeUsuario(e.target.value)}/>
            <label>Email</label>
            <input placeholder="usuario@gmail.com" type="text" value={EmailUsuario} onChange={(e) => setEmailUsuario(e.target.value)}/>
            <label>Senha</label>
            <input placeholder="senha123" type="text" value={SenhaUsuario} onChange={(e) => setSenhaUsuario(e.target.value)}/>
            <button onClick={CriarUsuario}>Criar</button>
            <p>Já tem uma conta?</p>
            <button>Login</button>
        </>
    )
}
export default Singup
import {useState} from "react"
import { useNavigate } from "react-router-dom"
import { supabase } from './Bd/Supabase'
import './Login.css';

function Singup(){

  const navigate = useNavigate()
  const[NomeUsuario,setNomeUsuario] = useState("")
  const[EmailUsuario,setEmailUsuario]=useState("")
  const[SenhaUsuario,setSenhaUsuario]=useState("")

  function VoltarLogin(){
    navigate("/")
  }
  
async function CriarUsuario() {
  if (NomeUsuario !== "" && EmailUsuario !== "" && SenhaUsuario !== "") {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: EmailUsuario,
        password: SenhaUsuario,
        options: {
          data: {
            display_name: NomeUsuario   
          }
        }
      });

      if (error) {
        alert("Erro ao criar usuário: " + error.message);
        return;
      }

      // Verifica se o usuário foi criado
      if (!data || !data.user) {
        alert("Erro: usuário não criado corretamente!");
        return;
      }


    } catch (err) {
      console.error("Erro inesperado:", err);
      alert("Erro inesperado ao criar usuário!");
    }
  }
}




    return(
      <div className="container">
        <img src="perfil.png" id="imagem" alt="perfil" />
        <div className="boxfundo">
          <h1 id="titulo">Sing Up</h1>
          <p className="subtitulo">Crie sua conta...</p>

          <div className="box">
            <input placeholder="Fulano da Silva" type="text" value={NomeUsuario} onChange={(e)=>setNomeUsuario(e.target.value)} className="boxtext" />
            <input placeholder="fulano@gmail.com" type="text" value={EmailUsuario} onChange={(e)=>setEmailUsuario(e.target.value)} className="boxtext"/>
            <input placeholder="senha123" type="password" value={SenhaUsuario} onChange={(e)=>setSenhaUsuario(e.target.value)} className="boxtext"/>
            <button onClick={CriarUsuario} className="boxbutton">Criar</button>
          </div>
          
        </div>
        <div class="barra"></div>
        <div className="registrar">
          <p className="gray">Já tem uma conta?</p>
          <button onClick={VoltarLogin} className="link2">Login</button>
        </div>
      </div>
    )
}
export default Singup
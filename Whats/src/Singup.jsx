import {useState} from "react"
import { useNavigate } from "react-router-dom"
import { supabase } from './Bd/Supabase'
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
        <>
            <h1>Bem-Vindo ao WhatsHub</h1>
            <p>Crie sua conta...</p>
            <label>Nome</label>
            <input placeholder="Fulano da Silva" type="text" value={NomeUsuario} onChange={(e)=>setNomeUsuario(e.target.value)} />
            <label>Email</label>
            <input placeholder="fulano@gmail.com" type="text" value={EmailUsuario} onChange={(e)=>setEmailUsuario(e.target.value)}/>
            <label>Senha</label>
            <input placeholder="senha123" type="text" value={SenhaUsuario} onChange={(e)=>setSenhaUsuario(e.target.value)}/>
            <button onClick={CriarUsuario}>Criar</button>
            <p>Já tem uma conta?</p>
            <button onClick={VoltarLogin}>Login</button>
        </>
    )
}
export default Singup
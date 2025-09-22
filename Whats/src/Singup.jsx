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
    if (NomeUsuario !== "") {
      if (EmailUsuario !== "") {
        if (SenhaUsuario !== "") {
          try {
            const { data, error } = await supabase
              .from("usuario")
              .insert([
                {
                  nome_usuario: NomeUsuario,
                  senha_usuario: SenhaUsuario,
                  email_do_usuario: EmailUsuario,
                },
              ]);

            console.log(data, error);

            // Se der erro no Supabase, não redireciona
            if (error) {
              alert("Erro ao criar usuário: " + error.message);//dar uma
              return;
            }

            VoltarLogin(); // Redireciona só se inseriu corretamente
          } catch (err) {
            console.error("Erro inesperado:", err);//Melhorar o tratamento de erro depois
            alert("Erro inesperado ao criar usuário!");
          }
        }
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
            <input placeholder="usuario@gmail.com" type="text" value={EmailUsuario} onChange={(e)=>setEmailUsuario(e.target.value)}/>
            <label>Senha</label>
            <input placeholder="senha123" type="text" value={SenhaUsuario} onChange={(e)=>setSenhaUsuario(e.target.value)}/>
            <button onClick={CriarUsuario}>Criar</button>
            <p>Já tem uma conta?</p>
            <button onClick={VoltarLogin}>Login</button>
        </>
    )
}
export default Singup
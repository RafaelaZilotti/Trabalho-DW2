import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from './Bd/Supabase'
function Login(){
    const navigate = useNavigate()
    const[EmailUsuario,setEmailUsuario] = useState("")
    const[SenhaUsuario,setSenhaUsuario] = useState("")

            async function EntrarUsuario(){
                if(EmailUsuario != ""){
                    if(SenhaUsuario !=""){
                        try{
                            const { data, error } = await supabase.auth.signInWithPassword({
            email: EmailUsuario,
            password: SenhaUsuario
        });

        if (error) {
            alert("Erro ao fazer login: " + error.message);//Fazer tratamento de erro
        } else {
            const userId = data.user.id; // pega o ID do usuário logado
            navigate(`/GeradorDeLink/${userId}`);
        }
    } catch (err) {
        console.log(err);
        alert("Erro inesperado");//Arrumar erros 
    }
                        }
                    }
                }
        

    return(
            <>
                <h1>Login</h1>
                <p>Seja bem-vindo de volta! Porfavor faça login em sua conta</p>
                <label>Email</label>
                <input type="text" placeholder="usurario@gmail.com" value={EmailUsuario} onChange={(e)=>setEmailUsuario(e.target.value)}/>
                <label>Senha</label>
                <input type="text" placeholder="senha123" value={SenhaUsuario} onChange={(e)=>setSenhaUsuario(e.target.value)}/>
                <button>esqueceu a senha?</button>
                <button onClick={EntrarUsuario}>Login</button>
                <p>Novo usuário?</p>
                <button onClick={() => navigate("/Singup")}>Singup</button>
            </>
    )
}
export default Login
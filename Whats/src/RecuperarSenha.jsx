import { useState } from "react";
import { supabase } from "./Bd/Supabase";
import { redirect } from "react-router-dom";
import './Login.css'

function RecuperarSenha(){
    const [EmailEsqueceuSenha, setEmailEsqueceuSenha] = useState("")
    const [MensagemTela, setMensagemTela] = useState("Enviaremos um link em seu email para redefinir a senha:")
    const [IdTela, setIdTela] = useState("subtitulo")

    async function NovaSenha(){
        const {error} = await supabase.auth.resetPasswordForEmail(EmailEsqueceuSenha, {redirectTo:"http://localhost:5173/RedefinirSenha"})
        if (error){
            console.log("Error:" + error.message)
            setMensagemTela("Algo deu errado, digite o endereço correto de email:")
        }
        else{
            console.log("Verifique seu email")
            setMensagemTela("Link enviado com sucesso! Verifique em seu email.")
            setIdTela("subtituloverde")
        }
    }

    
    return(
        <div className="container">
            <div className="boxfundo">
                <img src="whatsapp2.png" id="whatsapp2"></img>
                <h1 id="titulo">Recuperar Senha</h1>
                <p className={IdTela}>{MensagemTela}</p>
                <div id="espaco"></div>
                <img src="e-mail.png" id="mail"></img>
                <input className="boxtext2" type="text" placeholder="fulano@gmail.com" value={EmailEsqueceuSenha} onChange={(e)=> setEmailEsqueceuSenha(e.target.value)}/>
                <button onClick={NovaSenha} className="boxbutton">Recuperar</button>
            </div>
        </div>

    )

}
export default RecuperarSenha
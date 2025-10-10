import { useState } from "react";
import { supabase } from "./Bd/Supabase";
import { useNavigate } from "react-router-dom"
import './Login.css';

function RedefinirSenha(){
    const [senhaNova, setSenhaNova] = useState("")
    const [confirmarSenhaNova, setConfirmarSenhaNova] = useState("")
    const [MensagemSenha, setMensagemSenha] = useState("A senha deve ter no mínimo 6 caracteres");
    const navigate = useNavigate();

    async function Redefinir() {

        if(senhaNova != confirmarSenhaNova){
            console.log("As senhas não são iguais" );
            setMensagemSenha("As senhas não são iguais, tente novamente");
            return 
        }
        const { error } = await supabase.auth.updateUser({ password: senhaNova });

        if (error){
            console.log("Error:" + error.message)
        }
        else{
            console.log("Sua senha foi redefinida")
            setMensagemSenha("Senha redefinida com sucesso!")
            navigate("/")
        }

    }

    return(
        <>
            <div className="container">
                <div className="boxfundo">
                    <h1 id="titulo">Redefina sua senha:</h1>
                    <p id="subtitulo">{MensagemSenha}</p>
                    <div className="box">
                        <input placeholder="Nova senha" type="password" value={senhaNova} onChange={(e)=>setSenhaNova(e.target.value)} className="boxtext"></input>
                        <input placeholder="Confirmar nova senha" type="password" value={confirmarSenhaNova} onChange={(e)=>setConfirmarSenhaNova(e.target.value)} className="boxtext"></input>
                        <button onClick={Redefinir} className="boxbutton">Redefinir</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RedefinirSenha
import { useState } from "react";
import { supabase } from "./Bd/Supabase";
import { useNavigate } from "react-router-dom"

function RedefinirSenha(){
    const [senhaNova, setSenhaNova] = useState("")
    const [confirmarSenhaNova, setConfirmarSenhaNova] = useState("")
    const navigate = useNavigate();

    async function Redefinir() {
        if(senhaNova != confirmarSenhaNova){
            console.log("As senhas não são iguais" );
            return
        }
        const { error } = await supabase.auth.updateUser({ password: senhaNova });

        if (error){
            console.log("Error:" + error.message)
        }
        else{
            console.log("Sua senha foi redefinida")
            navigate("/Login")
        }

    }

    return(
        <>
            <h1>Redefina sua senha:</h1>
            <label>Digite sua nova senha</label>
            <input placeholder="Nova senha" type="password" value={senhaNova} onChange={(e)=>setSenhaNova(e.target.value)}></input>
            <label>Confirme sua nova senha</label>
            <input placeholder="Confirmar nova senha" type="password" value={confirmarSenhaNova} onChange={(e)=>setConfirmarSenhaNova(e.target.value)}></input>
            <button onClick={Redefinir}>Redefinir</button>
        </>
    )
}

export default RedefinirSenha
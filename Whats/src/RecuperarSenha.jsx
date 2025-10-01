import { useState } from "react";
import { supabase } from "./Bd/Supabase";
import { redirect } from "react-router-dom";
function RecuperarSenha(){
    const [EmailEsqueceuSenha, setEmailEsqueceuSenha] = useState("")

    async function NovaSenha(){
        const {error} = await supabase.auth.resetPasswordForEmail(EmailEsqueceuSenha, {redirectTo:"http://localhost:5173/RedefinirSenha"})
        if (error){
            console.log("Error:" + error.message)
        }
        else{
            console.log("Verifique seu email")
        }
    }

    
    return(
        <>
            <label >Digite seu email para recuperar:</label>
            <input type="text" placeholder="fulano@gmail.com" value={EmailEsqueceuSenha} onChange={(e)=> setEmailEsqueceuSenha(e.target.value)}/>
            <button onClick={NovaSenha}>Recuperar</button>
        </>
    )

}
export default RecuperarSenha
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login(){
    const navigate = useNavigate()

    return(
            <>
                <h1>Login</h1>
                <p>Seja bem-vindo de volta! Porfavor faça login em sua conta</p>
                <label>Email</label>
                <input type="text" placeholder="usurario@gmail.com"/>
                <label>Senha</label>
                <input type="text" placeholder="senha123"/>
                <button>esqueceu a senha?</button>
                <button>Login</button>
                <p>Novo usuário?</p>
                <button onClick={() => navigate("/Singup")}>Singup</button>
            </>
    )
}
export default Login
import { useState } from "react";




function Login(){
    
    return(
            <>
                <h1>Login</h1>
                <p>Seja bem-vindo de volta! Porfavor faça login em sua conta</p>
                <label>Email</label>
                <input type="text" placeholder="usurario@gmail.com" value={EmailLogin}/>
                <label>Senha</label>
                <input type="text" placeholder="senha123"/>
                <button>esqueceu a senha?</button>
                <button onClick={consultaragendar}>Login</button>
                <p>Novo usuário?</p>
                <button>Singup</button>
            </>
    )
}
export default Login
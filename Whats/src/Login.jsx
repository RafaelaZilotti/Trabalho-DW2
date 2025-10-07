import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./Bd/Supabase";
import './Login.css';



function Login() {
  const navigate = useNavigate();
  const [EmailUsuario, setEmailUsuario] = useState("");
  const [SenhaUsuario, setSenhaUsuario] = useState("");

  async function EntrarUsuario() {
    if (EmailUsuario !== "") {
      if (SenhaUsuario !== "") {
        try {
          const { data, error } = await supabase.auth.signInWithPassword({
            email: EmailUsuario,
            password: SenhaUsuario,
          });

          if (error) {
            alert("Erro ao fazer login: " + error.message);
          } else {
            const userId = data.user.id;
            navigate(`/GeradorDeLink/${userId}`);
          }
        } catch (err) {
          console.log(err);
          alert("Erro inesperado");
        }
      }
    }
  }

  function EsqueceuSenha() {
    navigate(`/RecuperarSenha`);
  }

  return (
    <div className="container">
        <img src="perfil.png" id="imagem" alt="perfil" />
        <div className="boxfundo">
            <h1 id="titulo">Login</h1>
            <p id="subtitulo">
            Seja bem-vindo de volta! Por favor, faça login em sua conta
            </p>
            <div className="box">
                <input
                    className="boxtext"
                    type="text"
                    placeholder="usuario@gmail.com"
                    value={EmailUsuario}
                    onChange={(e) => setEmailUsuario(e.target.value)}
                />
                <input
                    className="boxtext"
                    type="password"
                    placeholder="senha123"
                    value={SenhaUsuario}
                    onChange={(e) => setSenhaUsuario(e.target.value)}
                />
                <button onClick={EsqueceuSenha} className="link">
                    esqueceu a senha?
                </button>
                <button onClick={EntrarUsuario} className="boxbutton">
                    Login
                </button>
            </div>
        </div>
        <div class="barra"></div>
      <div className="registrar">
        <p className="gray">Novo usuário?</p>
        <button onClick={() => navigate("/Singup")} className="link2">Signup</button>
      </div>
    </div>
  );
}

export default Login;

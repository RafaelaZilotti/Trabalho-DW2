import {useState} from "react"
function Singup(){

    const [usuarios, setUsuarios] = useState([]);
    const [contatos, setContatos] = useState([]);

    function AddUsuario() {
    const NovoUsuario = {
      id: contatos.length,
      nome: "Dani"
    };
    setUsuarios([...usuarios, NovoUsuario]);

  }
    return(
        <>
            <h1>Bem-Vindo ao WhatsHub</h1>
            <p>Crie sua conta...</p>
            <label>Nome</label>
            <input placeholder="Fulano da Silva" type="text"/>
            <label>Email</label>
            <input placeholder="usuario@gmail.com" type="text"/>
            <label>Senha</label>
            <input placeholder="senha123" type="text"/>
            <button>Criar</button>
            <p>Já tem uma conta?</p>
            <button>Login</button>
        </>
    )
}
export default Singup
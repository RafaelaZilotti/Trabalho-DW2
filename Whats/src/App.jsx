import { useState } from "react";
import AgendaDeContatos from './components/AgendaDeContatos';
import { useParams } from "react-router-dom";


function App() {

  const [count, setCount] = useState(0);
  const [telefone, setTelefone] = useState("")
  const[mensagem,setMensagem] = useState("")
  const[linkfinal,setLinkfinal] = useState("")

  function Link(){
    if(telefone != ""){
      setLinkfinal(`https://wa.me/55${telefone.replace(/\D/g, "")}?text=${encodeURIComponent(mensagem)}`)
    }
    
  }


  return (
    <>
      <img src="/whatsapp.png" alt="Logo"/>
      <h1>WhatsHub</h1>
      <p>O jeito mais rápido de iniciar conversas no WhatsApp...</p>

      <h2>Gerador de Links</h2>
      <p>Número do Whatsapp</p>
      <img src='/telefone.png' alt="Telefone"/>
      <input type='text' placeholder='(xx)xxxxx-xxxx' value={telefone} onChange={(e) => setTelefone(e.target.value)} />
      
      <p>Mensagem (opcional)</p>
      <input type='text' placeholder='Digite sua mensagem aqui...' value={mensagem} onChange={(e) => setMensagem(e.target.value)}/>
      <button onClick={Link}><img src="/botao_preparar_mensagem.png" alt="Preparar"/></button>
      <p>Link gerado:{linkfinal}</p>
      <p>link</p>
      <button onClick={()=> navigator.clipboard.writeText(linkfinal)}><img src="/copiar.png" alt="Copiar"/></button>
      <button onClick={()=> window.open(linkfinal,"_blank")}><img src="/botao_abrir_whatsapp.png" alt="Abrir WhatsApp" /></button>

      <AgendaDeContatos/>
    </>
  );
}

export default App;

import { useState } from "react";
import AgendaDeContatos from './components/AgendaDeContatos';

function App() {

  const [count, setCount] = useState(0);

  return (
    <>
      <img src="/whatsapp.png" alt="Logo"/>
      <h1>WhatsHub</h1>
      <p>O jeito mais rápido de iniciar conversas no WhatsApp...</p>

      <h2>Gerador de Links</h2>
      <p>Número do Whatsapp</p>
      <img src='/telefone.png' alt="Telefone"/>
      <input type='text' placeholder='(xx)xxxxx-xxxx'/>
      <p>Mensagem (opcional)</p>
      <input type='text' placeholder='Digite sua mensagem aqui...' />
      <button><img src="/botao_preparar_mensagem.png" alt="Preparar"/></button>
      <p>Link gerado:</p>
      <p>link</p>
      <button><img src="/copiar.png" alt="Copiar"/></button>
      <button><img src="/botao_abrir_whatsapp.png" alt="Abrir WhatsApp" /></button>

      <AgendaDeContatos/>
    </>
  );
}

export default App;

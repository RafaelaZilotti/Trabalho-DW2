import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img src="/whatsapp.png" alt="Logo" />
      <h1>Gerador de Links</h1>
      <p>Número do Whatsapp</p>
      <img src='/telefone.png'/>
      <input type='text' placeholder='(xx)xxxxx-xxxx'/>
      <p>Mensagem (opcional)</p>
      <imput type='text' placeholder='Digite sua mensagem aqui...'/>
      <button><img src="/botao_preparar_mensagem.png"/></button>
      <p>Link gerado:</p>
      <p>link</p>
      <button><img src="/copiar.png"/></button>
      <button><img src="/botao_abrir_whatsapp.png" /></button>

      <img src='/usuario.png'/>
      <h2>Agenda de Contatos</h2>
      <p>Nome</p>
      <input placeholder='Nome do contato' type='text'/>
      <p>Número</p>
      <input placeholder='Número' type='text'/>
      <button><img src="usuario.png" /> Salvar na Agenda</button>
      <p>Seus Contatos (x)</p>
    </>
  )
}

export default App

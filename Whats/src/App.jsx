import { useState } from "react";
import AgendaDeContatos from './components/AgendaDeContatos';
import { useParams } from "react-router-dom";
import './components/App.css'

function App() {

  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [linkfinal, setLinkfinal] = useState("");

  function mascaraTelefone(valor) {
    valor = valor.replace(/\D/g, "");

    if (valor.length > 2 && valor.length <= 7) {
      valor = `(${valor.slice(0, 2)}) ${valor.slice(2)}`;
    } else if (valor.length > 7) {
      valor = `(${valor.slice(0, 2)}) ${valor.slice(2, 6)}-${valor.slice(6, 11)}`;
    }

    return valor;
  }

  function handleTelefoneChange(e) {
    setTelefone(mascaraTelefone(e.target.value));
  }

  function gerarLink() {
    if (telefone !== "") {
      setLinkfinal(
        `https://wa.me/55${telefone.replace(/\D/g, "")}?text=${encodeURIComponent(mensagem)}`
      );
    }
  }

  function handleMandarMensagem(contato){
    setTelefone(mascaraTelefone(contato.numero))
  }

  return (
    <div className="all">
        <div className="row2">
          <img src="/whatsapp.png" alt="Logo" id="imgwhats" />
          <h1 id="titulogradiente">WhatsHub</h1>
        </div>
      <div className="head">
        <p id="subtitulo">
        O jeito mais rápido de iniciar conversas no WhatsApp. Gere links instantâneos e mantenha seus contatos organizados.
        </p>
      </div>


      <div className="row">
        <div className="gerador">
          <div className="row3">
            <img src="/whatsapp.png" id="imggerador"></img>
            <h2 className="titulo2">Gerador de Links</h2>
          </div>
          <p className="tamanhofonte">Número do Whatsapp</p>
          <img src='/telefone.png' alt="Telefone" id="telefoneicon" />
          <input
            id="inputnumero"
            type='text'
            placeholder='(xx) xxxxx-xxxx'
            value={telefone}
            maxLength={18}
            onChange={handleTelefoneChange}
          />

          <p className="tamanhofonte"> Mensagem (opcional)</p>
          <input
            id="inputmensagem"
            type='text'
            placeholder='Digite sua mensagem aqui...'
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
          />

          <button onClick={gerarLink} className="buttongreen">
            <img src="/botao_preparar_mensagem.png" alt="Preparar" className="buttongreen"/>
          </button>
          <div className="linkgerado">
            <p className="tamanhofontelink">Link gerado: </p>
            <div className="copiarlink">
              <p className="plink">{linkfinal}</p>

              <button onClick={() => navigator.clipboard.writeText(linkfinal)} className="buttoncopiarlink">
                <img src="/copiar.png" alt="Copiar"  className="buttoncopiarlink"/>
              </button>
            </div>

            <button onClick={() => window.open(linkfinal, "_blank")} className="buttonabrirwhats" >
              <img src="/botao_abrir_whatsapp.png" alt="Abrir WhatsApp" className="buttonabrirwhats"/>
            </button>

          </div>
        </div>
        <div className="gerador">
          <AgendaDeContatos onMandarMensagem={handleMandarMensagem}/>
        </div>
      </div>

    </div>
  );
}

export default App;

// ListaDeContatos.jsx
import { useState, useEffect } from 'react';
import { supabase } from '../Bd/Supabase';
import { mascaraTelefone } from '../utils/mascaraTelefone';
import './App.css';

function ListaDeContatos({ userId, novoContato, onEditarContato, onMandarMensagem}) {
  const [clone_lista, setClone_lista] = useState([])

  // função que busca contatos do usuário
  async function FiltroContatos(userId) {
    const { data, error } = await supabase
      .from('agenda')
      .select('*')
      .eq('idUsuario', userId)

    if (error) {
      console.error("Erro ao buscar:", error)
    } else {
      setClone_lista(data)
    }
  }

  // busca inicial e quando userId mudar
  useEffect(() => {
    if (userId) {
      setClone_lista([])       // limpa lista antiga
      FiltroContatos(userId)   // busca contatos do novo usuário
    }
  }, [userId])

  // adiciona novo contato sem refazer consulta
  useEffect(() => {
    if (novoContato){

      setClone_lista(prev =>
        {const existe = prev.some(c => c.id_contato === novoContato.id_contato )
          if(existe){
            return prev.map(c => c.id_contato === novoContato.id_contato ? novoContato : c)
          } else {
            return [...prev, novoContato]
          }
          
        })
  }}, [novoContato])

  // excluir contato
  async function Excluir(id) {
    console.log("Tentando excluir contato com id_contato:", id)

    const { error } = await supabase
      .from('agenda')
      .delete()
      .eq('id_contato', id) // usa o nome certo da coluna

    if (error) {
      console.error("Erro ao deletar:", error.message)
    } else {
      console.log("Contato deletado com sucesso:", id)
      // remove do estado sem precisar refazer a busca
      setClone_lista(prev => prev.filter(c => c.id_contato !== id))
    }
  }

  return (
    <div>
      <ul>
        {clone_lista.map((contato) => (
          <li key={contato.id_contato} className='licontatos'>
            <div id='column2'>
              <p id='nomecontato' >{contato.nome}</p>
              <p id='numerocontato'>{mascaraTelefone(contato.numero)}</p>
            </div>
              <button onClick={() => onMandarMensagem(contato)} id='buttonmensagem'>Mensagem</button>
              <button onClick={() => onEditarContato(contato)} className='buttoneditar'>Editar</button>
              <button onClick={() => Excluir(contato.id_contato)} className='buttondelete'>
                <img src="/lixo.png" alt="Excluir" className='buttondelete' />
              </button>
          </li>
        ))}
      </ul>
    </div>
    
  )
}

export default ListaDeContatos

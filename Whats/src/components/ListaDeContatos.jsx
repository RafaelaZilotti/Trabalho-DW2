// ListaDeContatos.jsx
import { useState, useEffect } from 'react'
import { supabase } from '../Bd/Supabase'

function ListaDeContatos({ userId, novoContato }) {
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
    if (novoContato) {
      setClone_lista(prev => [...prev, novoContato])
    }
  }, [novoContato])

  return (
    <div>
      <ul>
        {clone_lista.map((contato) => (
          <li key={contato.id}>
            {contato.nome}<br />
            {contato.numero}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListaDeContatos

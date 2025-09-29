import { useState, useEffect } from 'react'
import { supabase } from '../Bd/Supabase'
import ListaDeContatos from './ListaDeContatos'

function AgendaDeContatos() {
  const [lista_contatos, setLista_contatos] = useState([])
  const [contato, setContato] = useState({})
  const [nome_contato, setNome_contato] = useState("")
  const [numero_contato, setNumero_contato] = useState("")
  const [user, setUser] = useState(null) // usuário logado

  useEffect(() => {
    async function getUser() {
      const { data, error } = await supabase.auth.getUser()
      if (data?.user) {
        setUser(data.user)
      }
    }
    getUser()
  }, [])

  function AddLista(novoContato) {
    setContato(novoContato) // guarda o último contato
    setLista_contatos([...lista_contatos, novoContato]) // adiciona na lista local
  }

  async function SalvarAgenda() {
    if (nome_contato !== "" && numero_contato !== "" && user) {
      const novoContato = {
        nome: nome_contato,
        numero: numero_contato.replace(/\D/g, ""),
        idUsuario: user.id // nome da coluna no Supabase
      }

      // Atualiza lista local chamando AddLista
      AddLista(novoContato)

      // Salvar no Supabase e retornar o registro inserido
      const { data, error } = await supabase
        .from("agenda")
        .insert([novoContato])
        .select() // garante que data seja um array com id

      if (error) {
        console.error("Erro ao salvar:", error)
      } else {
        console.log("Contato salvo:", data)
        // Atualiza a lista local com o id retornado do Supabase
        setLista_contatos(prev => [
          ...prev.filter(c => c !== novoContato), // remove versão sem id
          ...data
        ])
        setNome_contato("")
        setNumero_contato("")
      }
    }
  }

  return (
    <>
      <img src='/usuario.png' />
      <h3>Agenda de Contatos</h3>

      <p>Nome</p>
      <input
        placeholder='Nome do contato'
        type='text'
        value={nome_contato}
        onChange={(e) => setNome_contato(e.target.value)}
      />

      <p>Número</p>
      <input
        placeholder='Número'
        type='text'
        value={numero_contato}
        onChange={(e) => setNumero_contato(e.target.value)}
      />

      <button onClick={SalvarAgenda}>
        <img src="/usuario.png" /> Salvar na Agenda
      </button>

      <p>Seus Contatos ({lista_contatos.length})</p>
      <ListaDeContatos lista={lista_contatos} /> 
    </>
  )
}

export default AgendaDeContatos

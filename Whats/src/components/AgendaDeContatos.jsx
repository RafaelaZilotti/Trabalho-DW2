// AgendaDeContatos.jsx
import { useState, useEffect } from 'react'
import { supabase } from '../Bd/Supabase'
import ListaDeContatos from './ListaDeContatos'

function AgendaDeContatos() {
  const [nome_contato, setNome_contato] = useState("")
  const [numero_contato, setNumero_contato] = useState("")
  const [user, setUser] = useState(null) // usuário logado
  const [novoContato, setNovoContato] = useState(null) // para avisar ListaDeContatos

  // pega usuário logado
  useEffect(() => {
    async function getUser() {
      const { data, error } = await supabase.auth.getUser()
      if (data?.user) setUser(data.user)
    }
    getUser()
  }, [])

  // zera novoContato sempre que o usuário muda
  useEffect(() => {
    setNovoContato(null)
  }, [user])

  // salvar contato
  async function SalvarAgenda() {
    if (nome_contato !== "" && numero_contato !== "" && user) {
      const contato = {
        nome: nome_contato,
        numero: numero_contato.replace(/\D/g, ""),
        idUsuario: user.id
      }

      // salva no Supabase
      const { data, error } = await supabase
        .from("agenda")
        .insert([contato])
        .select() // garante que data tenha o id gerado

      if (error) {
        console.error("Erro ao salvar:", error)
      } else {
        console.log("Contato salvo:", data)
        setNovoContato(data[0])       // envia para ListaDeContatos
        setNome_contato("")
        setNumero_contato("")
      }
    }
  }

  return (
    <>
      <img src='/usuario.png' alt="Usuário" />
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
        <img src="/usuario.png" alt="" /> Salvar na Agenda
      </button>

      <p>Seus Contatos</p>
      <ListaDeContatos userId={user?.id} novoContato={novoContato} />
    </>
  )
}

export default AgendaDeContatos

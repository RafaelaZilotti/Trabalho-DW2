// AgendaDeContatos.jsx
import { useState, useEffect } from 'react'
import { supabase } from '../Bd/Supabase'
import ListaDeContatos from './ListaDeContatos'
import './ListaDeContato.css'

function AgendaDeContatos() {
  const [nome_contato, setNome_contato] = useState("")
  const [numero_contato, setNumero_contato] = useState("")
  const [user, setUser] = useState(null) // usuário logado
  const [novoContato, setNovoContato] = useState(null) // para avisar ListaDeContatos
  const [contatoEdicao, setContatoEdicao] = useState(null) // contato sendo editado

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

  function mascaraTelefone(valor){
    valor = valor.replace(/\D/g, "")

    if(valor.length > 2 && valor.length <= 7){
        valor = `(${valor.slice(0,2)}) ${valor.slice(2)}`
      } else if( valor.length > 7){
        valor = `(${valor.slice(0,2)}) ${valor.slice(2,6)}-${valor.slice(6,10)}`
      }

      return valor
  }

  function handleTelefoneChange(e){
    setNumero_contato(mascaraTelefone(e.target.value))
  }

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

  function handleEditarContato(contato) {

    setContatoEdicao(contato)
    setNome_contato(contato.nome)
    setNumero_contato(contato.numero)
    window.scrollTo(0, 0) // rola para o topo da página
  }

  async function AtualizarEdicao() {
    if (!contatoEdicao) return

    const error = await supabase
      .from('agenda')
      .update({
        nome: nome_contato,
        numero: numero_contato.replace(/\D/g, "")
      })
      .eq('id_contato', contatoEdicao.id_contato)
      .select()

    if (error) {
      console.error("Erro ao atualizar:", error)
    } else if (data && data.length > 0) {
      console.log("Contato atualizado com sucesso!")
      // Atualiza o contato na lista sem precisar refazer a busca
      setNovoContato(data[0])
      // Limpa o estado de edição
      setContatoEdicao(null)
      setNome_contato("")
      setNumero_contato("")

    }
    window.location.reload()
  };



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
        maxLength={16}
        onChange={handleTelefoneChange}
      />

      {contatoEdicao ? (
        <button onClick={AtualizarEdicao}>
          <img src="/usuario.png" alt="" className='imagem'/> Atualizar Contato
        </button>
      ) : (
      <button onClick={SalvarAgenda}>
        <img src="/usuario.png" alt="" className='imagem'/> Salvar na Agenda
      </button>
      )}

      <p>Seus Contatos</p>
      <ListaDeContatos userId={user?.id} novoContato={novoContato} onEditarContato={handleEditarContato} />
    </>
  )
};

export default AgendaDeContatos

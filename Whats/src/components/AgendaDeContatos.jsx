import ListaDeContatos from './ListaDeContatos'
function AgendaDeContatos(){

    return(
        <>
            <img src='/usuario.png'/>
            <h3>Agenda de Contatos</h3>
            <p>Nome</p>
            <input placeholder='Nome do contato' type='text'/>
            <p>Número</p>
            <input placeholder='Número' type='text'/>
            <button><img src="usuario.png" /> Salvar na Agenda</button>
            <p>Seus Contatos (x)</p>
            <ListaDeContatos/>
        </>
    )
}
export default AgendaDeContatos
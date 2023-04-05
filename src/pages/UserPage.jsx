import logo from "../assets/logo.png";
import Header from "../components/Header";

function UserPage () {
  return (
    <>
    <Header />
      <main>
        <img src={ logo } alt="Contato Seguro Logo" />
        <form>
          <input type="text" placeholder="Buscar..." />
          <select>
            <option>Nome</option>
            <option>Email</option>
            <option>Telefone</option>
            <option>Nascimento</option>
            <option>Cidade</option>
          </select>
        </form>
        <hr/>

      </main>
    </>
  )
}

export default UserPage;
import logo from "../assets/logo.png";
import Header from "../components/Header";


function CompanyPage () {
  return (
    <>
    <Header />
      <main>
        <img src={ logo } alt="Contato Seguro Logo" />
        <form>
          <input type="text" placeholder="Buscar..." />
          <select>
            <option>Nome</option>
            <option>CNPJ</option>
            <option>Endereço</option>
            <option>Usuários</option>
          </select>
        </form>
        <hr/>

      </main>
    </>
  )
}

export default CompanyPage;
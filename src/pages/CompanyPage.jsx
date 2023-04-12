import logo from "../assets/logo.png";
import CompanyList from "../components/CompanyList";
import Header from "../components/Header";
import "../css/companyPage.css";

function CompanyPage() {
  return (
    <>
      <Header />
      <main>
        <img src={logo} alt="Contato Seguro Logo" className="logo" />
        <section className="form-container">
          <button className="add">+</button>
          <form>
            <input type="text" placeholder="Buscar..." className="search" />
            <select>
              <option>Nome</option>
              <option>CNPJ</option>
              <option>Endereço</option>
              <option>Usuários</option>
            </select>
          </form>
        </section>
        <hr />
        <CompanyList />
      </main>
    </>
  );
}

export default CompanyPage;
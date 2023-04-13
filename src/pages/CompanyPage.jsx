import logo from "../assets/logo.png";
import CompanyList from "../components/CompanyList";
import CompanyModal from "../components/CompanyModal";
import Header from "../components/Header";
import "../css/pages.css";

function CompanyPage() {
  return (
    <>
      <Header />
      <CompanyModal />
      <main>
        <img src={logo} alt="Contato Seguro Logo" className="logo" />
        <section className="form-container">
          <button
            className="add"
            data-bs-toggle="modal"
            data-bs-target="#company-modal"
          >
            +
          </button>
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
        <CompanyList />
      </main>
    </>
  );
}

export default CompanyPage;

import logo from "../assets/logo.png";
import Header from "../components/Header";
import UserList from "../components/UserList";
import UserModal from "../components/UserModal";
import "../css/pages.css";

function UserPage() {
  return (
    <>
      <Header />
      <UserModal />
      <main>
        <img src={logo} alt="Contato Seguro Logo" className="logo" />
        <section className="form-container">
          <button
            className="add"
            data-bs-toggle="modal"
            data-bs-target="#user-modal"
          >
            +
          </button>
          <form>
            <input type="text" placeholder="Buscar..." className="search" />
            <select>
              <option>Nome</option>
              <option>Email</option>
              <option>Telefone</option>
              <option>Nascimento</option>
              <option>Cidade</option>
            </select>
          </form>
        </section>
        <UserList />
      </main>
    </>
  );
}

export default UserPage;

import { Link } from "react-router-dom";


function Header () {
  return (
    <header>
      <nav>
        <Link to='/empresa'>Empresas</Link>
        <Link to='/usuario'>Usuários</Link>
      </nav> 
    </header>
  )
}

export default Header;
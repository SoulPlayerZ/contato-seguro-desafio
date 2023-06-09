import { BiEdit } from "react-icons/bi";
import { FaEraser } from "react-icons/fa";
import "../css/lists.css";

function UserList() {
  return (
    <section className="table-container">
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Nascimento</th>
            <th>Cidade</th>
            <th>Editar</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pedro</td>
            <td>pedrim@gmail.com</td>
            <td>21 985868598</td>
            <td>18/02/1999</td>
            <td>São Paulo</td>
            <td>
              <BiEdit className="list-btn"/>
            </td>
            <td>
              <FaEraser className="list-btn"/>
            </td>
          </tr>
          <tr>
            <td>Pedro</td>
            <td>pedrim@gmail.com</td>
            <td>21 985868598</td>
            <td>18/02/1999</td>
            <td>São Paulo</td>
            <td>
              <BiEdit className="list-btn" />
            </td>
            <td>
              <FaEraser className="list-btn" />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default UserList;

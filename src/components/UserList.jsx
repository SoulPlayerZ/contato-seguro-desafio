import { BiEdit } from "react-icons/bi";
import { FaEraser } from "react-icons/fa";

function UserList() {
  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Nascimento</th>
            <th>Cidade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pedro</td>
            <td>pedrim@gmail.com</td>
            <td>21 985868598</td>
            <td>18/02/1999</td>
            <td>São Paulo</td>
            <td className="add">
              <BiEdit />
            </td>
            <td className="add">
              <FaEraser />
            </td>
          </tr>
          <tr>
            <td>Carla</td>
            <td>9.0</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default UserList;

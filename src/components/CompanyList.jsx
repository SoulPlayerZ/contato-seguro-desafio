import { BiEdit } from "react-icons/bi";
import { FaEraser } from "react-icons/fa";
import "../css/lists.css";

function CompanyList() {
  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>CNPJ</th>
            <th>Endereço</th>
            <th>Usuários</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Empresa Ltda.</td>
            <td>45.858.858/0001-55</td>
            <td>Rua das ruas brabas, n93</td>
            <td>Marcos, Maria, Vandeco</td>
            <td>
              <BiEdit className="list-btn"/>
            </td>
            <td>
              <FaEraser className="list-btn"/>
            </td>
          </tr>
          <tr>
            <td>Empresa Ltda.</td>
            <td>45.858.858/0001-55</td>
            <td>Rua das ruas brabas, n93</td>
            <td>Marcos, Maria, Vandeco</td>
            <td>
              <BiEdit className="list-btn"/>
            </td>
            <td>
              <FaEraser className="list-btn"/>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default CompanyList;

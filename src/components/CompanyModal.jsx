import "../css/companyModal.css";

function CompanyModal() {
  return (
    <div className="modal fade" id="company-modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">Inserir Empresa</h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form className="modal-company-form">
              <label>
                Nome:
                <input type="text" name="nome" maxLength="30" className="input-text-modal" required />
              </label>
              <label>
                CNPJ:
                <input type="text" name="cnpj" maxLength="20" className="input-text-modal" required />
              </label>
              <label>
                Endereço:
                <input type="text" name="endereco" maxLength="40" className="input-text-modal" required />
              </label>
              <div>
                <button type="button" className="btn btn-secondary">
                  Limpar
                </button>
                <button type="submit" className="btn btn-primary">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyModal;

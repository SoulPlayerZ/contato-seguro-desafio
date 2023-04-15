function UserModal() {
  return (
    <div className="modal fade" id="user-modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">Inserir Usuário</h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form className="modal-form">
              <label>
                Nome:
                <input
                  type="text"
                  name="nome"
                  maxLength="30"
                  className="input-text-modal"
                  required
                />
              </label>
              <label>
                Email:
                <input
                  type="text"
                  name="email"
                  maxLength="20"
                  className="input-text-modal"
                  required
                />
              </label>
              <section className="tel-nasc-container">
                <label>
                  Telefone:
                  <input
                    type="text"
                    name="telefone"
                    maxLength="20"
                    className="input-tel-modal"
                    required
                  />
                </label>
                <label className="label-date-modal">
                  Nascimento:
                  <input
                    type="date"
                    name="nascimento"
                    maxLength="20"
                    className="input-date-modal"
                    required
                  />
                </label>
              </section>
              <label>
                Cidade onde nasceu:
                <input
                  type="text"
                  name="cidade"
                  maxLength="20"
                  className="input-text-modal"
                  required
                />
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

export default UserModal;

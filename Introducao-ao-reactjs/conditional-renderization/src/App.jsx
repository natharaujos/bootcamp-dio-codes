import React from "react";

const buttonA = <button>Histórico dos Clientes</button>

const buttonB = <button>Cadastrar Cliente</button>

const hasCustomer = false

const App = () => {

  const renderShowHistory = (
    <div>
      <div>Clique no botão abaixo para visualizar o histórico dos clientes</div>
      <br />
      {buttonA}
    </div>
  )

  const renderAddCustomer = (
    <div>
      <div>Clique abaixo para cadastrar o cliente</div>
      <br />
      {buttonB}
    </div>
  )

  const customer = 'Nathan Araújo'

  const showCustomer = () => {

    if (!hasCustomer) return <h1>Opa, não tem cliente, cadastre-o no botão logo abaixo</h1>

    return (
      <div>
        <h1>Nome do Cliente: {customer}</h1>
      </div>
    )
  }

  console.log('hasCustomer', hasCustomer)

  return (
    <div>
      <p>Digital Innovation One</p>
      <p>Bem vindo a nossa aula =D.</p>
      <div>
        {showCustomer()}
      </div>
      {/* se tiver cliente, aparece o histórico, se não, aparece para cadastrá-lo */}
      {hasCustomer ? renderShowHistory : renderAddCustomer}
    </div>
  );
};
export default App;
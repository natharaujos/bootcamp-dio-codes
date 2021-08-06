import React from "react";

const listCustomer = [
  {
    id: 1,
    name: 'Nathan Araújo',
    skills: ['React', 'Node', 'Vue'],
  },
  {
    id: 2,
    name: 'Neithan Ojuara',
    skills: ['Angular', 'Yarn', 'Js'],
  }
]

const App = () => {

  const renderCustomers = (c, index) => {
    return (
      <div>
        <li key={'c-${c.id}'}>Nome: {c.name} <button>Deletar Cliente X</button></li>
        {c.skills.map(renderSkills)}
      </div>
    )
  }

  const renderSkills = (skills, index) => {
    return (
      <div style={{ paddingLeft: '30px' }}>
        <li style={{ listStyle: 'none'}} key={'Skill-${index}'}>{skills}</li>
      </div>
    )
  }

  return (
    <div>
      <p>Digital Innovation One</p>
      <p>Bem vindo a nossa aula =D.</p>
      <div>
        {listCustomer.map(renderCustomers)}
      </div>
    </div>
  );
};
export default App;
import React from 'react'

const UserDatails = ({nome, idade, profissao}) => {
  return (
    <div>
        <h1>Lista de usuários</h1>
        <li>Nome: {nome}</li>
        <li>Idade: {idade}</li>
        <li>Profissao: {profissao}</li>
        {idade >= 18 && <p>Pode tirar carteira de motorista</p>} 
    </div>
  )
}

export default UserDatails
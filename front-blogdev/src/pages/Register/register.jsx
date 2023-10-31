import React from 'react'

const register = () => {
  return (
    <div>
        <h1>
            Compartilhe suas experiencias com outros nomades
        </h1>
        <form>
            <label>
                <span>Nome:</span>
                <input type="text" name="displayName" required placeholder="Entre com o seu nomade nome"></input>
            </label>
            <label>
                <span>Email:</span>
                <input type="email" name="email" required placeholder="Entre com o seu email"></input>
            </label>
            <label>
                <span>Email:</span>
                <input type="password" name="password" required placeholder="Entre com a sua senha"></input>
            </label>
            <label>
                <span>Confirmação:</span>
                <input type="password" name="ConfirmedPassword" required placeholder="Entre com a sua senha"></input>
            </label>

            <button className="btn"></button>
        </form>
    </div>
  )
}

export default register
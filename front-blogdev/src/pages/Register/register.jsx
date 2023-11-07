import React, { useState } from 'react'

const register = () => {
    //#region controller service
    const [displayName, setDisplayName]=useState('')
    const [email, setEmail]=userState('')
    const [password, setPassword]=userState('')
    const [confirmedPassword, setConfirmedPassword]=useState('')
    const[error, setError]=useState('')
    const handlerSubmit = (e)=>{
    e.preventDefault()
    setError('')
    const user={
        displayName,
        email,
        password,
    }
    if (password!=confirmedPassword){
        setError('As senhas precisam ser iguais')
        return
    }
    console.log(user)
}
    //#endregion
    //#region View Browser Page
  return (
    <div>
        <h1>
            Compartilhe suas experiencias com outros nomades
        </h1>
        <form onSubmit={handlerSubmit}>
            <label>
                <span>Nome:</span>
                <input type="text" 
                name="displayName" 
                required 
                value={displayName} 
                onChange={(e)=> setDisplayName(e.target.value)} 
                placeholder="Entre com o seu nomade nome"></input>
            </label>
            <label>
                <span>Email:</span>
                <input type="email" 
                name="email" 
                required 
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                placeholder="Entre com o seu email"></input>
            </label>
            <label>
                <span>Password:</span>
                <input type="password" 
                name="password" 
                required 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="Entre com a sua senha"></input>
            </label>
            <label>
                <span>Confirmação:</span>
                <input type="password" 
                name="ConfirmedPassword" 
                required 
                value={confirmedPassword}
                onChange={(e)=>setConfirmedPassword(e.target.value)}
                placeholder="Entre com a sua senha"></input>
            </label>

            <button className="btn"></button>
            {error && <p className='error'>{error}</p>}
        </form>
    </div>
  )
}

export default register
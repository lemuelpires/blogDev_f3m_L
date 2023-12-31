import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <NavLink to='/' className={styles.brand}>
        Blog <span>Dev</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink to='/'
          className={({isActive})=>(isActive ? styles.active:null)}>Home</NavLink>
        </li>
        <li>
          <NavLink to='/login'
           className={({isActive})=>(isActive ? styles.active:null)}>Login</NavLink>
        </li>
        <li>
          <NavLink to='/register'
          className={({isActive})=>(isActive ? styles.active:null)}>Register</NavLink>
        </li>
        <li>
          <NavLink to='/about'
          className={({isActive})=>(isActive ? styles.active:null)}>About</NavLink>
        </li>

      </ul>
      NavBar</div>
  )
}

export default NavBar
import React from 'react'
import './newMenu.css'

function Menu({clickComputer, clickNotebook, clickCelular}) {
    return(
        <div id="Menu">
        <header className="containerHeader">
          <nav className="Menu">
            <ul id="home" >
                <li>
                    <a href='#'><i className="fas fa-home"></i>Home</a>
                </li>
            </ul>
            <a href='#'><img id="logo" src='./img/Logo.png' /></a>
            <ul className= 'navegation'>
                <li onClick={clickComputer}>
                  <a href='#'id="computer"><i className="fas fa-desktop"></i>Computador</a>
                </li>
                <li onClick={clickNotebook}>
                  <a href='#' id="not"><i  className="fas fa-laptop"></i>Notebook</a>
                </li>
                <li onClick={clickCelular}>
                  <a href='#' id="mobile"><i className="fas fa-mobile-alt"></i>Celular</a>
                </li>    
                <li id="login" className="logar">
                    <i className="fas fa-user-circle"></i>
                    <p className="cadastro">Login</p>
                    <a className="cadastro">Login</a>
                </li>
            </ul>
          </nav>
        </header>
      </div>
    )
}

export default Menu;
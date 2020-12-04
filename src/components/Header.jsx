/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../styles/Header.scss';
import logoR5  from '../static/logor5.ico';
import cartIcon from '../static/carrito-de-compras.svg';
import store from '../store/store'

const Header = () => {
    const state = store.getState()
    let numProductsCart = 0
    state.cart.forEach((cartProduct) => numProductsCart += cartProduct.n)
    return <header className="header">
        <img className="logo" src={logoR5}/>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <a className="navbar-brand" href="SOAT">SOAT</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
    
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="Creditos">Creditos <span className="sr-only">(current)</span></a>
                </li>
            <li className="nav-item">
                <a className="nav-link" href="Otros Seguros">Otros Seguros</a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="link de blog" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Blog
                </a>
    
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="preguntas">¿Preguntas?</a>
                <a className="dropdown-item" href="otra accion">Another action</a>
    
            <div className="dropdown-divider">

            </div>
                <a className="dropdown-item" href="#algo mas aqui">Something else here</a>
        </div>
            </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#preguntas">¿Preguntas?</a>
                </li>
            </ul>
    
        <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Que estas Buscando?" aria-label="Que estas Buscando?"/>
                <button className="btn btn-danger" type="submit">Buscar</button>
        </form>
    
        </div>
            </nav>
    
        <div className="cartIcon">
                {numProductsCart}
                  <img src= {cartIcon}/>
        </div>
    
    
    </header>    
}

export default Header;
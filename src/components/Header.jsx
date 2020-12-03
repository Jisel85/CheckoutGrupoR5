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
        <img className="logo" src={logoR5} />
        <nav class="navbar navbar-expand-lg navbar-light ">
        <a class="navbar-brand" href="#">SOAT</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="#">Creditos <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Otros Seguros</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Blog
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">¿Preguntas?</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="#">¿Preguntas?</a>
            </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Que estas Buscando?" aria-label="Que estas Buscando?"/>
            <button class="btn btn-danger" type="submit">Buscar</button>
            </form>
        </div>
        </nav>
        <div className="cartIcon">
            {numProductsCart}
            <img src={cartIcon}/>
        </div>
    </header>    
}

export default Header;
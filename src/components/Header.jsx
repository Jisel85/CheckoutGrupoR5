import React from 'react';

function Header () {
    return (
       <div className="App">
           <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-expand" href="#ff00ff">SOAT</a>
                    <button class="navbar-toggler" type="buttom" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#ff00">Creditos<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-expand">
        <a class="nav-link" href="#ff00">Otros Seguros</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#ff00" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Blog
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#ff00ff">¿Preguntas?</a>
          <a class="dropdown-item" href="#ff00">Nosotros</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#00ff">Comprar SOAT</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#ff0000" tabindex="-1" aria-disabled="true">Promociones</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sl-2" type="search" placeholder="Que estas buscando?" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
    </form>
  </div>
</nav>
       </div>
 )
}

export default Header;
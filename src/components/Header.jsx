import React from 'react';
import '../App.css';
import logoR5  from '../logoR5.png';

const Header = () => (
    <header className="header">
        <img className="logo" src={logoR5} />
        <ul><a href="/">SOAT</a> </ul>
        <ul><a href="/">Créditos</a> </ul>
        <ul><a href="/">Otros Seguros</a> </ul>
        <ul><a href="/">Blog</a></ul>
        <ul><a href="/">Preguntas</a></ul>
        <ul><a href="/">Nosotros</a></ul>
    </header>
);

export default Header;
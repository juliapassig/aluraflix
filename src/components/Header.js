import React from 'react';
import '../styles/Header.css';

const Header = ({ onNovoLivro }) => {
  return (
    <header>
      <div className="logo">Catálogo de Livros</div>
      <button onClick={onNovoLivro}>Novo Livro</button>
    </header>
  );
}

export default Header;

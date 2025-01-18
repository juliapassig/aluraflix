// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import BookCard from './components/BookCard';
import Modal from './components/Modal';
import './styles/main.css';

const App = () => {
  const [livros, setLivros] = useState([]);
  const [livroAtual, setLivroAtual] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/livros')
      .then(response => response.json())
      .then(data => setLivros(data));
  }, []);

  const handleEdit = (livro) => {
    setLivroAtual(livro);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/livros/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setLivros(livros.filter(livro => livro.id !== id));
    });
  };

  const handleSave = (livro) => {
    fetch(`http://localhost:5000/livros/${livro.id}`, {
      method: 'PUT',
      body: JSON.stringify(livro),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => {
      setLivros(livros.map(l => (l.id === livro.id ? livro : l)));
    });
  };

  return (
    <div>
      <Header />
      <Banner image="imagens/2025.png" />
      <main>
        <h2>Catálogo de Livros</h2>
        {livros.map(livro => (
          <BookCard
            key={livro.id}
            livro={livro}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </main>
      <Footer />
      {showModal && <Modal livro={livroAtual} onClose={() => setShowModal(false)} onSave={handleSave} />}
    </div>
  );
}; 



function App1() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Dados simulados para os livros
    const fetchedBooks = [
      { id: 1, title: 'Livro A', author: 'Autor A', image: '/imagens/livro1.jpg' },
      { id: 2, title: 'Livro B', author: 'Autor B', image: '/imagens/livro2.jpg' },
      { id: 3, title: 'Livro C', author: 'Autor C', image: '/imagens/livro3.jpg' },
    ];

    // Exibindo os dados no console para verificar se estão sendo carregados
    console.log(fetchedBooks);
    
    setBooks(fetchedBooks);
  }, []);

  return (
    <div className="App">
      <div className="book-catalog">
        {books.length > 0 ? (
          books.map((book) => (
            <BookCard key={book.id} title={book.title} author={book.author} image={book.image} />
          ))
        ) : (
          <p>Carregando livros...</p>
        )}
      </div>
    </div>
  );
}

export default App;
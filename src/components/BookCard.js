import React from 'react';
import '../styles/BookCard.css';

function BookCard({ title, author, image }) {
  return (
    <div className="book-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{author}</p>
    </div>
  );
}

export default BookCard;

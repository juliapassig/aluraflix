import React, { useState } from 'react';

const Modal = ({ livro, onClose, onSave }) => {
  const [formData, setFormData] = useState(livro);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return (
    <div className="modal">
      <h2>Editar Card</h2>
      <input
        type="text"
        name="titulo"
        value={formData.titulo}
        onChange={handleChange}
      />
      <input
        type="text"
        name="autor"
        value={formData.autor}
        onChange={handleChange}
      />
      <textarea
        name="descricao"
        value={formData.descricao}
        onChange={handleChange}
      />
      <button onClick={handleSave}>Salvar</button>
      <button onClick={onClose}>Fechar</button>
    </div>
  );
}

export default Modal;

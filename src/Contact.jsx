// src/components/Contact.jsx
import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/contact', { name, email, message });
      alert('Message envoyé avec succès !');
    } catch (error) {
      alert('Erreur lors de l\'envoi du message.');
    }
  };

  return (
    <section id="contact" className="p-8">
      <h2 className="text-2xl mb-4">Contactez-moi</h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label className="mb-2">
          Nom :
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="block w-full p-2 border"/>
        </label>
        <label className="mb-2">
          Email :
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="block w-full p-2 border"/>
        </label>
        <label className="mb-2">
          Message :
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="block w-full p-2 border"/>
        </label>
        <button type="submit" className="bg-blue-500 text-white p-2">Envoyer</button>
      </form>
    </section>
  );
};

export default Contact;

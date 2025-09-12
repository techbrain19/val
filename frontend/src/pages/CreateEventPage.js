import React, { useState } from 'react';
import axios from 'axios';

export default function CreateEventPage() {
  const [form, setForm] = useState({ name: '', date: '', description: '' });
  const [link, setLink] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4000/api/events', form);
      setLink(res.data.link);
    } catch (err) {
      alert('Error creating event');
    }
  };

  return (
    <div>
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="date" type="date" onChange={handleChange} required />
        <textarea name="description" placeholder="Description" onChange={handleChange} required />
        <button type="submit">Create</button>
      </form>
      {link && (
        <div>
          <p>Share this link:</p>
          <a href={`/event/${link.split('/').pop()}`}>{`/event/${link.split('/').pop()}`}</a>
        </div>
      )}
    </div>
  );
}

import React, { useState } from 'react';
import axios from 'axios';
import styles from './CreateEventPage.module.css';

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
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.title}>Create Event</div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            name="name"
            placeholder="Event Name"
            onChange={handleChange}
            required
          />
          <input
            className={styles.input}
            name="date"
            type="date"
            onChange={handleChange}
            required
          />
          <textarea
            className={styles.textarea}
            name="description"
            placeholder="Event Description"
            onChange={handleChange}
            required
          />
          <button className={styles.button} type="submit">Create</button>
        </form>
        {link && (
          <div className={styles.linkBox}>
            <p>Share this link:</p>
            <a className={styles.link} href={`/event/${link.split('/').pop()}`}>{`/event/${link.split('/').pop()}`}</a>
          </div>
        )}
      </div>
    </div>
  );
}

import styles from './CreateEventPage.module.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function CreateEventPage() {
  const [form, setForm] = useState({ name: '', date: '', description: '' });
  const [error, setError] = useState('');
  const [isNavigating, setIsNavigating] = useState(false);
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';
  const handleSubmit = async e => {
    e.preventDefault();
    if (isNavigating) return;
    setIsNavigating(true);
    try {
      const res = await axios.post(`${API_URL}/api/events`, form);
      const token = res.data.link.split('/').pop();
      navigate(`/event/${token}`);
    } catch (err) {
      setIsNavigating(false);
      if (err.response) {
        setError(`Error: ${err.response.data.error || 'Failed to create event.'}`);
      } else if (err.request) {
        setError('Network error: Could not reach backend.');
      } else {
        setError(`Error: ${err.message}`);
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.title}>Create Event</div>
        {error && <div className={styles.error}>{error}</div>}
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
          <button className={styles.button} type="submit" disabled={isNavigating}>Create</button>
        </form>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './EventLandingPage.module.css';

export default function EventLandingPage() {
  const { token } = useParams();
  const [event, setEvent] = useState(null);
  const [error, setError] = useState('');
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';

  useEffect(() => {
    let isMounted = true;
    axios.get(`${API_URL}/api/events/link/${token}`)
      .then(res => {
        if (isMounted) setEvent(res.data);
      })
      .catch(() => {
        if (isMounted) setError('Event not found or link expired.');
      });
    return () => { isMounted = false; };
  }, [API_URL, token]);

  if (error) return <div className={styles.error}>{error}</div>;
  if (!event) return <div className={styles.loader}>Loading...</div>;

  return (
    <div className={styles.landingBg}>
      <div className={styles.card}>
        <div className={styles.heartGift}>
          <span className={styles.heart}>❤️</span>
          <span className={styles.gift}>🎁</span>
        </div>
        <h1 className={styles.title}>{event.name}</h1>
        <p className={styles.date}>{new Date(event.date).toLocaleDateString()}</p>
        <p className={styles.desc}>{event.description}</p>
        <div className={styles.loveMsg}>You are invited to a celebration of love & joy!</div>
      </div>
      <div className={styles.bgImage}></div>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function EventLandingPage() {
  const { token } = useParams();
  const [event, setEvent] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:4000/api/events/link/${token}`)
      .then(res => setEvent(res.data))
      .catch(() => setError('Event not found or link expired.'));
  }, [token]);

  if (error) return <p>{error}</p>;
  if (!event) return <p>Loading...</p>;

  return (
    <div>
      <h2>{event.name}</h2>
      <p>Date: {event.date}</p>
      <p>{event.description}</p>
    </div>
  );
}

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateEventPage from './pages/CreateEventPage';
import EventLandingPage from './pages/EventLandingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateEventPage />} />
        <Route path="/event/:token" element={<EventLandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;

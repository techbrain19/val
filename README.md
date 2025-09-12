# val

## Project Overview

This project is an event landing page system. Users can create event pages (Valentine's Day, birthdays, ceremonies, etc.), and the system generates a temporary link for the celebrant to view their event landing page.

## Tech Stack

- **Backend:** Node.js (Express), SQLite
- **Frontend:** React

## Directory Structure

```
val/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── app.js
│   ├── package.json
│   └── events.db
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│   ├── package.json
│   └── public/
└── README.md
```

## Development Process

1. **Backend Setup**
	- Express API for event creation and retrieval
	- SQLite database for event storage
	- Endpoints:
	  - `POST /api/events` — Create event
	  - `GET /api/events/link/:token` — Retrieve event by link

2. **Frontend Setup**
	- React app for user interface
	- Event creation form
	- Landing page for celebrant
	- Axios for API calls

3. **Integration**
	- Enable CORS on backend
	- Connect frontend to backend endpoints

## How to Run

### Backend
```bash
cd backend
npm install
node src/app.js
```

### Frontend
```bash
cd frontend
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
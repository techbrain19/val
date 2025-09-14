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


## Installation & Usage

### Local Development

#### Backend
```bash
cd backend
npm install
node src/app.js
```
Backend runs on [http://localhost:4000](http://localhost:4000)

#### Frontend
```bash
cd frontend
npm install
npm start
```
Frontend runs on [http://localhost:3000](http://localhost:3000)

#### Environment Variables
Create a `.env` file in `frontend/` with:
```
REACT_APP_API_URL=http://localhost:4000
```

### Codespaces/Cloud IDE

1. Open a new Codespace or cloud IDE session.
2. Run the backend:
	```bash
	cd backend
	npm install
	node src/app.js
	```
3. Run the frontend:
	```bash
	cd frontend
	npm install
	npm start
	```
4. **Forward Ports:**
	- Make sure port 4000 (backend) and 3000 (frontend) are forwarded.
	- Set port visibility to "public" for both ports so the frontend can reach the backend.
	- You can change port visibility in the Codespaces Ports panel (right-click the port > Change visibility > Public).

#### Environment Variables
Create a `.env` file in `frontend/` with:
```
REACT_APP_API_URL=https://<your-codespace-id>-4000.app.github.dev
```
Replace `<your-codespace-id>` with your actual Codespace ID.

## Notes
- The backend must be running and accessible for the frontend to work.
- If you see a network error, check port forwarding and visibility settings in Codespaces.
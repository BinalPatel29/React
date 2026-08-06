# Getting Started with React — A Practical Guide

You already know real frontend work — `chat.js` and `notes.js` prove that (DOM manipulation, events, forms, fetch calls). This guide is about the React-specific pieces on top of that: how to set up a project, how to structure it, and how to think in components.

---

## 1. Set Up the Project

Use **Vite** — not `create-react-app`, which is outdated now.

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
```

This gives you a working React app at `http://localhost:5173` immediately.

---

## 2. Folder Structure

Keep it simple at first — don't over-engineer this early on.

```
src/
  components/       ← small, reusable UI pieces (Button, Avatar, MessageInput)
  pages/            ← full screens (LoginPage, NotesPage, NoteDetailPage)
  hooks/            ← custom hooks (useFetch, useAuth)
  api/              ← functions that call your backend (notesApi.js, authApi.js)
  context/          ← React Context providers for shared state (AuthContext)
  App.jsx
  main.jsx
```

**Rule of thumb:**
- A **component** is a small, reusable piece — a button, a single message, a card.
- A **page** is a full screen made of several components put together.
- If a file is doing both "here's how this looks" *and* "here's how to fetch/save data," that's usually a sign to split it into two.

---

## 3. Keep API Calls Out of Components

Don't call `fetch()` directly inside a component. Put it in `api/` instead:

```js
// api/notesApi.js
const BASE_URL = 'http://localhost:5000/api';

export async function getNotes() {
  const res = await fetch(`${BASE_URL}/notes`);
  if (!res.ok) throw new Error('Failed to fetch notes');
  return res.json();
}
```

Your component then just calls `getNotes()` — it doesn't need to know about URLs or fetch details. This matters a lot once you're calling your real Node backend for the e-commerce project.

---

## 4. A Simple Example — Real Structure

**`components/NoteCard.jsx`**
```jsx
function NoteCard({ title, content, onDelete }) {
  return (
    <div className="note-card">
      <h3>{title}</h3>
      <p>{content}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default NoteCard;
```

**`pages/NotesPage.jsx`**
```jsx
import { useState, useEffect } from 'react';
import NoteCard from '../components/NoteCard';
import { getNotes } from '../api/notesApi';

function NotesPage() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNotes()
      .then(setNotes)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {notes.map(note => (
        <NoteCard key={note._id} title={note.title} content={note.content} />
      ))}
    </div>
  );
}

export default NotesPage;
```

This one example already touches most of Phases 2–4 of your React roadmap: components, props, `useState`, `useEffect`, and a real API call.

---

## 5. Habits to Start With — Not Fix Later

- **One component per file**, named the same as the file (`NoteCard.jsx` exports `NoteCard`).
- **Props for data coming in, state for data that changes** inside that component.
- Don't reach for a state management library (Redux, Zustand, etc.) yet. Plain `useState` / `useEffect` / Context covers everything in this roadmap.
- Start CSS per-component if you want (`NoteCard.css` next to `NoteCard.jsx`) rather than one giant global stylesheet — easier to keep organized as the app grows.

---

## Where to Start

Start with **Phase 1 of your React roadmap** — rebuilding one screen's layout with Flexbox/Grid — before touching React itself. That part doesn't need any of this setup, and it gets your CSS fundamentals solid first.

Then move into this guide's structure for Phase 2 onward.

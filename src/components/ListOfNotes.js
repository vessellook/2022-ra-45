import React, { useEffect, useState } from 'react';
import * as api from '../api/notes';
import Note from './Note';
import NoteForm from './NoteForm';

const ListOfNotes = () => {
  const [sending, setSending] = useState(false);
  const [notes, setNotes] = useState([]);

  const loadNotes = async () => {
    const newNotes = await api.getNotes();
    setNotes(newNotes);
  };

  useEffect(() => {
    loadNotes();
  }, []);

  const sendNote = async (content) => {
    const id = notes.length === 0 ? 0 : notes.at(-1).id + 1;
    setSending(true);
    await api.addNote({ id, content });
    await loadNotes();
    setSending(false);
  };

  const handleDelete = async (id) => {
    await api.deleteNote(id);
    await loadNotes();
  };

  const history = notes.map(({ id, content }) => (
    <Note key={id} onDelete={() => handleDelete(id)}>{content}</Note>
  ));

  return (
    <div>
      <div className="title">
        Notes
        <button className="update-button" onClick={loadNotes}>
          &#128472;
        </button>
      </div>
      <div className='notes'>{history}</div>
      <div className="form-title">New Note</div>
      <NoteForm disabled={sending} onSendNote={sendNote} />
    </div>
  );
};

export default ListOfNotes;

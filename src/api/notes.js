const API_URL = process.env.REACT_APP_API_URL;
const notesURL = new URL('/notes', API_URL);

export async function addNote(note) {
  await fetch(notesURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(note),
  });
}

export async function getNotes() {
  const response = await fetch(notesURL);
  return await response.json();
}

export async function deleteNote(id) {
  const noteURL = new URL(`/notes/${id}`, API_URL);
  await fetch(noteURL, {method: 'DELETE'});
}

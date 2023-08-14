import NoteForm from '../../components/NoteForm/NoteForm'
import NoteItem from '../../components/NoteItem/NoteItem'
import {useState, useEffect} from 'react'
import { getUser } from '../../utilities/users-service';
import { fetchUserNotes, addNote } from '../../utilities/notes-api';


export default function NotesPage() {
  const [notes, setNotes] = useState([]);
  const user = getUser();

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const data = await fetchUserNotes(user._id);
        setNotes(data);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };

    fetchNotes();
  }, []);

  const handleAddNote = async (note) => {
    try {
      const data = await addNote(note);
      setNotes([...notes, data]);
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  return(
    <div>
      <NoteForm onAddNote={handleAddNote} />
      {notes.length === 0 ? (
        <p>No Notes Yet</p>
      ) : (
        notes.map((note) => (
          <NoteItem key={note._id} note={note} />
        ))
      )}
    </div>
  )
}
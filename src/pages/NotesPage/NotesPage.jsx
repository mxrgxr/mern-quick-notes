import NoteForm from '../../components/NoteForm/NoteForm'
import NoteItem from '../../components/NoteItem/NoteItem'
import {useState, useEffect} from 'react'
import { getUser } from '../../utilities/users-service';
import { fetchUserNotes, addNote } from '../../utilities/notes-api';


export default function NotesPage() {
  const [notes, setNotes] = useState([]);
  const [sortAscending, setSortAscending] = useState(true);
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

  const toggleSortOrder = () => {
    setSortAscending(!sortAscending);
  };

  return (
    <div>
      <NoteForm onAddNote={handleAddNote} />
      <button onClick={toggleSortOrder}>
        {sortAscending ? "Sort by Descending" : "Sort by Ascending"}
      </button>
      {notes.length === 0 ? (
        <p>No Notes Yet</p>
      ) : (
        notes
          .sort((a, b) =>
            sortAscending
              ? a.createdAt.localeCompare(b.createdAt)
              : b.createdAt.localeCompare(a.createdAt)
          )
          .map((note) => <NoteItem key={note._id} note={note} />)
      )}
    </div>
  );
}
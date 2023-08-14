import NoteForm from '../../components/NoteForm/NoteForm'
import NoteItem from '../../components/NoteItem/NoteItem'

export default function OrderHistoryPage() {
  const [notes, setNotes] = useState([]);

  //backend logic to fetch notes for user

  //backend logic to save note to database

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
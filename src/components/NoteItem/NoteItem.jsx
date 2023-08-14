export default function NoteItem({note}){
    return(
        <div>
            <p>{note.text}</p>
            <p>{new Date(note.createdAt).toLocaleString()}</p>
        </div>
    )
}
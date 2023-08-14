import {useState} from 'react';

export default function NoteForm({onAddNote}){
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (evt) => {
        setInputValue(evt.target.value);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (inputValue.trim()){
            onAddNote({text:inputValue})
            setInputValue('');
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
            <button type="submit">Add Note</button>
        </form>
    )
}
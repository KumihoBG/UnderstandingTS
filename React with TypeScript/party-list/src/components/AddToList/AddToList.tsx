import { useState } from 'react';
import { IState as Props } from '../../App';

interface IProps {
    people: Props['people'];
    setPeople: React.Dispatch<React.SetStateAction<Props['people']>>;
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
    const [input, setInput] = useState({
        name: '',
        age: '',
        url: '',
        note: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };

    const handleClick = (): void => {
        if (input.name === '' || input.age === '' || input.url === '') {
            alert('Please fill in all fields');
            return;
        }
        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt(input.age),
                url: input.url,
                note: input.note
            }
        ]);

        setInput({
            name: '',
            age: '',
            url: '',
            note: ''
        });
    };

    return (
        <div className='AddToList'>
            <input className='AddToList-input' type='text' placeholder='Name' name='name' value={input.name} onChange={handleChange} />
            <input className='AddToList-input' type='text' placeholder='Age' name='age' value={input.age} onChange={handleChange} />
            <input className='AddToList-input' type='text' placeholder='Image URL' name='url' value={input.url} onChange={handleChange} />
            <textarea className='AddToList-input' placeholder='Notes' name='note' value={input.note} onChange={handleChange} />
            <button className='AddToList-btn' onClick={handleClick}>
                Add to list
            </button>
        </div>
    )
}

export default AddToList;
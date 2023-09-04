import React, {useState} from 'react'

export default function Books() {
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [library, setLibrary]= useState('');
    const [submit, setSubmit] = useState(false);
    const changeName = (event) =>{
        setName(event.target.value);
    };
    const changeAuthor = (event) =>{
        setAuthor(event.target.value);
    };
    const changeLibrary = (event) =>{
        setLibrary(event.target.value);
    };
    const handleSubmit = () =>{
        if (name && author && library) {
            setSubmit(true);
        }
    };
  return (
    <div>
      {submit?(
        <p>The Book : {name} <br />
        The Author : {author} <br />
        Library : {library}
        </p>
      ):(
        <div>
            <label for="name">Name Of the book</label><br />
            <input type="text" placeholder='Book Name' value={name} onChange={changeName} /><br /><br />
            <label for="name">Author Of the book</label><br />
            <input type="text" placeholder='Author' value={author} onChange={changeAuthor} /><br /><br />
            <label for="name">Library Of the book</label><br />
            <input type="text" placeholder='Library' value={library} onChange={changeLibrary} /><br /><br />
            <button onClick={handleSubmit}>Find Book</button>
        </div>
      )
      }
    </div>
  )
}

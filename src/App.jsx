import React, {useState} from 'react';
function App() {
    const [title,setTitle] = useState("")
    const [items,setItems] = useState([])
    function handleForm(e){
        e.preventDefault()
        onAdd(title)
    }
    function onAdd (title){
        setItems([
            ...items,
            {
                id:items.length,
                title:title
            }
        ])
        console.log(items)
        setTitle('')

    }
    function handleValue(event){
        setTitle(event.target.value)
    }
    return (
        <>
            <form onSubmit={handleForm}>
            <input type="text" className={'form-text'} value={title} onChange={handleValue} />
            </form>
                <ul>
                    {items.map((item)=><li key={item.id}>{item.title}</li>)}
                </ul>
        </>
    );
}

export default App;
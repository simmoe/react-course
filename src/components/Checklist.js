import React, {useState, useRef} from 'react'
import Item from './Item'

const Checklist = ()  => {
    const inp = useRef()
    const [items, setItems] = useState(
        [
            "feed cat", 
            "buy shoes", 
            "have birthday party for friends, not MUM"
        ]
    )
    const addItem = () => {
        setItems([inp.current.value,...items])
        inp.current.value=''
    }
    const deleteItem = (id) => {
        const copy = items
        copy.splice(id, 1)
        setItems([...copy])
    }
     return(
        <div className='submodule'>
            <h1>Checklist</h1>
            <p>This module keeps a state array with checklist items. Input somthing to add more.</p>
            <input ref={inp} type='text' placeholder='add item' />
            <button onClick={addItem}>add</button>
            <div className='items'>
            {
                items.map(
                    (item, index) => <Item key={index} id={index} deleteItem={deleteItem} item={item} />
                )
            }
            </div>
        </div>
    )
}

export default Checklist
import React, {useState} from 'react'
import './Checklist.css'
import ChecklistItem from './ChecklistItem'

const Checklist = () => {

    const [todo, setTodo] = useState(["fix laundry", "feed cat", "eat, drink"])

    const insertItem = (e) => {
        e.preventDefault()
        setTodo([...todo, document.querySelector('#inp').value])
    }
    const remove = (i) => {
        setTodo(todo.filter( e => e !== todo[i] ))
    }

    return(
        <div className="checklist submodule">
            <h2>To do list</h2>
            <p>This module has a state variable with sentences - these are passed to a submodule, that handles on/off state. Finally the remove function is passed as a prop from the parent module - so we can delete the item from the top component.</p>
            <form onSubmit={ (e) => insertItem(e) }>
                <input id="inp" type="text" placeholder="add item and hit enter"/>
            </form>
            <div className="todos">
            {
                todo.map( (t, i) =>
                    <ChecklistItem key={i} number={i} text={t} remove={remove} />
                )
            }
            </div>
        </div>
    )
}

export default Checklist
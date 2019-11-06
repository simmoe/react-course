import React, {useState} from 'react'
import { FiDelete } from "react-icons/fi";


const ChecklistItem = (props) => {
    const [on, setOn] = useState(false)
    const checkMe = () => {
        setOn(!on)
    }
    return(
        <>
            <li className={on ? 'checked' : ''}>{props.text}</li>
            <input type='checkbox' onClick={ checkMe } />  
            <FiDelete onClick={ () => props.remove(props.number) } />
        </>
    )
}

export default ChecklistItem
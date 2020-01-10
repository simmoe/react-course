import React from 'react'
import {MdDelete} from 'react-icons/md'

const Item = (props)  => {
    return(
        <div className='item'>
            <h4>{props.item}</h4>
            <MdDelete onClick={ () => props.deleteItem(props.id) }/>
        </div>
    )
}

export default Item
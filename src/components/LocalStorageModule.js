import React from 'react'

const LocalStorageModule = ()  => {
    const updateStorage = (e) => {
        window.localStorage.setItem('myVariable', e.target.value)
    }
    return(
        <div className='submodule'>
            <h1>LocalStorageModule</h1>
            <p>Sometimes we want to keep some simple variable across a reload. We can hack React a little using local storage</p>
            <input onChange={updateStorage} type='text' placeholder='type something and reload'></input>
            <p>Reload the page to see that the variable in the local client storage has changerd (like a cookie)</p>
    <p>The localstorage variable "myVariable" has this value: {window.localStorage.getItem('myVariable')}</p>
        </div>
    )
}

export default LocalStorageModule
import React from 'react'
import './App.css'
import SubModule from './components/SubModule'
import SubModuleProps from './components/SubModuleProps'
import SubModulePropsDefault from './components/SubModulePropsDefault'
import StateModule from './components/StateModule'
import LocalStorageModule from './components/LocalStorageModule'
import MusicVideos from './components/MusicVideos'
import Checklist from './components/Checklist'

const App = () => {
  const exampleValue = 'I am an example value'
  return(
    <>
    <header>
      <nav>
        <h1>App.js</h1>
        <p>App is the top parent module that imports all the submodules</p>
      </nav>
    </header>
    <div className='submodules'>
      <SubModule/>
      <SubModuleProps example={exampleValue}/>
      <SubModulePropsDefault example={exampleValue} />
      <StateModule />
      <LocalStorageModule />
      <MusicVideos />
      <Checklist />
    </div>
    </>
  )
}

export default App

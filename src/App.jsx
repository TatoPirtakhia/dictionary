import { useState } from 'react'
import './App.css'
import Words from './Wors'
import Header from './Header'
function App() {
  const [dark,setDark] = useState(false)
  const swich = ()  =>{
    setDark(!dark)
  }
  return (
    <div className={dark ? "dark_body":'notDark_body'}>
    <Header dark={dark} setDark={setDark} swich={swich} />
    </div>
  )
}

export default App

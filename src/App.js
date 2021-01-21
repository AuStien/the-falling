import { useState, useEffect } from 'react'
import './App.css';
import Letter from './Letter'
import ReactDOM from 'react-dom';


function App() {
  const [key, setKey] = useState("")
  useEffect(() => {
    window.addEventListener("keydown", e => setKey(e.key));
  }, [])

  useEffect(() => {
    //ReactDOM.unmountComponentAtNode(document.getElementById("a"))
    //console.log("delete?")
  }, [key])

  return (
    <div className="App" onKeyDown={e => console.log(e.key)}>
      <header className="App-header">
        <Letter keypress={key} key="a" />
      </header>
    </div>
  );
}

export default App;

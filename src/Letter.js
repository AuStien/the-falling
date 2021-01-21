import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';

import { getLetter } from './letters'
export default function Letter(props) {
    const [letter, setLetter] = useState(" ")

    useEffect(() => {
        setLetter(getLetter())
    }, [])

    useEffect(() => {
        console.log("press:" + props.keypress)
        console.log("letter:" + letter)
        if (letter.toLocaleLowerCase() === props.keypress) {
            console.log("wat", document.getElementById("a"))
            console.log(ReactDOM.unmountComponentAtNode(document.getElementById("a")))

        }
    }, [props.keypress])
    return(<div id="a">{letter}</div>)
}
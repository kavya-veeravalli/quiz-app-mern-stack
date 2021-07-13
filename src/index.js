import ReactDOM from 'react-dom'
import React from 'react'
import Quiz1 from './Quiz1'

function App() {
    return (
        <div>
            <Quiz1></Quiz1>
        </div>
    )
}

export default App
const rootElement =document.getElementById('root')

ReactDOM.render(<App></App>,rootElement)
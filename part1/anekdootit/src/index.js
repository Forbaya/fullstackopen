import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Votes = ({votes}) => {
    if (votes === 1) {
        return (
            <div>has {votes} vote</div>
        )
    }
    return (
        <div>has {votes} votes</div>
    )
}

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [points, setPoints] = useState([0, 0, 0, 0, 0, 0])

    const handler = () => {
        const random = Math.floor(Math.random() * anecdotes.length);
        setSelected(random)
    }

    const voteHandler = () => {
        const copy = [...points]
        copy[selected]++

        setPoints(copy)
    }

    return (
        <div>
            <div>{props.anecdotes[selected]}</div>
            <Votes votes={points[selected]} />
            <button onClick={voteHandler}>vote</button>
            <button onClick={handler}>next anecdote</button>
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)
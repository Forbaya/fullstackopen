import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const Statistics = (props) => {
    return (
        <>
            <h1>statistics</h1>
            <div>good {props.good}</div>
            <div>neutral {props.neutral}</div>
            <div>bad {props.bad}</div>
        </>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h1>give feedback</h1>
            <Button handleClick={() => setGood(good + 1)} text={"good"} />
            <Button handleClick={() => setNeutral(neutral + 1)} text={"neutral"} />
            <Button handleClick={() => setBad(bad + 1)} text={"bad"} />

            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)
import React from 'react'

import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({course}) => {
    const exercises = course.parts.map(x => x.exercises)
    const exerciseCount = exercises.reduce((x, y) => x + y)

    return (
        <div>
            <Header course={course.name}/>
            <Content parts={course.parts} />
            <Total exerciseCount={exerciseCount} />
        </div>
    )
}

export default Course
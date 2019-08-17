import React from 'react'

import Part from "./Part";

const Content = ({parts}) => (
    <div>
        {parts.map((part, i) => <Part key={"part-".concat(i)} part={part} />)}
    </div>
)

export default Content
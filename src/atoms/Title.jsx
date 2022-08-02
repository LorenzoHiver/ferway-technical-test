import React from "react"

const Title = ({ text, ...props }) => (
    <h1 {...props}>{text}</h1>
)

export default Title

import React from "react"

const IconSmall = ({ url, metro, ...props }) => {
    return (
        <img className="w-6 h-6" src={url} alt={`metro_ligne_${metro}`} {...props} />
    )
}

export default IconSmall

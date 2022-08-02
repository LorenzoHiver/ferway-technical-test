import React, { useEffect } from "react"

const IconSmall = ({ url, metro, ...props }) => {

    useEffect(() => {
        console.log(url)
    })

    return (
        <img className="w-6 h-6" src={url} alt={`metro_ligne_${metro}`} {...props} />
    )

}

export default IconSmall

import React from 'react'

const InfoMetro = ({ destination, information }) => { 
    return (
        <div className='flex justify-around my-3 flex-col items-center w-2/3 bg-amber-500 py-4 rounded'>
            <p className='text-white'>Destination : <span className='font-bold uppercase'>{destination}</span></p>
            <p className='text-white'>Prochain train :  <span className='font-bold uppercase'>{information}</span></p>
        </div>
    )
}

export default InfoMetro

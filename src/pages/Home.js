import React, { useState, useEffect } from "react"

import Title from "../atoms/Title"
import IconSmall from "../atoms/IconSmall"
import InfoMetro from "../atoms/InfoMetro"
import { getSchedule, getStations } from "../utils/api"

const metros = require('../utils/metros.json')


function Home() {

  const [metro, setMetro] = useState()
  const [stations, setStations] = useState()
  const [selectedStation, setSelectedStation] = useState()
  const [schedules, setSchedules] = useState()

  useEffect(() => {
    if (selectedStation) {
      getSchedule(metro, selectedStation).then(schedules => {
        setSchedules(schedules)
      }).catch(err => {
        setSchedules()
      })
    }
  }, [selectedStation])

  const handleMetroChange = async (metro) => {
    setMetro(metro)
    const stations = await getStations(metro)
    setStations(stations)
    setSelectedStation(stations[0].slug)
  }

  return (
    <div className="flex w-full h-full">
      <div className="flex flex-col h-screen justify-start pt-16 py-12 items-center fixed left-0 w-2/5 bg-amber-500">
        <Title className="uppercase pt-16 text-xl text-gray-100 font-bold" text="Choisissez votre ligne de métro" />
        <div className="flex w-full px-12 flex-wrap justify-center mt-4">
          {metros?.map(({ metro, url }, i) => (
            <div key={i} onClick={() => handleMetroChange(metro)} className="px-2 py-2 bg-gray-100 mx-2 my-2 rounded cursor-pointer">
              <IconSmall key={metro} metro={metro} url={url} />
            </div>
          ))}
        </div>

        {(metro && stations) && (
          <div className="w-full mt-12 flex items-center flex-col">
            <Title className="uppercase text-xl mb-4 text-gray-100 font-bold" text="Choisissez votre station" />
            <div className="relative w-full flex justify-center px-12">
              <select onChange={(e) => setSelectedStation(e.target.value)} className="w-2/3 px-12 appearance-none font-medium cursor-pointer bg-gray-100 border border-gray-100 text-gray-700 py-2 rounded leading-tight focus:outline-none" id="grid-state">
                {stations.map(({ name, slug }) => (
                  <option key={slug} value={slug}>{name}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-24 flex items-center px-12 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>

          </div>

        )}
      </div>

      <div className={`${schedules ? 'h-full' : 'h-screen'} flex flex-col justify-start items-center w-3/5 py-12`} style={{ marginLeft: '40%' }}>
        <img src="/images/logo.svg" alt="logo ferway" />
        <div className="flex w-full items-center mt-16 flex-col">
          {(schedules && schedules.length > 1) ? schedules.map(({ destination, message }, i) => (
            <InfoMetro key={i} destination={destination} information={message} />
          )) : (
            <p>Veuillez sélectionner une autre ligne de métro ! </p>
          )
          }
        </div>
      </div>
    </div >
  )
}

export default Home

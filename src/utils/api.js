import axios from 'axios'

export const getStations = async (metro) => {
    const { data } = await axios.get(`https://api-ratp.pierre-grimaud.fr/v4/stations/metros/${metro}?way=A`)
    const stations = data.result.stations

    return stations
}

export const getSchedule = async (metro, station) => {
    const { data } = await axios.get(`https://api-ratp.pierre-grimaud.fr/v4/schedules/metros/${metro}/${station}/A+R`)
    const schedule = data.result.schedules

    return schedule
}

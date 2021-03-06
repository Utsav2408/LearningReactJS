import React, { useEffect, useState } from 'react'
import "./style.css"
import Weathercard from './weathercard'

const Temp = () => {

    const [searchValue, setSearchValue] = useState("Kolkata")
    const [tempInfo, setTempInfo] = useState({})
    const getWeatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=fca6b5dbc6933ba50b2acabe84b25cea`
            const res = await fetch(url)
            const data = await res.json()
            const { temp, humidity, pressure } = data.main
            const { main: weathermood } = data.weather[0]
            const { name } = data
            const { speed } = data.wind
            const { country, sunset } = data.sys
            const myNewWeatherInfo = {
                temp, humidity, pressure, weathermood, name, speed, country, sunset
            }
            setTempInfo(myNewWeatherInfo)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        document.title = `WeatherApp`
        getWeatherInfo()
    }, [])
    return (
        <>
            <div className='wrap'>
                <div className='search'>
                    <input type="search"
                        placeholder='search...'
                        autoFocus
                        id='search'
                        className='searchTerm'
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />

                    <button className='searchButton' type='button' onClick={getWeatherInfo}>Search</button>
                </div>
            </div>

            <Weathercard tempInfo={tempInfo} />
        </>
    )
}

export default Temp
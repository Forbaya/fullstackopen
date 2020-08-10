import React, {useEffect, useState} from 'react'
import axios from "axios";

const Country = ({filteredCountries, setFilteredCountries}) => {
    const [weather, setWeather] = useState({})

    useEffect(() => {
        const params = {
            access_key: process.env.REACT_APP_API_KEY,
            query: filteredCountries[0] ? filteredCountries[0].name : '',
        }

        axios
            .get('http://api.weatherstack.com/current', {params})
            .then(response => {
                setWeather(response.data)
            })
    }, [filteredCountries])

    const render = () => {
        if (filteredCountries.length > 10) {
            return <div>Too many matches, specify another filter</div>
        }

        if (filteredCountries.length === 1) {
            const country = filteredCountries[0]

            console.log(weather.current)

            return (
                <div>
                    <h1>{country.name}</h1>
                    <div>capital {country.capital}</div>
                    <div>population {country.population}</div>
                    <h2>languages</h2>
                    <ul>
                        {country.languages.map(
                            language => <li key={country.name+"-"+language.name}>{language.name}</li>
                        )}
                    </ul>
                    <img src={country.flag} width={190} height={100}/>
                    <h2>Weather in {country.capital}</h2>
                    <div><b>temperature: </b>{weather.current.temperature} celcius</div>
                    <img src={weather.current.weather_icons[0]} />
                    <div><b>wind: </b> {weather.current.wind_speed} mph direction {weather.current.wind_dir}</div>
                </div>
            )
        }

        const showHandler = (alpha3Code) => {
            const country = filteredCountries.find(c => c.alpha3Code === alpha3Code)
            setFilteredCountries([country])
        }

        return (
            <div>
                {filteredCountries.map(country =>
                    <div key={country.name}>
                        <span>{country.name}</span>
                        <button onClick={() => showHandler(country.alpha3Code)}>show</button>
                    </div>
                )}
            </div>
        )
    }

    return (
        <div>
            {render()}
        </div>
    )
}

export default Country
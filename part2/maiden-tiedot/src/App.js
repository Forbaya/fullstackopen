import React, { useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                console.log(response.data)
                setCountries(response.data)
            })
    }, [])

    return (
        <div>
            {countries.map(country =>
                <div key={country.name}>{country.name}</div>
            )}
        </div>
    )
}

export default App

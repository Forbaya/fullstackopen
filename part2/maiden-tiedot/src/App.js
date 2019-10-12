import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Country from "./Country";

const App = () => {
    const [countries, setCountries] = useState([])
    const [filteredCountries, setFilteredCountries] = useState([])
    const [filter, setFilter] = useState('')

    const handleFilterChange = (event) => {
        setFilter(event.target.value)
    }

    useEffect(() => {
        const newFilteredCountries = countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))
        setFilteredCountries(newFilteredCountries)
    }, [filter])

    useEffect(() => {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                setCountries(response.data)
            })
    }, [])



    return (
        <div>
            filter countries <input value={filter} onChange={handleFilterChange} />
            <Country filteredCountries={filteredCountries}
                     setFilteredCountries={setFilteredCountries}/>
        </div>
    )
}

export default App

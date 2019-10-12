import React from 'react'

const Country = ({filteredCountries, setFilteredCountries}) => {
    const render = () => {
        if (filteredCountries.length > 10) {
            return <div>Too many matches, specify another filter</div>
        }

        if (filteredCountries.length === 1) {
            const country = filteredCountries[0]

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
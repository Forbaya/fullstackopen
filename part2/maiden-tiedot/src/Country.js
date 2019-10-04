import React from 'react'

const Country = ({filteredCountries}) => {
    const render = () => {
        if (filteredCountries.length > 10) {
            return <div>Too many matches, specify another filter</div>
        }

        if (filteredCountries.length === 1) {
            const country = filteredCountries[0]
            console.log(country)

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

        return (
            <div>
                {filteredCountries.map(country =>
                    <div key={country.name}>{country.name}</div>
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
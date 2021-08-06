import React, { useEffect, useState } from 'react';


function Home() {
    const [countries, setCountries] = useState([])

    useEffect(async () => {
        const res = await fetch('https://restcountries.eu/rest/v2/region/asia')
        const data = await res.json()
        await setCountries(data)
    }, [])


    return (

        <div className="container">
            <div className="py-4">

                <div className="flex container text-center mx-auto mb-16">
                    <h1 >Asian countries</h1>
                </div>

                <table class="table border shadow">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">flag</th>
                            <th scope="col">population</th>
                            <th scope="col">region</th>
                            <th scope="col">capital</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {countries.map((country, index) => (
                            <tr>
                                <th scope="row">{country.name} </th>
                                <td><img src={country.flag} /> </td>
                                <td>{country.population}</td>
                                <td>{country.region}</td>
                                <td>{country.capital}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home

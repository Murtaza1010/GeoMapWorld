const countryInfoUrl = process.env.REACT_APP_COUNTRY_INFO
const userNameGeoNames = process.env.REACT_APP_MY_USERNAME
const weatherInfoUrl = process.env.REACT_APP_WEATHER_INFO
const flagApi = process.env.REACT_APP_FLAG_API
const countryAstronomyApi = process.env.REACT_APP_COUNTRY_ASTRONOMY_API
const countryAstronomyApiKey = process.env.REACT_APP_COUNTRY_ASTRONOMY_KEY
const cityUrl = process.env.REACT_APP_CITY_API
const timeUrl = process.env.REACT_APP_COUNTRY_TIME_API


// conerating raw api response to somethign that we can use
async function checkAndReturn(resp) {
    if (resp.ok) {
        const jsonResp = await resp.json()
        return jsonResp
    } else {
        return { status: resp.status, statusText: resp.statusText }
    }
}
export const countryGeneralInfo = {
    async byCountry(countryIso) { // returns Geo information for a choesen country
        const resp = await fetch(
            `${countryInfoUrl}${countryIso}&username=${userNameGeoNames}&style=full`,
        )
        const data = checkAndReturn(resp)
        return data
    },


    // async countryFlag(country) {
    //     // const resp = await fetch(`${flagApi}${country}`)

    //     // // const data = checkAndReturn(resp)
    //     // return resp
    //     var requestOptions = {
    //         method: 'GET',
    //         redirect: 'follow'
    //     };

    //     fetch(`https://countryflagsapi.com/png/${country}`, requestOptions)
    //         .then(response => response.text())
    //         .then(result => console.log(result))
    //         .catch(error => console.log('error', error));
    // },
    async countryAstronomy(lat, lng) {
        const resp = await fetch(`${countryAstronomyApi}apiKey=${countryAstronomyApiKey}&lat=${lat}&long=${lng}`)
        const data = checkAndReturn(resp)
        return data

    },
    async countryTime(lat, lng) {
        const resp = await fetch(`http://api.geonames.org/timezoneJSON?lat=${lat}&lng=${lng}&username=${userNameGeoNames}`)
        // const data = checkAndReturn(resp)
        const data = await resp.json()
        console.log(data)
        return data

    },



    async geoCodeCapital(capital) { //  returns lat and lng points for the capital of 
        const option = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'a772b7be22msh4cf849c381529bep175234jsn1d1ca5f7f09a',
                'X-RapidAPI-Host': 'forward-reverse-geocoding.p.rapidapi.com'
            }
        };
        try {
            const resp = await fetch(`https://forward-reverse-geocoding.p.rapidapi.com/v1/forward?city=${capital}&accept-language=en&polygon_threshold=0.0`, option)
            const data = await resp.json()
            return data
        } catch (error) {
            console.log(error)
        }

    },
    // take lat and lng and return  weather information for the capital city 
    async weatherByCapitalLatLong(lat, lng) {
        const resp = await fetch(`${weatherInfoUrl}lat=${lat}&lng=${lng}&username=${userNameGeoNames}&style=full`
        )
        const data = checkAndReturn(resp)

        return data

    },
    async citiesNearBy(north, south, east, west) {
        const resp = await fetch(`http://api.geonames.org/citiesJSON?north=${north}&south=${south}&east=${east}&west=${west}&lang=en&username=${userNameGeoNames}`)
        // const data = await resp.json()
        const data = checkAndReturn(resp)

        return data
    },
    // async citiesNearBy(lng, lat) {
    //     let lngStatus;
    //     if (lng >= 0) {
    //         lngStatus = '+'
    //     }
    //     let latStatus
    //     if (lat >= 0) {
    //         latStatus = '+'
    //     }

    //     const options = {
    //         method: 'GET',
    //         headers: {
    //             'X-RapidAPI-Key': 'a772b7be22msh4cf849c381529bep175234jsn1d1ca5f7f09a',
    //             'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    //         }
    //     };

    //     const resp = await fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/locations/${lngStatus}${lng}${latStatus}${lat}/nearbyCities?radius=100`, options)
    //     const citiesData = await resp.json()

    //     return citiesData

    async covidInfo(country) {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'a772b7be22msh4cf849c381529bep175234jsn1d1ca5f7f09a',
                'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
            }
        };

        const resp = await fetch(`https://covid-193.p.rapidapi.com/statistics?country=${country}`, options)
        const data = await resp.json()
        return data



    },

}
const api = { countryGeneralInfo }
export default api

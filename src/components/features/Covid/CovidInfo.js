import React from 'react'
import { CovidInfoContainer, CovidDataTable } from './CovidInfoStyles'
import { addCovid } from '../CountryInfo/currentCountrySlice'
import {
    selectCovidInfo,
    selectedCountryName,
} from '../CountryInfo/currentCountrySlice'
import api from '../../../api/api'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'


const CovidInfo = () => {
    const covidData = useSelector(selectCovidInfo)
    const countryName = useSelector(selectedCountryName)
    const dispatch = useDispatch()




    // onChange of countryName the apicall runs
    useEffect(() => {
        async function covidApiCall() {
            if (countryName) {
                const resp = await api.countryGeneralInfo.covidInfo(countryName)

                if (resp.response[0]) {
                    dispatch(addCovid(resp.response[0]))
                    console.log(resp.response[0])

                }

            }
        }
        covidApiCall()
    }, [countryName])

    return (
        <CovidInfoContainer>
            {/* < */}
            <h1>{covidData?.continent}</h1>
        </CovidInfoContainer>
    )
}

export default CovidInfo

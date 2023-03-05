import React, { useEffect } from 'react'
import { TimeContainer, Text } from './TimeZoneElements'
import { useSelector, useDispatch } from 'react-redux';
import api from '../../../api/api';
import { selectCountryTime, addCountryTime, selectedCountryName, selectCapital } from './currentCountrySlice';




const TimeZone = () => {
    const countryName = useSelector(selectedCountryName)
    const capitalData = useSelector(selectCapital)
    const dispatch = useDispatch()
    const countryTimeData = useSelector(selectCountryTime)

    useEffect(() => {
        async function cTimeApiCall() {
            if (capitalData) {
                const resp = await api.countryGeneralInfo.countryTime(capitalData.lat, capitalData.lng)
                console.log(resp)
            }
        }
        cTimeApiCall()
    }, [capitalData])
    return (
        <TimeContainer>
            <Text>
                <h2>"Europe/Vienna"</h2>
                <h2>2023-03-05 20:44</h2>

            </Text>
        </TimeContainer>
    )
}

export default TimeZone
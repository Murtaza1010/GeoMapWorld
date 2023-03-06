import React, { useEffect } from 'react'
import { TimeContainer, Text } from './TimeZoneElements'
import { useSelector, useDispatch } from 'react-redux';
import api from '../../../api/api';
import { selectedTime, addCountryTime, selectedCountryName, selectCapital } from './currentCountrySlice';




const TimeZone = () => {
    const countryName = useSelector(selectedCountryName)
    const capitalData = useSelector(selectCapital)
    const dispatch = useDispatch()
    const countryTimeData = useSelector(selectedTime)
    console.log(countryTimeData)

    useEffect(() => {
        async function cTimeApiCall() {
            if (countryName && capitalData) {
                const resp = await api.countryGeneralInfo.countryTime(capitalData.lat, capitalData.lon)

                if (resp) {
                    dispatch(addCountryTime(resp))
                }
            }
        }
        cTimeApiCall()
    }, [countryName, capitalData])
    return (
        <TimeContainer>
            <Text>
                <h3>{countryTimeData?.timezoneId || ''}</h3>

                <h3>{countryTimeData?.time || ''}</h3>

            </Text>
        </TimeContainer>
    )
}

export default TimeZone
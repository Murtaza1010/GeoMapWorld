import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Table, Title, Image, Data, North, South, East, West, Compass, InnerCompass } from './CountryInfoStyles';
import { selectCities, selectCapital, selectCountryInfo, selectedIso2, selectFlag, selectedCountryName, addCities } from './currentCountrySlice';
import markerIcon from '../../../resources/images/markericon.png'
import api from '../../../api/api';
import ReactCountryFlag from "react-country-flag"
// import { Country, State, City } from 'country-state-city';
import cityNames from '../../../resources/countries+states+cities.json'

const CountryInfo = () => {
    const capitalData = useSelector(selectCapital)
    const data = useSelector(selectCountryInfo);
    const countryName = useSelector(selectedCountryName)
    const countryIso = useSelector(selectedIso2)
    const dispatch = useDispatch();
    const countryFlag = useSelector(selectFlag);
    const citiesData = useSelector(selectCities);

    // const countryFlagSrc = '';

    // useEffect(() => {
    //     async function flagApiCall() {
    //         if (countryIso) {
    //             const resp = await api.countryGeneralInfo.countryFlag(countryIso)

    //             dispatch(addFlags(resp))
    //         }
    //     }
    //     flagApiCall()
    // }, [countryIso])

    //  updated tghe country Flag 
    // useEffect(() => {
    //     async function CitiesApiCall() {
    //         if (capitalData) {
    //             const resp = await api.countryGeneralInfo.citiesNearBy(capitalData.lon, capitalData.lat)
    //             if (resp)
    //                 console.log(resp)
    //             dispatch(addCities(resp))
    //         }

    //     }
    //     CitiesApiCall()
    // }, capitalData)




    // api calls returns data in the form of png, DOM cannot read it, so i have to convert make it readable

    return (
        <Table>
            <Title><th>{data?.countryName} {data?.isoAlpha3}</th></Title>
            <Image>
                <ReactCountryFlag
                    countryCode={countryIso}
                    svg
                    style={{
                        width: '8em',
                        height: '8em',
                    }}
                    title={countryName}
                />

            </Image>


            <Data>
                <tr>
                    <td>Capital</td>
                    <td>{data?.capital}</td>
                </tr>
                <tr>
                    <td>Continent</td>
                    <td>{data?.continent}</td>
                </tr>

                <tr>
                    <td>Languages</td>
                    <td>{data?.languages}</td>
                </tr>
                <tr>
                    <td>Population</td>
                    <td>{data?.population}</td>
                </tr>
                <tr>
                    <td>Currency</td>
                    <td>{data?.currencyCode}</td>
                </tr>
                <tr>
                    <td>Area-SqKm</td>
                    <td>{data?.areaInSqKm}</td>
                </tr>
                <tr>
                    <td>South</td>
                    <td>{data?.south}</td>
                </tr>
                <tr>
                    <td>East</td>
                    <td>{data?.east}</td>
                </tr>
                <tr>
                    <td>West</td>
                    <td>{data?.west}</td>
                </tr>
                <tr>
                    <td>North</td>
                    <td>{data?.north}</td>
                </tr>


            </Data>


        </Table>
    )
}

export default CountryInfo
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Table, Title, Image, Data } from './CountryInfoStyles';
import { addFlags, selectCountryInfo, selectedIso2, selectFlag, selectedCountryName } from './currentCountrySlice';
import markerIcon from '../../../resources/images/markericon.png'
import api from '../../../api/api';

const CountryInfo = () => {

    const data = useSelector(selectCountryInfo);
    const countryName = useSelector(selectedCountryName)
    const countryIso = useSelector(selectedIso2)
    const dispatch = useDispatch();
    const countryFlag = useSelector(selectFlag);

    const countryFlagSrc = '';

    useEffect(() => {
        async function flagApiCall() {
            if (countryIso) {
                const resp = await api.countryGeneralInfo.countryFlag(countryIso)

                dispatch(addFlags(resp))
            }
        }
        flagApiCall()
    }, [countryIso])
    // api calls returns data in the form of png, DOM cannot read it, so i have to convert make it readable

    return (
        <Table>
            <Title><th>{data?.countryName} {data?.isoAlpha3}</th></Title>
            <Image><img src={markerIcon} alt='flag' width="200"
                height="200" /></Image>


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
            </Data>


        </Table>
    )
}

export default CountryInfo
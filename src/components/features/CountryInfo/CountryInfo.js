import React from 'react'
import { useSelector } from 'react-redux';
import { Table } from './CountryInfoStyles';
import { selectCountryInfo } from './currentCountrySlice';

const CountryInfo = () => {
    const data = useSelector(selectCountryInfo);

    return (
        <Table>
            <tr>

                <th>{data?.countryName} {data?.isoAlpha3}</th>
            </tr>
            <tr>
                <td>capital</td>
                <td>{data?.capital}</td>
            </tr>
            <tr>
                <td>continent</td>
                <td>{data?.continent}</td>
            </tr>

            <tr>
                <td>languages</td>
                <td>{data?.languages}</td>
            </tr>
            <tr>
                <td>population</td>
                <td>{data?.population}</td>
            </tr>
            <tr>
                <td>currency Code</td>
                <td>{data?.currencyCode}</td>
            </tr>
            <tr>
                <td>area In SqKm</td>
                <td>{data?.areaInSqKm}</td>
            </tr>
            <tr>
                <td>isoAlpha3</td>
                <td>{data?.isoAlpha3}</td>
            </tr>
            <tr>
                <td>fipsCode</td>
                <td>{data?.fipsCode}</td>
            </tr>
            <tr>
                <td>south</td>
                <td>{data?.south}</td>
            </tr>

            <tr>
                <td>north</td>
                <td>{data?.north}</td>
            </tr>
            <tr>
                <td>east</td>
                <td>{data?.east}</td>
            </tr>
            <tr>
                <td>west</td>
                <td>{data?.west}</td>
            </tr>
        </Table>
    )
}

export default CountryInfo
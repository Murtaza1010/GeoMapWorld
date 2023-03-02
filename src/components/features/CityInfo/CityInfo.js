import React from 'react'


import {
    CityInfoContainer,
    Top,
    Body,
    Titles,
    Coords,
}
    from './CityInfoStyles';




const CityInfo = () => {
    return (
        <CityInfoContainer>
            <Top>
                <h1>CityName</h1>

            </Top>
            <Body>
                <Titles>
                    <h2>CountryCode:</h2>
                    <h2>Population:</h2>
                    <h2>wikipedia: </h2>
                </Titles>
                <Coords>
                    <h3>Lat:</h3>
                    <h3>Lng:</h3>
                </Coords>



            </Body>
        </CityInfoContainer>
    )
}

export default CityInfo
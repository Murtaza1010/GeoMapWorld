import React from 'react'
import {
    CovidInfoContainer,
    Row,
    Title,
    Column,
    Heading,
    SubHeadingButtons,
    Cases,
    Deaths,
    Tests,
} from './CovidInfoStyles'
import { addCovid } from '../CountryInfo/currentCountrySlice'
import {
    selectCovidInfo,
    selectedCountryName,
} from '../CountryInfo/currentCountrySlice'
import api from '../../../api/api'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { FaSortDown } from 'react-icons/fa'
import { useState } from 'react'

const CovidInfo = () => {
    const covidData = useSelector(selectCovidInfo)
    const countryName = useSelector(selectedCountryName)
    const dispatch = useDispatch()
    const [showCase, setShowCase] = useState(false)
    const [showDeaths, setShowDeaths] = useState(false)
    const [showTests, setShowTests] = useState(false)

    const openCases = () => {
        setShowCase(true)
        setShowDeaths(false)
        setShowTests(false)
    }
    const openDeaths = () => {
        setShowCase(false)
        setShowDeaths(true)
        setShowTests(false)
    }
    const openTests = () => {
        setShowCase(false)
        setShowDeaths(false)
        setShowTests(true)
    }

    // onChange of countryName the apicall runs
    useEffect(() => {
        async function covidApiCall() {
            if (countryName) {
                const resp = await api.countryGeneralInfo.covidInfo(countryName)

                if (resp.response[0]) {
                    dispatch(addCovid(resp.response[0]))
                }
            }
        }
        covidApiCall()
    }, [countryName])

    return (
        <CovidInfoContainer>
            <Title>
                <h3>
                    {covidData?.country || ''} ¬ {covidData?.day || ''}
                </h3>
            </Title>
            <SubHeadingButtons>
                <Cases onClick={openCases}>
                    Cases <FaSortDown />{' '}
                </Cases>
                <Deaths onClick={openDeaths}>
                    {' '}
                    Deaths <FaSortDown />{' '}
                </Deaths>
                <Tests onClick={openTests}>
                    Tests
                    <FaSortDown />{' '}
                </Tests>
            </SubHeadingButtons>
            {showCase && (
                <Row>
                    <Column>
                        <h4>Active</h4>
                        <p>{covidData?.cases.active || null}</p>
                    </Column>

                    {covidData?.cases.new ? (
                        <Column>
                            <h4>New</h4>
                            <p>{covidData?.cases.new}</p>
                        </Column>
                    ) : null}

                    <Column>
                        <h4>Critical</h4>
                        <p>{covidData?.cases.critical || ''}</p>
                    </Column>
                    <Column>
                        <h4>Recovered</h4>
                        <p>{covidData?.cases.recovered || ''}</p>
                    </Column>
                    <Column>
                        <h4>Total</h4>
                        <p>{covidData?.cases.total || ''}</p>
                    </Column>

                </Row>
            )} 
            {showDeaths && (
                <Row>
                    <Column>
                        <h4>New</h4>
                        <p>{covidData?.deaths.new || null}</p>
                    </Column>
                    <Column>
                        <h4>Total</h4>
                        <p>{covidData?.deaths.total || null}</p>
                    </Column>
                </Row>
            
            )}
            {showTests && (
                <Row>
                    <Column>
                    <h4>Total</h4>
                    <p>{covidData?.tests.total || ''}</p>
                    </Column>
                </Row>
            )}

        </CovidInfoContainer>
    )
}
export default CovidInfo

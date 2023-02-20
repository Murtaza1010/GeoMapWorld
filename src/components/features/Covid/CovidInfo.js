import React from "react";
import {
    CovidInfoContainer,
    Title,
    SubHeadingButtons,
    Cases,
    Deaths,
    Tests,
    Column,
    Case,
    Death,
    Test,
} from "./CovidInfoStyles";
import { addCovid } from "../CountryInfo/currentCountrySlice";
import {
    selectCovidInfo,
    selectedCountryName,
    selectedIso2,
    selectedIso3,
} from "../CountryInfo/currentCountrySlice";
import api from "../../../api/api";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FaSortDown } from "react-icons/fa";
import { useState } from "react";

const CovidInfo = () => {
    const covidData = useSelector(selectCovidInfo);
    const countryName = useSelector(selectedCountryName);
    // const countryISo = useSelector(selectedIso2);
    // const countryIso3 = useSelector(selectedIso3);
    const dispatch = useDispatch();
    const [showCase, setShowCase] = useState(false);
    const [showDeaths, setShowDeaths] = useState(false);
    const [showTests, setShowTests] = useState(false);

    const openCases = () => {
        setShowCase(true);
        setShowDeaths(false);
        setShowTests(false);
    };
    const openDeaths = () => {
        setShowCase(false);
        setShowDeaths(true);
        setShowTests(false);
    };
    const openTests = () => {
        setShowCase(false);
        setShowDeaths(false);
        setShowTests(true);
    };

    // onChange of countryName the apicall runs
    // country names containing white-spaces are recognised to triggering the api call
    // CountryCodes Is02, Iso3  Did not work
    // Come up with new CountryCode maybe
    //https://stackoverflow.com/questions/1731190/check-if-a-string-has-white-space

    useEffect(() => {
        function hasWhiteSpace(s) {
            return (/\s/).test(s);
        }
        async function covidApiCall() {
            let name, firstCharCN, joinedFirstChar;
            if (countryName) {
                if (hasWhiteSpace(countryName)) {
                    name = countryName.split(" ");
                    firstCharCN = name.map((Element) => Element.charAt(""));

                    joinedFirstChar = firstCharCN.join("");
                    console.log(joinedFirstChar)
                }
                const resp = await api.countryGeneralInfo.covidInfo(countryName);
                const respCountryJoinedFirstChar = await api.countryGeneralInfo.covidInfo(
                    joinedFirstChar
                );

                if (resp.response[0]) {
                    // console.log("countryName used for Covid ")
                    dispatch(addCovid(resp.response[0]));
                } else {
                    dispatch(addCovid(respCountryJoinedFirstChar.response[0]));
                }
            }


        }

        covidApiCall();
    }, [countryName]);

    return (
        <CovidInfoContainer>
            <Title>
                <h3>
                    {covidData?.country || ""} ¬ {covidData?.day || ""}
                </h3>
            </Title>
            <SubHeadingButtons>
                <Cases onClick={openCases}>
                    Cases <FaSortDown />{" "}
                </Cases>
                <Deaths onClick={openDeaths}>
                    {" "}
                    Deaths <FaSortDown />{" "}
                </Deaths>
                <Tests onClick={openTests}>
                    Tests
                    <FaSortDown />{" "}
                </Tests>
            </SubHeadingButtons>
            {showCase && (
                <Case>
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
                        <p>{covidData?.cases.critical || ""}</p>
                    </Column>
                    <Column>
                        <h4>Recovered</h4>
                        <p>{covidData?.cases.recovered || ""}</p>
                    </Column>
                    <Column>
                        <h4>Total</h4>
                        <p>{covidData?.cases.total || ""}</p>
                    </Column>
                </Case>
            )}
            {showDeaths && (
                <Death>
                    <Column>
                        <h4>New</h4>
                        <p>{covidData?.deaths.new || null}</p>
                    </Column>
                    <Column>
                        <h4>Total</h4>
                        <p>{covidData?.deaths.total || null}</p>
                    </Column>
                </Death>
            )}
            {showTests && (
                <Test>
                    <Column>
                        <h4>Total</h4>
                        <p>{covidData?.tests.total || ""}</p>
                    </Column>
                </Test>
            )}
        </CovidInfoContainer>
    );
};
export default CovidInfo;

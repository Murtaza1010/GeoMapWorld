import { createSlice } from "@reduxjs/toolkit";


const currentCountrySlice = createSlice({
    name: 'countryInfo',
    initialState: {
        name: "",
        iso_a2: '',
        countryGeneralInfo: {},
        capital: {},
        weather: {},
        covidInfo: {},

    },
    reducers: {
        addCurrentCountry(state, action) {
            state.name = action.payload;
        },
        updateCountryInfo(state, action) {
            state.countryGeneralInfo = action.payload;
        },
        addCurrentIso(state, action) {
            state.iso_a2 = action.payload;
        },
        addCapital(state, action) {
            state.capital = action.payload;
        },
        addWeather(state, action) {
            state.weather = action.payload
        },
        addCovid(state, action) {
            state.covidInfo = action.payload;
        }

    }

})
export const { addCurrentCountry, updateCountryInfo, addCurrentIso, addCapital, addWeather, addCovid } = currentCountrySlice.actions;
export const selectedIso2 = (state) => state.countryInfo.iso_a2
export const selectedCountryName = (state) => state.countryInfo.name
export const selectCountryInfo = (state) => state.countryInfo.countryGeneralInfo
export const selectCapital = (state) => state.countryInfo.capital;
export const selectWeatherInfo = (state) => state.countryInfo.weather;
export const selectCovidInfo = (state) => state.countryInfo.covidInfo;
export default currentCountrySlice.reducer;
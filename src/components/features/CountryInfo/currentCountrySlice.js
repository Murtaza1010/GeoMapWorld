import { createSlice } from "@reduxjs/toolkit";


const currentCountrySlice = createSlice({
    name: 'countryInfo',
    initialState: {
        name: "",
        iso_a2: '',
        iso_a3: '',
        countryGeneralInfo: {},
        countryFlag: {},
        countryAstronomy: {},
        capital: {},
        weather: {},
        covidInfo: {},

    },
    reducers: {
        addCurrentCountry(state, action) {
            state.name = action.payload;
        },
        addCurrentIso3(state, action) {
            state.iso_a3 = action.payload
        },
        updateCountryInfo(state, action) {
            state.countryGeneralInfo = action.payload;
        },
        addFlags(state, action) {
            state.countryFlag = action.payload;
        },
        addCountryAstronomy(state, action) {
            state.countryAstronomy = action.payload;
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
export const { addCurrentCountry, addCurrentIso3, updateCountryInfo, addFlags, addCountryAstronomy, addCurrentIso, addCapital, addWeather, addCovid } = currentCountrySlice.actions;
export const selectedIso2 = (state) => state.countryInfo.iso_a2
export const selectedIso3 = (state) => state.countryInfo.iso_a3
export const selectedCountryName = (state) => state.countryInfo.name
export const selectCountryInfo = (state) => state.countryInfo.countryGeneralInfo
export const selectFlag = (state) => state.countryInfo.countryFlag;
export const selectCountryAstronomy = (state) => state.countryInfo.countryAstronomy;
export const selectCapital = (state) => state.countryInfo.capital;
export const selectWeatherInfo = (state) => state.countryInfo.weather;
export const selectCovidInfo = (state) => state.countryInfo.covidInfo;
export default currentCountrySlice.reducer;
import { createSlice } from "@reduxjs/toolkit";


const currentCountrySlice = createSlice({
    name: 'countryInfo',
    initialState: {
        name: "",
        iso_a2: '',
        countryInfo: {}
    },
    reducers: {
        addCurrentCountry(state, action) {
            state.name = action.payload;
        },
        updateCountryInfo(state, action) {
            state.countryInfo = action.payload;
        },
        addCurrentIso(state, action) {
            state.iso_a2 = action.payload;
        }

    }

})
export const { addCurrentCountry, updateCountryInfo, addCurrentIso } = currentCountrySlice.actions;
export default currentCountrySlice.reducer;
import { createSlice } from "@reduxjs/toolkit";


const currentCountrySlice = createSlice({
    name: 'afghanistan',
    countryInfo: {},
    initialState:{
        name: [],
        countryInfo: {
        
        }
    },
    reducers:{
        selectName(state, action) {
            state.name=action.payload;
        },
        updateCountryInfo(state, action) {
            state.countryInfo= action.payload;
        }
    }

})
export const {selectName, updateCountryInfo} = currentCountrySlice.actions;
export default currentCountrySlice.reducer;
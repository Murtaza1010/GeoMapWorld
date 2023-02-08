
import { configureStore } from "@reduxjs/toolkit";
import currentCountrySlice from '../../src/components/features/CountryInfo/currentCountrySlice';


export const store = configureStore({
    reducer:{
        countryInfoReducers: currentCountrySlice,
    }
})
import { configureStore } from '@reduxjs/toolkit'
import covidSlice from './CovidinfoSlice'
import vaccineSlice from './VaccineSlice'
import countrySlice from './CountrySlice'

export default configureStore({
  reducer: {
    covidData: covidSlice,
    vaccineData: vaccineSlice,
    countryData: countrySlice,
  }
})
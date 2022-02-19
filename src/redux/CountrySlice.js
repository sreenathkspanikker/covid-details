import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { GET } from '../server'

const getCountryInfo = createAsyncThunk('ap/countries', async ()=> {
    const res = await GET('/countries')
    if (res) return res
})

export const countrySlice = createSlice({
    name: 'countrylist',
    initialState: {
        data: [],
        error: '',
        loading: false
    },
    extraReducers: {
        [getCountryInfo.fulfilled]: (state, action) => {
            state.loading = false
            state.data = action.payload?.sort((a, b) => a.cases < b.cases ? 1 : a.cases > b.cases ? -1 : 0);
        },
        [getCountryInfo.pending]: (state, action) => {
            state.loading = true
        },
        [getCountryInfo.rejected]: (state, action) => {
            state.loading = false
            state.error = 'Some error accured';
        },
    }
})

export { getCountryInfo }
export default countrySlice.reducer
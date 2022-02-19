import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { GET } from '../server'

const getVaccineInfo = createAsyncThunk('app/vaciine', async () => {
    const res = await GET('/vaccine')
    if (res) return res
})

export const vaccineSlice = createSlice ({
    name: 'vaccine',
    initialState: {
        data: [],
        error: '',
        loading: false
    },
    extraReducers: {
        [getVaccineInfo.fulfilled]: (state, action) => {
            state.loading = false
            state.data = action.payload;
        },
        [getVaccineInfo.pending]: (state, action) => {
            state.loading = true
        },
        [getVaccineInfo.rejected]: (state, action) => {
            state.loading = false
            state.error = 'Some error accured';
        },
    }
})

export {getVaccineInfo}
export default vaccineSlice.reducer
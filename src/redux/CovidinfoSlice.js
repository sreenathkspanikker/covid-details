import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { GET } from '../server'

const getDtaInfo = createAsyncThunk('ap/data', async ()=> {
    const res = await GET('/all')
    if (res) return res
})

export const covidSlice = createSlice({
    name: 'covidinfo',
    initialState: {
        data: {},
        error: '',
        loading: false
    },
    extraReducers: {
        [getDtaInfo.fulfilled]: (state, action) => {
            state.loading = false
            state.data = action.payload;
        },
        [getDtaInfo.pending]: (state, action) => {
            state.loading = true
        },
        [getDtaInfo.rejected]: (state, action) => {
            state.loading = false
            state.error = 'Some error accured';
        },
    }
})

export { getDtaInfo }
export default covidSlice.reducer
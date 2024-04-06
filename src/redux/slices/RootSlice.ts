import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: "Name",
        style: "Style",
        abv: "ABV",
        brewery: "Brewery"
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload },
        chooseStyle: (state, action) => { state.style = action.payload },
        chooseABV: (state, action) => { state.abv = action.payload },
        chooseBrewery: (state, action) => { state.brewery = action.payload },
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseStyle, chooseABV, chooseBrewery } = rootSlice.actions
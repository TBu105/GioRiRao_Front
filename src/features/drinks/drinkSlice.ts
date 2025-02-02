import { createAppSlice } from "../../app/createAppSlice"
import type { PayloadAction } from "@reduxjs/toolkit"

export interface DrinkSliceState {
  clickedCategory: string
  searchKey: string
}

const initialState: DrinkSliceState = {
  clickedCategory: "coffee",
  searchKey: "",
}

export const drinkSlice = createAppSlice({
  name: "drink",
  initialState,
  reducers: create => ({
    setClickedCategory: create.reducer(
      (state, action: PayloadAction<string>) => {
        state.clickedCategory = action.payload
      },
    ),
    setSearchKey: create.reducer((state, action: PayloadAction<string>) => {
      state.searchKey = action.payload
      console.log("searchKey being change", state.searchKey)
    }),
  }),
  selectors: {
    selectClickedCategory: drink => drink.clickedCategory,
    selectSearchKey: drink => drink.searchKey,
  },
})

export const { setClickedCategory, setSearchKey } = drinkSlice.actions

export const { selectClickedCategory, selectSearchKey } = drinkSlice.selectors

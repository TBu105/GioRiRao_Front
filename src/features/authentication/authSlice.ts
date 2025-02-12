import { createAppSlice } from "../../app/createAppSlice"
import type { PayloadAction } from "@reduxjs/toolkit"

export interface AuthSliceState {
  isAuthenticated: boolean
}

const initialState: AuthSliceState = {
  isAuthenticated: false,
}

export const authSlice = createAppSlice({
  name: "auth",
  initialState,
  reducers: create => ({
    setIsAuthenticated: create.reducer(
      (state, action: PayloadAction<boolean>) => {
        console.log(
          "isAuthentication before changing value authSlice",
          state.isAuthenticated,
        )
        state.isAuthenticated = action.payload
        console.log(
          "isAuthentication is changing value authSlice",
          state.isAuthenticated,
        )
      },
    ),
  }),
  selectors: {
    selectIsAuthenticated: auth => auth.isAuthenticated,
  },
})

export const { setIsAuthenticated } = authSlice.actions

export const { selectIsAuthenticated } = authSlice.selectors

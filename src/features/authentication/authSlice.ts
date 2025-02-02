import { createAppSlice } from "../../app/createAppSlice"
import type { PayloadAction } from "@reduxjs/toolkit"

export interface AuthSliceState {
  accessToken?: string
  isAuthenticated: boolean
}

const initialState: AuthSliceState = {
  accessToken: undefined,
  isAuthenticated: false,
}

export const authSlice = createAppSlice({
  name: "auth",
  initialState,
  reducers: create => ({
    setAccessToken: create.reducer((state, action: PayloadAction<string>) => {
      state.accessToken = action.payload
    }),
    setIsAuthenticated: create.reducer(
      (state, action: PayloadAction<boolean>) => {
        state.isAuthenticated = action.payload
      },
    ),
  }),
  selectors: {
    selectAccessToken: auth => auth.accessToken,
    selectIsAuthenticated: auth => auth.isAuthenticated,
  },
})

export const { setAccessToken, setIsAuthenticated } = authSlice.actions

export const { selectAccessToken, selectIsAuthenticated } = authSlice.selectors

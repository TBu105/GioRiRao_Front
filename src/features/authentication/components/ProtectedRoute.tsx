import React from "react"
import { useAppSelector } from "../../../app/hooks"
import { selectIsAuthenticated } from "../authSlice"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = () => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated)

  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }

  return <Outlet />
}

export default ProtectedRoute

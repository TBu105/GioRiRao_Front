import React, { useEffect, useState } from "react"
import { useAppSelector } from "../../../app/hooks"
import { selectIsAuthenticated } from "../authSlice"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true",
  )

  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthenticated(localStorage.getItem("isAuthenticated") === "true")
    }

    window.addEventListener("storage", handleStorageChange)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
    }
  }, [])

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoute

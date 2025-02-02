import axios from "axios"
import { useAppSelector } from "./hooks"
import { selectAccessToken } from "../features/authentication/authSlice"

const api = axios.create({
  baseURL: "http://localhost:3001/api/v1", // Replace with your API base URL
  timeout: 10000, // Request timeout in milliseconds
  headers: {
    "Content-Type": "application/json",
  },
})

// Response interceptor (e.g., for handling errors globally)
api.interceptors.response.use(
  response => response,
  error => {
    // Handle specific error codes (401, 403, etc.)
    if (error.response?.status === 401) {
      // Example: Redirect to login or refresh token
      console.error("Unauthorized! Redirecting to login.")
    }
    return Promise.reject(error)
  },
)

export default api

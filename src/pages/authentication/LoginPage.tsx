import React, { useState } from "react"
import authApi from "../../features/authentication/authApi"
import { useNavigate } from "react-router-dom"

interface IFormData {
  email: string
  password: string
}

const LoginPage: React.FC = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState<IFormData>({
    email: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      await authApi.loginAdmin(formData.email, formData.password)

      localStorage.setItem("isAuthenticated", "true")

      navigate("/")
    } catch (error) {
      console.error("Login failed:", error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              EMAIL
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="text"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              PASSWORD
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              type="password"
              placeholder="******************"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              LOGIN
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot password?
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage

/**
 * When people go to my website, the system will check if they are login or not
 * If they are not login, they will redirect to the login page
 * Otherwise, they will see the home page
 *
 * How to check if they are login or not?
 * Maybe I can check the request header to see if they have access token or not
 *
 * If they have it mean they logged in
 * When they have it, I need to check if the token is valid or not
 *
 * So the first thing I need to do is to create a protected route
 * then wrap routes need to be protected inside it
 *
 * How do this protected route works?
 * It will check one value from the auth slice: isAuthenticated
 * If it is true, then it return the outlet
 * Else, it will redirect to the login page
 *
 * So the protected route will take the isAuthenticated from the auth slice
 * How the auth slice check if the user is authenticated or not?
 * Auth slice will take the access token from the memory, for specific from the auth slice itslef
 *
 * You wonder how this happen?
 * Let me explain!!
 *
 * We will create a access token value inside auth slice
 * When the user login, and backend send back the access token, front end will save it to the auth slice access token state
 *
 */

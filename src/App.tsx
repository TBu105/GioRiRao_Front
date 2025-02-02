import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Navigation from "./features/common/Navigation"
import LoginPage from "./pages/authentication/LoginPage"
import ProtectedRoute from "./features/authentication/components/ProtectedRoute"
import useTokenInterceptor from "./hooks/useTokenInterceptor"

const App = () => {
  useTokenInterceptor()

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-950 text-white flex">
        <Navigation />
        <div className="flex-1">
          <Routes>
            <Route path="/login" element={<LoginPage />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App

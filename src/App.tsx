import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import Home from "./pages/home/Home"
import Navigation from "./features/common/Navigation"
import LoginPage from "./pages/authentication/LoginPage"
import ProtectedRoute from "./features/authentication/components/ProtectedRoute"

const App = () => {
  return (
    <BrowserRouter>
      <MainContent />
    </BrowserRouter>
  )
}

const MainContent = () => {
  const location = useLocation()
  const isLoginPage = location.pathname === "/login"

  return (
    <div className="min-h-screen bg-gray-950 text-white flex">
      {!isLoginPage && <Navigation />}
      <div className="flex-1">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App

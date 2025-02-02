import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../pages/home/Home"
// import NotFound from '../pages/NotFound';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  )
}

export default AppRoutes

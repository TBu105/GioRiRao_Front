import {
  Home,
  History,
  Settings,
  Bell,
  Mail,
  LogOut,
  ShoppingCart,
} from "lucide-react"
import { NavLink } from "react-router-dom"

interface NavItemProps {
  to: string
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  onClick?: () => void
}
const handleLogout = () => {
  localStorage.removeItem("isAuthenticated")
  localStorage.removeItem("accessToken")
}
const NavItem = ({ to, Icon, onClick }: NavItemProps) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `h-12 w-12 flex items-center justify-center rounded-lg transition-colors ${
        isActive ? "bg-rose-400 text-white" : "text-gray-400 hover:bg-gray-800"
      }`
    }
  >
    <Icon width={24} height={24} />
  </NavLink>
)

const Navigation = () => (
  <nav className="w-20 bg-gray-900 p-4 flex flex-col items-center gap-6 h-screen">
    {/* Logo ShoppingCart */}
    <div className="mb-8">
      <ShoppingCart className="w-10 h-10 text-white" />
    </div>

    {/* Nhóm các icon điều hướng */}
    <div className="flex flex-col gap-6 flex-grow">
      <NavItem to="/" Icon={Home} />
      <NavItem to="/history" Icon={History} />
      <NavItem to="/messages" Icon={Mail} />
      <NavItem to="/notifications" Icon={Bell} />
      <NavItem to="/settings" Icon={Settings} />
    </div>

    {/* Đẩy LogOut xuống dưới */}
    <div className="mt-auto">
      <NavItem to="/login" onClick={handleLogout} Icon={LogOut} />
    </div>
  </nav>
)

export default Navigation

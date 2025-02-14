import { GlassWater, LucideIcon, Donut } from "lucide-react"


interface MenuItem {
  label: string
  keyWord: string
  Icon: LucideIcon
}

const menuItems: MenuItem[] = [
  { label: "Drink Management", keyWord: "drinkManagement", Icon: GlassWater },
  { label: "Topping Management", keyWord: "toppingManagement", Icon: Donut },
]

export default menuItems

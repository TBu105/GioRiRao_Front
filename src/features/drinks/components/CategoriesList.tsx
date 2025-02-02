import React, { useEffect, useState } from "react"

import drinkApi from "../drinkApi"
import {
  // actions
  setClickedCategory,
} from "../drinkSlice"
import { useAppDispatch } from "../../../app/hooks"

const CategoriesList = () => {
  const dispatch = useAppDispatch()
  const [categories, setCategories] = useState<string[]>([])
  const [selected, setSelected] = useState<string>("coffee")

  useEffect(() => {
    async function loadCategories() {
      try {
        const categories = await drinkApi.getCategories()
        setCategories(categories)
      } catch (error) {
        throw error
      }
    }
    loadCategories()
  }, [])

  const handleSelectedCategory = (category: string) => {
    setSelected(category)
    dispatch(setClickedCategory(category))
  }

  return (
    <div>
      <div className="flex gap-4 border-b border-gray-700 pb-4">
        {categories.map(category => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg ${category === selected ? "text-rose-400" : "text-white"}`}
            onClick={() => handleSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="underline"></div>
    </div>
  )
}

export default CategoriesList

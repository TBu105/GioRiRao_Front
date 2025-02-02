import React, { useEffect, useState } from "react"

import { IDrink } from "../drinkTypes"
import drinkApi from "../drinkApi"
import DrinkItem from "./DrinkItem"
import {
  // selector
  selectClickedCategory,
  selectSearchKey,
} from "../drinkSlice"
import { useAppSelector } from "../../../app/hooks"

const DrinksList = () => {
  const clickedCategory = useAppSelector(selectClickedCategory)
  const searchKey = useAppSelector(selectSearchKey)
  const [drinks, setDrinks] = useState<IDrink[]>([])

  useEffect(() => {
    async function loadDrinksByCategory() {
      const drinks = await drinkApi.getDrinksByCategory(`${clickedCategory}`)
      setDrinks(drinks)
    }
    loadDrinksByCategory()
  }, [clickedCategory])

  useEffect(() => {
    if (!searchKey) return // Skip API call if searchKey is empty

    async function loadDrinksBySearchKey() {
      console.log("searchKey from SearchBar", searchKey)
      const drinks = await drinkApi.searchDrinks(`${searchKey}`)
      setDrinks(drinks)
    }
    loadDrinksBySearchKey()
  }, [searchKey])

  return (
    <div className="grid grid-cols-3 md:grid-cols-auto-fit gap-6">
      {drinks.map(drink => (
        <DrinkItem
          key={drink._id}
          name={drink.name}
          thumbnail={drink.thumbnail}
          price={drink.customization[0].price}
        />
      ))}
    </div>
  )
}

export default DrinksList

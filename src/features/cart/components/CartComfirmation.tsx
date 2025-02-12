/**
 * We gonnna do a pop up for drink detail
 *
 * We will have a state to know if the modal is open or not: isOpen
 * and isOpen will inside drinkSlice
 * If isOpen is true, then modal is open, otherwise close
 * The initial value of isOpen is false
 *
 * In the DrinksList, when user click on specific drink, we will make the isOpen true
 * We also want to take the drink id and pass it to the drinkSlice
 * so modal can get that id to get drink detail from back end and show to user
 *
 *
 */

import React, { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import ToppingsList from "../../topping/components/ToppingsList"
import {
  selectCartItem,
  selectCartItems,
  selectCartTotalPrice,
  setIsCartComfirmationOpen,
  updateNote,
  updatePriceIndex,
} from "../../cart/cartSlice"
import AddingToppingList from "../../topping/components/AddingToppingList"
import { selectDrinkId } from "../../drinks/drinkSlice"
import { IDrink } from "../../drinks/drinkTypes"
import drinkApi from "../../drinks/drinkApi"
import DrinkItemDetail from "../../drinks/components/DrinkItemDetail"
import CartItem from "./CartItem"
import CartPaymentMethod from "./CartPaymentMethod"

const CartComfirmation = () => {
  const drinkId = useAppSelector(selectDrinkId)
  const cartItem = useAppSelector(cart => selectCartItem(cart, drinkId))
  const cartList = useAppSelector(selectCartItems)
  const cartTotalPrice = useAppSelector(selectCartTotalPrice)

  const dispatch = useAppDispatch()

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        dispatch(setIsCartComfirmationOpen({ isOpen: false }))
      }
    }

    // Attach the event listener
    window.addEventListener("keydown", handleEscape)

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleEscape)
    }
  }, [])

  const handleClose = () => {
    dispatch(setIsCartComfirmationOpen({ isOpen: false }))
  }

  const handleDrinkPrice = (priceIndex: number) => {
    dispatch(updatePriceIndex({ drinkId, priceIndex }))
  }

  const handleNoteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value

    dispatch(updateNote({ drinkId, note: value }))
  }

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-[999] "
      onClick={handleClose}
    >
      <div
        onClick={e => e.stopPropagation()}
        className=" bg-gray-900 text-white h-full p-6 rounded-lg absolute top-0 right-0 z-[1000] w-[62%]"
      >
        <div className="flex h-full">
          <div className="flex flex-col justify-between border-r border-gray-400 pr-5 w-[50%]">
            <div>
              <div className="border-b border-gray-400 pb-2 mb-5">
                <h1>Comfirmation</h1>
              </div>

              <div className="max-h-[400px] overflow-y-scroll hide-scrollbar">
                {cartList?.map((item, index) => (
                  <CartItem
                    key={index}
                    drink={item.drink}
                    price={item.price}
                    quantity={item.quantity}
                    note={item.note}
                    toppings={item.toppings}
                  />
                ))}
              </div>
            </div>

            <div>
              <div>
                <div className="flex justify-between my-3">
                  <p>Discount: </p>
                  <p></p>
                </div>

                <div className="flex justify-between">
                  <p>Subtotal: </p>
                  <p>{cartTotalPrice}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pl-5 w-[50%]">
            <CartPaymentMethod />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartComfirmation

/**
 * Nhiệm vụ sáng nay
 * 1. ấn vào giá tiền thì: tổng tiền hiển thị thay đổi, và tiền mặc định của nước thay đổi OKOKOKOK
 * 2. Khi ấn vào add topping thì: hiển thị topping item trong drinkitemdetail, và khi thoát ra, chúng ta cũng thấy topping item trong cartitem hiển thị ở cartlist chưa OKOKOK
 * 3. có thể xóa topping item ra khỏi drinkitem detail OKOKOK
 * 4. khi bấm vào cart item thì nó hiển thị lên drinkitemdetail
 */

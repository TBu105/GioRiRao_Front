import { ICarItem } from "../features/cart/cartType"

function convertCartItemsToOrderDetails(cartItems: ICarItem[]): any[] {
  return cartItems.map(item => {
    if (!item.drink) {
      throw new Error("Drink information is required.")
    }

    // Extract size information
    const sizeInfo = item.drink.customization[item.priceIndex ?? 0]
    const size = sizeInfo?.size ?? "M" // Default to "M" if not found
    const drinkPrice = sizeInfo?.price ?? item.price ?? 0

    return {
      drinkId: item.drink._id, // Convert to ObjectId
      drinkName: item.drink.name,
      drinkPrice: drinkPrice,
      size: size as "S" | "M" | "L",
      quantity: item.quantity ?? 1,
      note: item.note?.trim() ?? "",
      toppings: item.toppings.map(topping => ({
        toppingId: topping._id,
        name: topping.name,
        price: topping.price,
      })),
      total:
        drinkPrice * (item.quantity ?? 1) +
        item.toppings.reduce((sum, topping) => sum + topping.price, 0),
    }
  })
}

export default convertCartItemsToOrderDetails

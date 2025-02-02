const DrinkBase: string = "/drinks"

const DrinkEndpoint = {
  getDrinksByCategory: (category: string) =>
    `${DrinkBase}/category/${category}`,
  getCategoriesList: "/drinks/categories",
  searchDrinks: (searchValue: string) =>
    `${DrinkBase}/search?name=${searchValue}`,
}

export default DrinkEndpoint

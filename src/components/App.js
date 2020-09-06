import React from 'react'
import RecipeList from './RecipeList'
import '../css/app.css'

export const ThemeContext = React.createContext()
function App() {

  return (
    <>
      <RecipeList recipes={recipes} />


    </>
  )


}

const recipes = [
  {
    id: 1,
    name: "Rice",
    cookTime: "5:00",
    servings: 3,
    instructions: "1. Boil the rice\n 2. Put salt and olive oil\n 3. Enjoy your meal",
    ingredients: [
      {
        id: 1,
        name: "Rice",
        amount: "100g"
      },
      {
        id: 2,
        name: "Salt",
        amount: "2 Tbs"
      }
    ]
  },
  {
    id: 2,
    name: "Pumpkin",
    cookTime: "6:00",
    servings: 6,
    instructions: "1. Boil the pumpkin\n 2. Put salt and olive oil\n 3. Enjoy your meal",
    ingredients: [
      {
        id: 1,
        name: "Pumpkin",
        amount: "200g"
      },
      {
        id: 2,
        name: "Pepper Pouder",
        amount: "2 Tbs"
      }
    ]
  }
]

export default App;
import React, { useState } from 'react'
import RecipeList from './RecipeList'
import { v4 as uuidv4 } from 'uuid'
import '../css/app.css'

export const ThemeContext = React.createContext()
function App() {
  const [recipes, setRecipes] = useState(sampleRecipes)

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: "New",
      servings: 1,
      cooktime: "1:00",
      instructions: 'Instr.',
      ingredients: [{
        id: uuidv4(),
        name: "Name", amount: "A Tbs",
      },]
    }

    setRecipes([...recipes, newRecipe])
  }

  function handleRecipeDelete(id) {
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }

  return (
    <>
      <RecipeList
        recipes={recipes}
        handleRecipeAdd={handleRecipeAdd}
        handleRecipeDelete={handleRecipeDelete}
      />

    </>
  )
}



const sampleRecipes = [
  {
    id: 1,
    name: "Rice",
    cookTime: "5:00",
    servings: 3,
    instructions: "1. Boil the rice\n2. Put salt and olive oil\n3. Enjoy your meal",
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
    instructions: "1. Boil the pumpkin\n2. Put salt and olive oil\n3. Enjoy your meal",
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
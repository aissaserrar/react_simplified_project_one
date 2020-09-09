import React, { useState, useEffect } from 'react'
import RecipeList from './RecipeList'
import { v4 as uuidv4 } from 'uuid'
import RecipeEdit from './RecipeEdit'
import '../css/app.css'

export const RecipeContext = React.createContext()
const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes'

function App() {
  const [selctedRecipeId, setSelectedRecipeId] = useState()
  const [recipes, setRecipes] = useState(sampleRecipes)
  const selectedRecipe = recipes.find(recipe => recipe.id === selctedRecipeId)

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange
  }

  useEffect(() => {
    const recipesJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (recipesJSON != null) setRecipes(JSON.parse(recipesJSON))
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
  }, [recipes])

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: "",
      servings: 1,
      cooktime: "",
      instructions: '',
      ingredients: [{
        id: uuidv4(),
        name: "", amount: "",
      },]
    }

    handleRecipeSelect(newRecipe.id)
    setRecipes([...recipes, newRecipe])
  }

  function handleRecipeDelete(id) {
    if (selctedRecipeId != null && selctedRecipeId === id) {
      setSelectedRecipeId(undefined)
    }
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }

  function handleRecipeSelect(id) {
    setSelectedRecipeId(id)
  }

  function handleRecipeChange(id, recipe) {
    const newRecipes = [...recipes]
    const index = newRecipes.findIndex(r => r.id === id)
    newRecipes[index] = recipe
    setRecipes(newRecipes)
  }

  return (

    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList
        recipes={recipes}
      />
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
    </RecipeContext.Provider>


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
import React from 'react'
import IngredientList from './IngredientList'

export default function Recipe(props) {
    const {
        name,
        cookTime,
        servings,
        instructions,
        ingredients
    } = props
    return (
        <div className="recipe-container">
            <div><h3>{name}</h3></div>
            <div>
                <button className="btn edit-btn">Edit</button>
                <button className="btn delete-btn">Delete</button>
            </div>
            <div>
                <span>Cook Time: </span>
                <span>{cookTime}</span>
            </div>
            <div>
                <span>Servings: </span>
                <span>{servings}</span>
            </div>
            <div>
                <span>Instructions: </span>
                <span>{instructions}</span>
            </div>
            <IngredientList ingredients={ingredients} />
        </div>
    )
}

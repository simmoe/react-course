// --------------------------------------------------RECIPE.JS

import React from 'react'
import recipe from '../files/randomRecipe'
import './Recipe.css'

const Recipe = () => {
    const returnIngredients = (m) => {
        let ingredientsArray = []
        let measureArray = []
        for (var key in m) {
            if(key.includes('Ingredient') && m[key] !== '')ingredientsArray.push(m[key])
            if (key.includes('Measure') && m[key] !== '')  measureArray.push(m[key])
        }
        const ingredients = []
        ingredientsArray.map( (i, nr) => ingredients.push({ name: i, measure:measureArray[nr] }) ) 
        return ingredients
    }
    return(
        <div className="submodule">
            {recipe.meals.map( 
                (recipe, i) =>
                <div className="recipe" key={i}> 
                    <img src={recipe.strMealThumb} alt='recipe' />
                    <h2>{recipe.strMeal}</h2>
                    {
                        returnIngredients(recipe).map( (i, nr) => <li key={nr}>{i.name} : {i.measure}</li> )
                    }
                    <p>{recipe.strInstructions}</p>
                </div>
            )}
        </div>
    )
}

export default Recipe

import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import PropTypes from 'prop-types'

const Recipes = ({handelWantToCook,handelRemove}) => {
    const [ recipes, setRecipes]=useState([])
    useEffect(()=>{
       fetch('recipe.json')
       .then(res=>res.json())
     .then(data=>setRecipes(data))
    },[])
    return (
        <div className="grid grid-cols-2 gap-4 mx-auto">
           
            {
                recipes.map(( recipe,id)=><Recipe key={id}
               

                recipe={recipe}
                handelWantToCook={handelWantToCook}
              handelRemove={handelRemove}
                >

                </Recipe>)
            }
        </div>
    );
};
Recipes.propTypes={
     handelWantToCook:PropTypes.func,
     handelRemove: PropTypes.func
}

export default Recipes;
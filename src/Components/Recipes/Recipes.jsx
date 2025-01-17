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
        <div >
            <div className="text-2xl text-center font-bold">
            <h1 className="">Our Recipes</h1>
            <p className="text-red-400 "> Here are  some of our poplars dishes </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-4 mx-auto grid-cols-1">
                 
            {
                recipes.map(( recipe,id)=><Recipe key={id}
               

                recipe={recipe}
                handelWantToCook={handelWantToCook}
              handelRemove={handelRemove}
                >

                </Recipe>)
            }
            </div>
           
            
        </div>
    );
};
Recipes.propTypes={
     handelWantToCook:PropTypes.func,
     handelRemove: PropTypes.func
}

export default Recipes;
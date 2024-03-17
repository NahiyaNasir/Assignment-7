
import PropTypes from 'prop-types'
import { CiStopwatch} from "react-icons/ci"
import { FaFire } from "react-icons/fa";


const Recipe = ({recipe,handelWantToCook,handelRemove}) => {
  
    const {recipe_img,recipe_name,short_description,preparing_time,calories,ingredients, recipe_id}=recipe
    return (
        <div className=''>
            
            <div className="card  bg-base-100 shadow-xl  w-96 mt-6 h-[680px]">
  <figure className="px-10 pt-10">
    <img src={recipe_img} alt="Shoes" className="rounded-xl w-[330px] h-[200px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{recipe_name}</h2>
    <p>{short_description}</p>
      <h5 className='font-bold text-1xl'>Ingredients:{ingredients.length}</h5>
    <ul className='list-disc'>
      
      {
        ingredients.map((ing,idx)=>       <li key={idx}>{ing}  </li>)
       
      }</ul>
    <div className='flex  gap-4'>
      <div className=''>
    <p >  <CiStopwatch  />{preparing_time} min  </p>
    <p><FaFire />{calories}</p>
      </div>
      
    </div>
    <div className="card-actions">
      <button className="btn btn-primary" onClick={()=>{ handelWantToCook(recipe)
    handelRemove(recipe_id)
    
      }
        }>Want To Cook</button>
    
    </div>
  </div>
</div>






        </div>
       
        
    );
    
};
Recipe.propTypes={
    recipe:PropTypes.object, 
    handelWantToCook:PropTypes.func,
    handelRemove:PropTypes.func
   
}

export default Recipe;
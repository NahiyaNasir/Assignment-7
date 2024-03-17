
import PropTypes from 'prop-types'
import { CiStopwatch} from "react-icons/ci"
import { FaFire } from "react-icons/fa";


const Recipe = ({recipe,handelWantToCook}) => {
  
    const {recipe_img,recipe_name,short_description,preparing_time,calories}=recipe
    return (
        <div className=''>
            
            <div className="card  bg-base-100 shadow-xl  w-96 mt-6 h-[680px]">
  <figure className="px-10 pt-10">
    <img src={recipe_img} alt="Shoes" className="rounded-xl w-[330px] h-[200px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{recipe_name}</h2>
    <p>{short_description}</p>
    <div className='flex  gap-4'>
      <CiStopwatch  />{preparing_time} min  
    <p><FaFire />{calories}</p>
    </div>
    <div className="card-actions">
      <button className="btn btn-primary" onClick={()=>handelWantToCook(recipe)}>Want To Cook</button>
    
    </div>
  </div>
</div>






        </div>
       
        
    );
    
};
Recipe.propTypes={
    recipe:PropTypes.object, 
    handelWantToCook:PropTypes.func
}

export default Recipe;
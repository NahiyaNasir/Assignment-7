
import PropTypes from 'prop-types'
const Cooking = ({cooking}) => {
    const{ recipe_name, recipe_id, preparing_time,calories}=cooking
    return (
        <div>
            <div className="overflow-x-auto  bg-slate-200 rounded-xl m-4 ">
  <table className="table ">
    {/* head */}
    <thead>
    <tr>
     <th></th>
     <th className=' '>Name</th>
     <th className=' '>Time</th>
     <th className=' '>calories</th>
   </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>

      
   </tr>
          <tr>



        <th>{recipe_id}</th>
<td className="row-span-3">{recipe_name}</td>
        <td className="row-span-3">{preparing_time} mini</td>
        <td className="row-span-3">{calories} calories</td>
        
      </tr>
     
      
    
    
    </tbody>
  </table>
</div>
            
        </div>
    );
};
Cooking.propTypes={
    cooking:PropTypes.any
}

export default Cooking;
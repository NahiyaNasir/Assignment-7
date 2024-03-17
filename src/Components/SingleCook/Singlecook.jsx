
import PropTypes from 'prop-types'



const Singlecook = ({cook,handelPreparing,}) => {
    const{recipe_name,preparing_time,calories,recipe_id}=cook
    return (
        <div>


   
            <div className="overflow-x-auto bg-gray-200  m-4 rounded-sm">
  <table className="table ">
    {/* head */}
    <thead>
    <tr>
     <th>No</th>
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
        <button className="btn btn-success"onClick={()=> handelPreparing(cook)}> preparing</button>
      </tr>
     
      
    
    
    </tbody>
  </table>
</div>

       

     



     




        </div>
    );
};
Singlecook.propTypes={
  cook:PropTypes.any,
  handelPreparing:PropTypes.func
}
export default Singlecook;

import PropTypes from 'prop-types'

const Singlecook = ({cook}) => {
    const{recipe_name,preparing_time,calories}=cook
    return (
        <div>


   
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>{}</th>
        <th>Name</th>
        <th>Time</th>
        <th>calories</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th></th>
<td className="row-span-3">{recipe_name}</td>
        <td className="row-span-3">{preparing_time} mini</td>
        <td className="row-span-3">{calories} calories</td>
        <button className="btn btn-success"onClick={()=> handelPreparing()}> preparing</button>
      </tr>
      {/* row 2 */}
      
      {/* row 3 */}
    
    </tbody>
  </table>
</div>









        </div>
    );
};
Singlecook.propTypes={
  cook:PropTypes.any
}
export default Singlecook;
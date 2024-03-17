
import PropTypes from 'prop-types'
import Singlecook from '../SingleCook/Singlecook';
import Cooking from '../Cooking/Cooking';

const Cook = ({cooks,handelPreparing,cookings,}) => {
    return (
        <div className="w-1/3 border-b-2 mt-4">
            
           
             <div className=' mt-6 bg-slate-500 '>
             <h2 className="text-2xl text-center">Want To Cook:{cooks.length}</h2>
             {
                cooks.map((cook,id)=><Singlecook  key={id } cook={cook} 

                handelPreparing={handelPreparing}
               
                 ></Singlecook>)
            }
             </div>
           

           
         
            <div className=' mt-6 bg-slate-500'>
            <h4 className='text-xl text-center'> Currently Cooking :{cookings.length}</h4>
            {
            cookings.map((cooking,id,)=><Cooking key={id}cooking={cooking}></Cooking>
                
             )
          }
            </div>
        


         

        </div>
       
    );
};

 
 Cook.propTypes={
    cooks:PropTypes.array,
    handelPreparing:PropTypes.func, 
    cookings:PropTypes.array
}
export default Cook;
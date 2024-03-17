
import PropTypes from 'prop-types'
import Singlecook from '../SingleCook/Singlecook';

const Cook = ({cooks}) => {
    return (
        <div className="w-1/3 border-b-2 mt-4">
            
           

            <h2 className="text-2xl text-center">Want To Cook:{cooks.length}</h2>
          

            {
                cooks.map((cook,id)=><Singlecook  key={id } cook={cook}></Singlecook>)
            }



        </div>
       
    );
};

 
 Cook.propTypes={
    cooks:PropTypes.array
}
export default Cook;
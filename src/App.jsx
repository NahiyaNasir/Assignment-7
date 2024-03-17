
import { useState } from 'react'
import './App.css'
import Cook from './Components/Cook/Cook'
import Header from './Components/Header/Header'
import Recipes from './Components/Recipes/Recipes'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
 const[cooks, setCook]=useState([])
 const [cookings,setCooking]=useState([])
 const [remove, setRemove]=useState([])
 const handelPreparing=(cooking)=>{
 // console.log('clicked')
  const newCooking=[...cookings, cooking]
  setCooking(newCooking)
 }
const handelWantToCook=(recipe,id)=>{
  
  const isExists= cooks.find(item=>item.recipe_id == recipe.recipe_id)
   if(!isExists){
    setCook([...cooks, recipe])
     
   }else{
  toast.warn('already exists')
   }
       //remove
    const newRemove= remove.filter(item=>item.id !==id.id)
    setRemove([...newRemove,id])
   }
  
  //console.log(cookings);
  return (
    <>
     <div className=' mx-auto container'>
      <Header></Header>
    
     <div className=' flex '>
      <Recipes handelWantToCook={handelWantToCook}
    
     ></Recipes>
      <Cook cooks={cooks}  cookings={cookings}
      handelPreparing={handelPreparing}></Cook>
      
     </div>
     <ToastContainer></ToastContainer>
     </div>
    </>
  )
}

export default App

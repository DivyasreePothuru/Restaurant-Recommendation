import React from 'react'
import { useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../App'



function Restaurant() {

const {setDishid,setRestaurant_id,selectrestaurant,setSelectrestaurant,restaurantid} = useContext(AppContext)

const navigate = useNavigate()



function restaurantHandler(e){

  setDishid(e.target.name);

  navigate('/dishes')
  
}

function reviewhandler(e){

  setRestaurant_id(Number(e.target.value))
  console.log(e.target.name);
  navigate('/reviews')
}


function buttonHandler(){

  navigate('/')
}



  return (
    <>
    <button onClick={buttonHandler}>Back</button>
    <div className='restaurant'>
    
    
    {
      selectrestaurant && selectrestaurant.filter((i,j)=> i.country_id== restaurantid  ).map((i,j) => <div className='restaurantlist' key={j}>
          
          <img src={i.image} alt="" />
          <button name={i.id} value={i.id} onClick={restaurantHandler}>{i.name}</button>

          <h3> <span>Address</span> :{i.Address}</h3>
           <button name={i.id}  value={i.id} onClick={reviewhandler}>Reviews</button>
        
          
          </div>)
    }
    </div>
    </>
  )
}

export default Restaurant
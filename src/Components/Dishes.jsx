import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../App'
import { useNavigate } from 'react-router-dom'

function Dishes() {

const {dishid,dishes} = useContext(AppContext)

const navigate = useNavigate()

function buttonHandler(){
  navigate('/restaurant')
}
  return (

    <>
    <button onClick={buttonHandler}> Back</button>
    <div className='dishes'>

{dishes && dishes.filter((i) => dishid==i.restaurant_id).map((i,j) => <div className='disheslist' key={j}>

    <img src={i.image} alt="pic" />
   <h1>  {i.name}</h1>
</div>)}



    </div>
    </>
  )
}

export default Dishes
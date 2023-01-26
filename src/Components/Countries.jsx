import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../App'
import {  useNavigate } from 'react-router-dom'

function Countries() {

const {countries,setRestaurantid} = useContext(AppContext)  
 const navigate = useNavigate()

function countryHandler (e){


setRestaurantid(e.target.value)

navigate('/restaurant')

}

  return (
    <div className='countries'>

{countries && countries.map((i,j) => <div className='countrieslist' key={j}>

  < img src={i.img} alt="" />
  <button name={i.id} value={i.id}  onClick={countryHandler}>{i.name}</button>

</div>)}

    </div>
  )
}

export default Countries
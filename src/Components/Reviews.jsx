import axios from 'axios'
import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../App'
import { useNavigate } from 'react-router-dom'

function Reviews() {

  const navigate = useNavigate()
const{review,restaurant_id,text,setText, user,setUser} = useContext(AppContext)

function buttonhandler(){

  navigate('/')
}

function inputhandler(e){
e.preventDefault()

if(restaurant_id) {

  
  // axios.post('http://localhost:3000/reviews',{e.target.input.value,e.target.textarea.value})
  axios.post("http://localhost:3000/reviews",{user,text,restaurant_id})
  .then(res=> console.log(res))
  
  
  e.target.input.value = ''
  e.target.textarea.value = ''
}

}


  return (
<>

<button onClick={buttonhandler}> back</button>
  <form onSubmit={inputhandler}>
    <input type="text" name="input" placeholder='enter your name'  onChange={(e)=>setUser(e.target.value)}/>
    
   <textarea name="textarea" id="" cols="30" rows="10" placeholder='type your comments' onChange={(e)=>setText(e.target.value)}></textarea>
    <button>Submit</button>
  </form>
    <div className='reviews'>
    
      {review.filter(i => i.restaurant_id == restaurant_id).map((i,j) => <p key={j}>{i.user} <br /> {i.text} <br/> {i.value}</p>)}



  
    </div>
</>
  )
}

export default Reviews
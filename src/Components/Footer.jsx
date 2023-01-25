import React from 'react'
import {FaFacebookF} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"

function Footer() {
  return (
    <div className='footer'>
     <div className='footercopy'>  © Made by Divya - All right reserved</div>
     <div className='icons'> Follow us on : <FaFacebookF /> <FaTwitter /> </div>
        
        </div>
  )
}

export default Footer
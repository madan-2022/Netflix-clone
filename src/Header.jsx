import React from 'react'
import { Link } from 'react-router-dom'
import logo from './Logonetflix.png'
import {BiSearch} from 'react-icons/bi'

const Header = () => {
  return (
    <div className='Header'>
        <img src={logo}></img>

        
        <div>
        <Link To="./TV shows" >TV shows</Link>
        <Link To="./Movies" >Movies</Link>
        <Link To="./Recently added" >Recently added</Link>
        <Link To="/MY list" >My list</Link>

        </div>
        
        <BiSearch/>
    </div>
  )
}

export default Header
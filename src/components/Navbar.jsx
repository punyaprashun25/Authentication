import React, { useState } from 'react'
import Button from './Button'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { update} from '../store/mainSlice';
const Navbar = () => {
  const dispatch = useDispatch();
  const mainData = useSelector((state)=>state.main);
  const HandleLogout = () =>{
    dispatch(update({loggedIn : false, userData: {}}));
  }
  console.log(mainData);
  return (
    <div className='navbar w-full h-16 bg-black flex items-center justify-between px-8 text-white'>
        <p className="text font-bold text-2xl">Authentication</p>
        {
            mainData.loggedIn
            ?<Button content={'Logout'} HandleClick={HandleLogout}/>
            :<Link to='/login'><Button content={'Login'} /></Link>
        }
    </div>
  )
}

export default Navbar

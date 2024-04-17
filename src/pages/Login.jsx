import React, { useState } from 'react'
import { InputBox } from '../components'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { update } from '../store/mainSlice'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user);

  const initialState = {
    username: "",
    password: ""
  }
  const [formData, setFormData] = useState(initialState);
  const [userAuthenticated, setUserAuthenticated] = useState(false);

  const HandleOnChange = (event) => {
    const name = event.target.id;
    const value = event.target.value;
    setFormData(values => ({ ...values, [name]: value }));
  }
  const HandleSubmit = (event) => {
    event.preventDefault();
    users.forEach((user) => {
      if (user.username === formData.username) {
        if (user.password === formData.password) {
          dispatch(update({ loggedIn: true, userData: user }))
          setUserAuthenticated(true);
          Navigate('/');
        }
        else {
          alert("Login Credentials are incorrect!")
        }
      }
    })

    if(!userAuthenticated)
      alert("Username doesn't exist!")
  }

  return (
    <div className='login flex w-full h-screen items-center justify-center'>
      <form action='#' className='w-[350px]  rounded-lg px-6 py-8 bg-slate-300 flex flex-col gap-8 items-center'>
        <h2 className="heading font-bold text-2xl text-center">Login</h2>
        <InputBox type={'text'} name={'username'} id={'username'} value={formData.username} HandleChange={HandleOnChange} />
        <InputBox type={'password'} name={'password'} id={'password'} value={formData.password} HandleChange={HandleOnChange} />
        <button type='submit' className='px-4 py-2 w-32 h-10 flex items-center justify-center bg-black text-white rounded-md hover:bg-teal-500'
          onClick={() => HandleSubmit(event)}
        >Login</button>
        <p className="info text-md">Don't have an account? <Link to='/signup' className='text-emerald-700 text-lg'>Create One!</Link> </p>
      </form>
    </div>
  )
}

export default Login

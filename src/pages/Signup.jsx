import React, { useState } from 'react'
import { InputBox } from '../components'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createUser } from '../store/userSlice';
import { nameValidate, emailValidate } from '../util/validation';
const Signup = () => {
  const dispatch = useDispatch();
  const users = useSelector((state)=>state.user);
  const initialState = {
    name: "",
    username: "",
    email: "",
    password: "",
    cnfpass: ""
  }
  const [formData, setFormData] = useState(initialState);
  const HandleChange = (event) => {
    const name = event.target.id;
    const value = event.target.value;
    setFormData(values => ({ ...values, [name]: value }));
  }
  const isDupUsername = (username)=>{
    for(let i = 0; i<users.length; i++){
      if(users[i].username === username)
        return true;
    }
    return false;

  }
  const validateForm = ()=>{
      if(isDupUsername(formData.username))
      {
        alert("Username already exist!");
        return false;
      }
      return nameValidate(formData.name) && emailValidate(formData.email);
  }
  const isPassMatch = ()=>{
    if(formData.password===formData.cnfpass)
      return true;
    else{
      alert("Password is not matching!");
      return false;
    }
  }
  const HandleSubmit = (event) => {
    event.preventDefault();
    if (validateForm() && isPassMatch()) {
      dispatch(createUser({
        name: formData.name,
        username: formData.username,
        email: formData.email,
        password: formData.password
      }))
      alert("Form submitted Successfully!")
      setFormData(initialState);
    }
  }
  console.log(formData);
  return (
    <div className='signup flex w-full h-screen items-center justify-center'>
      <form action='#' className='w-[350px]  rounded-lg px-6 py-8 bg-slate-300 flex flex-col gap-4 items-center'>
        <h2 className="heading font-bold text-2xl text-center">Create an Account</h2>
        <InputBox type={'text'} name={'name'} id={'name'} value={formData.name} HandleChange={HandleChange} />
        <InputBox type={'text'} name={'username'} id={'username'} value={formData.username} HandleChange={HandleChange} />
        <InputBox type={'email'} name={'email'} id={'email'} value={formData.email} HandleChange={HandleChange} />
        <InputBox type={'password'} name={'password'} id={'password'} value={formData.password} HandleChange={HandleChange} />
        <InputBox type={'password'} name={'Confirm Password'} value={formData.cnfpass} id={'cnfpass'} HandleChange={HandleChange} />
        <button type='submit' className='px-4 py-2 w-32 h-10 flex items-center justify-center bg-black text-white rounded-md hover:bg-teal-500'
          onClick={() => HandleSubmit(event)}
        >Signup</button>
        <p className="info text-md">Already have an account? <Link to='/login' className='text-emerald-700 text-lg'>Login Here</Link> </p>
      </form>
    </div>
  )
}

export default Signup

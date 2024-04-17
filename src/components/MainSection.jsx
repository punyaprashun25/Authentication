import React from 'react'
import { useSelector } from 'react-redux'


const MainSection = () => {
  const mainData = useSelector((state) => state.main);
  return (
    <div className='items-center justify-center h-60 w-full flex flex-col gap-8 px-10 mt-8 sm:mt-6'>
      {
        mainData.loggedIn
          ? (
            <div className="profile-box flex flex-col items-center rounded-lg text-white justify-center h-[500px] w-56 sm:w-72 bg-emerald-700">
              <p className="name sm:text-2xl text-xl">{mainData.userData.name}</p>
              <p className="username sm:text-2xl text-xl">{mainData.userData.username}</p>
              <p className="email sm:text-2xl text-xl">{mainData.userData.email}</p>
            </div>
          )
          :
          (
            <div className="content-box">
              <p className="text font-bold text-3xl text-center">
                This is a react application to perform Login and Signup using State Management
              </p>
              <p className="text-2 text-xl text-center">Use login button to login into your account...if you don't have an account...You can create one!</p>
            </div>
          )
      }
    </div>
  )
}

export default MainSection

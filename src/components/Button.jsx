import React from 'react'

const Button = ({content, HandleClick}) => {
  return (
    <button className='px-4 py-2 bg-red-600 rounded-lg font-medium text-md'
    onClick={HandleClick}
    >{content}</button>
  )
}

export default Button

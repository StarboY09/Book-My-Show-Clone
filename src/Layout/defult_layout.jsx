import React from 'react'
import Navbar from '../Components/Navbar/Navbar'

const defult_layout =(Component) => ({...props}) => {
  return (
    <div>
        <Navbar/>
        <Component {...props}/>
        <div>Footer</div>
    </div>
  )
}

export default defult_layout
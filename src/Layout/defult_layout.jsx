import React from 'react'
import Navbar from '../Components/Navbar/Navbar'

const defult_layout =(Component) => ({...props}) => {
  return (
    <div>
        <Navbar/>
        <Component {...props}/>
        <div className="bg-premier-800 flex aline-center  ">
          <footer>
            <span>
              <MdOutlineCreate size={50} textAnchor={"hello"} /> Created By
              Sajal
              <HiOutlineMail size={50} />
              sajalgupta5050@gmail.com
            </span>
          </footer>
        </div>
      </div>
    );
  };

export default defult_layout;

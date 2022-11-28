import React from 'react'
import "./Option.css";

const Option = ({img, setOpt}) => {
  return (
    <li onClick={setOpt}>
        <img src={img} alt="" />
        <div className='option-info'>
          <h3>Nombre botella</h3>
          {/* <div>
             <span className='font-bold place'>Spain</span>
             <span className='font-bold year'>2017</span>
             <span className='font-bold lts'>0.75 lts.</span>
          </div> */}

          <span className='price-vino'>5.99$</span>
        </div>
       
    </li>
  )
}

export default Option
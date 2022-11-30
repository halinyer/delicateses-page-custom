import React from 'react'
import "./ViewArreglo.css";


const IconWine = () => {

  return(
    <svg xmlns="http://www.w3.org/2000/svg" 
    width="33" 
    height="33" 
    className='icon-btn'
    viewBox="0 0 24 24">
      <path d="M19.713 12.123c.264-.952.312-2.03.143-3.206l-.866-6.059A1 1 0 0 0 18 2H6a1 1 0 0 0-.99.858l-.865 6.058c-.169 1.177-.121 2.255.142 3.206.864 3.134 3.551 5.392 6.713 5.794V20H9v2h6v-2h-2v-2.084c3.162-.402 5.849-2.66 6.713-5.793zM17.133 4l.57 4H6.296l.571-4h10.266zM6.215 11.59c-.132-.474-.181-1.009-.159-1.59h11.889c.021.581-.028 1.116-.159 1.591A6.021 6.021 0 0 1 12 16a6.019 6.019 0 0 1-5.785-4.41z"/></svg>
  )
}

const IconBox = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 24 24"><path d="M20 3H4a2 2 0 0 0-2 2v2a2 2 0 0 0 1 1.72V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.72A2 2 0 0 0 22 7V5a2 2 0 0 0-2-2zM4 5h16v2H4zm1 14V9h14v10z"/><path d="M8 11h8v2H8z"/></svg>
  )
}

export const ViewArreglo = ({children,articleCaja,articleVino}) => {
  return (
      <div className=''>
        <button onClick={articleCaja} className='btn-caja btn-opt'>
          <div>
             <IconBox/>
          </div>
          Caja
        </button>
        <button onClick={articleVino}  className='btn-vino btn-opt'>
          <div>
            <IconWine/>
          </div>
          Vinos
        </button>
         <div className='viewArreglo '>
         {children}
         </div>
      </div>
  )
}

import React from 'react'
import "./ListOption.css"

export const ListOption = ({children,nameArticle}) => {
  return (
    <section>
      <h2>Seleccione un {nameArticle}</h2>
      <ul>
        {children}
      </ul>
    </section>
  )
}

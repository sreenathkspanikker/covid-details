import React from 'react'

export const Cards = (props) => {
  return (
    <div className={`app-cards ${props.className}`}>
        {props.title !== undefined && <h3 className='card-title'>{props.title}</h3>}
        <div className='card-content'>
          {props.children}
        </div>
    </div>
  )
}

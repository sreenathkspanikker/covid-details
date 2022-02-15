import React from 'react'

export const Title = (props) => {
  return (
    <h3 className={`app-title ${props.className}`}>{props.children}</h3>
  )
}

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import * as Components from "./";
import { Nav, Image, Button } from 'react-bootstrap';
import ImgSreenath from '../assets/images/img-profile.png'

export const Sidebar = (props) => {
  const [data, setData] = useState([])

  const onClick = e => setData(e.target.innerText);

  useEffect(() => {
    let isLoad = true
    if (isLoad) props.handleChange(data)
    return () => {
      isLoad = false
    }
  }, [data])
  
  return (
    <div className='app-sidebar'>
      <div className='header-top'>
        <Components.Logo />
        <Nav defaultActiveKey="link-1" className="flex-column">
            <Nav.Link eventKey="link-1" onClick={(e)=> onClick(e)}><Components.Icon name="home"/>Home</Nav.Link>
            <Nav.Link eventKey="link-2" onClick={(e)=> onClick(e)}><Components.Icon name="vaccine"/>Country List</Nav.Link>
            <Nav.Link eventKey="link-3" onClick={(e)=> onClick(e)}><Components.Icon name="world" />Vaccine</Nav.Link>
            <Nav.Link eventKey="link-4" onClick={(e)=> onClick(e)}><Components.Icon name="covid" />Covid Info</Nav.Link>
        </Nav>
      </div>
      <Button variant='aboutme' onClick={(e)=> onClick(e)}>
        <Image src={ImgSreenath} fluid/>
            About Me
      </Button>
    </div>
  )
};

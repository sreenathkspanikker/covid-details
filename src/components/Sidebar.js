/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import * as Components from "./";
import { Nav, Image, Button } from 'react-bootstrap';
import ImgSreenath from '../assets/images/img-profile.png'

export const Sidebar = (props) => {

  const onClick = e => props.handleChange(e)
  
  return (
    <div className='app-sidebar'>
      <div className='header-top'>
        <Components.Logo />
        <Nav defaultActiveKey="link-1" className="flex-column">
            <Nav.Link eventKey="link-1" onClick={()=> onClick('home')}><Components.Icon name="home" size={20}/>Home</Nav.Link>
            <Nav.Link eventKey="link-2" onClick={()=> onClick('list')}><Components.Icon name="world"/>Country List</Nav.Link>
            <Nav.Link eventKey="link-3" onClick={()=> onClick('vaccine')}><Components.Icon name="vaccine" size={20}/>Vaccine</Nav.Link>
            <Nav.Link eventKey="link-4" onClick={()=> onClick('info')}><Components.Icon name="covid" size={20} />Covid Info</Nav.Link>
        </Nav>
      </div>
      <Button variant='aboutme' onClick={()=> onClick('about')}>
        <Image src={ImgSreenath} fluid/>About Me
      </Button>
    </div>
  )
};

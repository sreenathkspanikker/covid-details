import React from 'react'
import { Nav } from 'react-bootstrap';
import * as Components from "./";

export const Footer = (props) => {

 const onClick = e => props.handleChange(e);

  return (
    <Nav defaultActiveKey="link-1" className="app-footer">
        <Nav.Link eventKey="link-1" onClick={()=> onClick('home')}>
            <Components.Icon name="home" size={20}/>
        </Nav.Link>
        <Nav.Link eventKey="link-2" onClick={()=> onClick('list')}>
            <Components.Icon name="world"/>
        </Nav.Link>
        <Nav.Link eventKey="link-3" onClick={()=> onClick('vaccine')}>
            <Components.Icon name="vaccine" size={20}/>
        </Nav.Link>
        <Nav.Link eventKey="link-4" onClick={()=> onClick('info')}>
            <Components.Icon name="covid" size={20} />
        </Nav.Link>
    </Nav>
  )
}

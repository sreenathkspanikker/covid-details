import React from 'react';
import * as Components from "./";
import { FormControl, Navbar, Form, Nav, Button } from 'react-bootstrap';

export const Header = (props) => {


    return (
        <header className='app-header'>
            <Navbar>
                <Form className="d-flex">
                    <Form.Group className='form-group'>
                        <FormControl type="search" placeholder="Search" aria-label="Search" />
                        <Components.Icon name="search" />
                    </Form.Group>
                </Form>
                <Nav>
                    <Button variant='theme'><Components.Icon name="theme" /></Button>
                    <Navbar.Text>
                        Developer by: <a href="#login">Sreenath Kalarikkal Sreekumar</a>
                    </Navbar.Text>
                </Nav>
            </Navbar>
        </header>
    );
};

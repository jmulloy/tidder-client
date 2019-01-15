import React from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom'

class Header extends React.Component {
    render() {
        return (
            <Navbar>
             
              <Navbar.Brand>
              <Link to='/'>Tidder</Link>
              </Navbar.Brand>
             
             <Navbar.Collapse>
              <Nav>
                  <NavItem eventKey={2} to='/about'>About</NavItem>
                  <NavDropdown eventKey={3} title="Services" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}> Create a Post </MenuItem>
                    <MenuItem eventKey={3.2} to='/posts'> View All Posts</MenuItem>
                   </NavDropdown>
              </Nav>
             </Navbar.Collapse>
            </Navbar>
        )
    }
}
export { Header }
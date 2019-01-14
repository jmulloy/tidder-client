import React from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';

class Header extends React.Component {
    render() {
        return (
            <Navbar fixedTop>
             <Navbar.Header>
              <Navbar.Brand>
                  <a href='#'>Tidder</a>
              </Navbar.Brand>
             </Navbar.Header>
             <Navbar.Collapse>
              <Nav>
                  <NavItem eventKey={1} href="#"> Home </NavItem>
                  <NavItem eventKey={2} href="#"> About </NavItem>
                  <NavDropdown eventKey={3} title="Services" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}> Create a Post </MenuItem>
                    <MenuItem eventKey={3.2}> View All Posts </MenuItem>
                   </NavDropdown>
              </Nav>
             </Navbar.Collapse>
            </Navbar>
        )
    }
}
export { Header }
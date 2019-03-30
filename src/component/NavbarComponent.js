import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
class NavbarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <Link to="/">CONNECT IT</Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="">Trang Chủ</Link>
              </NavItem>
              <NavItem>
                <Link to="">Dịch Vụ</Link>
              </NavItem>
              <NavItem>
                <Link to="/register">Trở Thành ITER</Link>
              </NavItem>
              <NavItem>
                <Link to="">Liên Hệ</Link>
              </NavItem>
              <NavItem>
                <Link to="">Hỗ Trợ</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default NavbarComponent;
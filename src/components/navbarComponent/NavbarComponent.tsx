import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";

export const NavbarComponent = () => {
    return (
        <div>
            <Navbar color="faded" className="navbar navbar-dark bg-primary" expand="md">
                <NavbarBrand href="/" className="mr-auto">Bootcamp finder</NavbarBrand>
                <Nav navbar>
                    <NavItem>
                        <NavLink to="/">Bootcamps</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/add-bootcamp">Add bootcamp</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

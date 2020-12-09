import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

export const NavbarComponent = () => {
    return (
        <div>
            <Navbar color="faded" className="navbar navbar-dark bg-primary" expand="md">
                <NavbarBrand href="/" className="mr-auto">Bootcamp finder</NavbarBrand>
                <Nav navbar>
                    <NavItem>
                        <NavLink href="/">bootcamps</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/add-bootcamp">Add bootcamp</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

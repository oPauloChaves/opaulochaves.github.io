import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import Link from './link';

const links = [
  { href: '/', text: 'Home', className: 'nav-link' },
  { href: '/blog/', text: 'Blog', className: 'nav-link' },
];

const createNavItem = ({ href, text, className }) => (
  <NavItem>
    <Link to={href} className={className}>
      {text}
    </Link>
  </NavItem>
);

export default function Layout({ children }) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <header>
        <Navbar color="light" light expand="md">
          <Container fluid="md">
            <Link to="/" className="navbar-brand">
              Paulo Chaves
            </Link>
            <NavbarToggler onClick={() => setOpen(!open)} />
            <Collapse isOpen={open} navbar>
              <Nav className="ml-auto" navbar>
                {links.map(createNavItem)}
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </header>
      <main role="main">
        <Container fluid="md">{children}</Container>
      </main>
      <footer
        style={{
          padding: '1.5rem',
          color: '#999',
          textAlign: 'center',
          backgroundColor: '#f9f9f9',
          borderTop: '.05rem solid #e5e5e5',
        }}
      >
        <Container fluid="md">
          <p>Footer</p>
        </Container>
      </footer>
    </>
  );
}

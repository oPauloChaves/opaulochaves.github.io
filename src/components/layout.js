import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import Link from './link';
import { useStaticQuery, graphql } from 'gatsby';
import GithubIcon from '../components/icons/github';
import LinkedinIcon from '../components/icons/linkedin';
import TwitterIcon from '../components/icons/twitter';

const links = [{ href: '/', text: 'Home', className: 'nav-link' }];

export default function Layout({ children }) {
  const siteInfo = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            social {
              twitter
              github
              linkedin
            }
          }
        }
      }
    `,
  );

  const site = siteInfo.site.siteMetadata;
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
                {links.map((l, i) => (
                  <NavItem key={i}>
                    <Link to={l.href} className={l.className}>
                      {l.text}
                    </Link>
                  </NavItem>
                ))}
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </header>
      <main role="main">
        <Container fluid="md" style={{ marginTop: 20 }}>
          {children}
        </Container>
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
          <ul className="list-inline">
            <li className="list-inline-item">
              <Link to={`https://github.com/${site.social.github}`}>
                <GithubIcon style={{ width: 15, color: '#222' }} /> Github
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to={`https://twitter.com/${site.social.twitter}`}>
                <TwitterIcon style={{ width: 15, color: '#222' }} /> Twitter
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to={`https://linkedin.com/in/${site.social.linkedin}`}>
                <LinkedinIcon style={{ width: 15, color: '#222' }} /> Linkedin
              </Link>
            </li>
          </ul>
          <div>
            © {site.title} - {new Date().getFullYear()}, Built with
            {` `}
            <Link to="https://www.gatsbyjs.org">Gatsby</Link>
          </div>
        </Container>
      </footer>
    </>
  );
}

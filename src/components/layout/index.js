import React from 'react'

import 'prismjs/themes/prism.css'
import 'scss/main.scss'
import './style.scss'

import { Container, Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap'
import { useStaticQuery, graphql } from 'gatsby'

import Link from 'components/link'
import GithubIcon from 'components/icons/github'
import LinkedinIcon from 'components/icons/linkedin'
import TwitterIcon from 'components/icons/twitter'

const icons = [
  { name: 'github', to: 'https://github.com', Icon: GithubIcon },
  { name: 'twitter', to: 'https://twitter.com', Icon: TwitterIcon },
  { name: 'linkedin', to: 'https://linkedin.com/in', Icon: LinkedinIcon },
]

const SocialIcons = ({ site, width = 20, color = '#222' }) => (
  <ul className="list-inline layout__icons">
    {icons.map(({ name, to, Icon }) => (
      <li className="list-inline-item" key={name}>
        <Link to={`${to}/${site.social[name]}`}>
          <Icon style={{ width, color }} />
        </Link>
      </li>
    ))}
  </ul>
)

export default function Layout({ children, siteLang, langs = [] }) {
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
  )

  const site = siteInfo.site.siteMetadata
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <header>
        <Navbar color="light" light expand="md" fixed="top">
          <Container fluid="md">
            <Link to="/" className="navbar-brand">
              Paulo Chaves
            </Link>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <SocialIcons site={site} />
              </NavItem>
            </Nav>
            <NavbarToggler onClick={() => setOpen(!open)} />
            <Collapse isOpen={open} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem className="lang-switch">
                  {langs.map((lang) => (
                    <Link
                      to={`/?lang=${lang}`}
                      key={lang}
                      className={`nav-link ${lang === siteLang ? 'active-lang' : ''}`}
                    >
                      {lang}
                    </Link>
                  ))}
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </header>
      <main role="main">
        <Container fluid="md" className="main">
          {children}
        </Container>
      </main>
      <footer className="layout__footer">
        <Container fluid="md">
          <SocialIcons site={site} />
          <div>
            © {new Date().getFullYear()} {site.title} - Built with
            {` `}
            <Link to="https://www.gatsbyjs.org">Gatsby</Link>
          </div>
        </Container>
      </footer>
    </>
  )
}

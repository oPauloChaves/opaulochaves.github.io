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

const getPath = (locale, slug) => {
  if (!slug) return locale === 'en' ? '/' : '/pt-br'
  return locale === 'en' ? `/${slug}` : `/pt-br/${slug}`
}

const SocialIcons = ({ site, width = 20, color = '#222' }) => {
  return (
    <ul className="list-inline layout__icons">
      {site.github && (
        <li className="list-inline-item">
          <Link to={`https://github.com/${site.github}`}>
            <GithubIcon style={{ width, color }} />
          </Link>
        </li>
      )}
      {site.twitter && (
        <li className="list-inline-item">
          <Link to={`https://twitter.com/${site.twitter}`}>
            <TwitterIcon style={{ width, color }} />
          </Link>
        </li>
      )}
      {site.linkedin && (
        <li className="list-inline-item">
          <Link to={`https://linkedin.com/in/${site.linkedin}`}>
            <LinkedinIcon style={{ width, color }} />
          </Link>
        </li>
      )}
    </ul>
  )
}

export default function Layout({ site, slug, postLocales, children, locale, langs = [] }) {
  const [open, setOpen] = React.useState(false)

  // when blog-post availableLocales is present, when home use langs
  const availableLocales = postLocales && Object.keys(postLocales)
  const langLinks = availableLocales ? availableLocales : langs

  return (
    <>
      <header>
        <Navbar color="light" light expand="md" fixed="top">
          <Container fluid="md">
            <Link to={getPath(locale)} className="navbar-brand">
              {site.name}
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
                  {langLinks.map((lang) => (
                    <Link
                      key={lang}
                      to={getPath(lang, slug)}
                      className={`nav-link ${lang === locale ? 'active-lang' : ''}`}
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
            © {new Date().getFullYear()} {site.name} - Built with
            {` `}
            <Link to="https://www.gatsbyjs.org">Gatsby</Link>
          </div>
        </Container>
      </footer>
    </>
  )
}

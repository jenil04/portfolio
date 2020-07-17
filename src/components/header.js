import React, { useState } from "react"
import styled from "styled-components"
import { useStaticQuery, Link, graphql } from "gatsby"
import "../scss/main.scss"

export default ({ children }) => {
  const [menuStatus, menuChange] = useState(false)

  const ListLink = props => (
    <li className="nav-link">
      <Link to={props.to}>{props.children}</Link>
    </li>
  )

  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  const HeaderCont = styled.div`
    @media (max-width: 767px) {
      .nav-cont {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        bottom: 0;
        right: 0;
        background-color: #2d2828;
        z-index: 2;
        transform: translateX(100%);
        transition: var(--transMed);
        font-family: 'FontRegular';


        ul {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      }

      .menu-open {
        position: relative;
        z-index: 2;

        .nav-cont {
          transform: translateX(0%);
          font-family: 'FontRegular';

        }
      }

      .header-cont {
        button {
          z-index: 3;
          font-size: 1.15rem;
        }
      }
    }

    .header-cont {
      z-index: 3;
      position: fixed;
      left: 0;
      right: 0;
      display: flex;
      justify-content: space-between;
      grid-template-columns: 200px auto;
      grid-gap: 1rem;
      padding: 1rem 2rem;
      background-color: #2d2828;

      .logo-cont {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-family: 'FontBold';
        z-index: 3;
        color: #fff;

        a {
          display: inline-block;
          line-height: 2.5rem;
          color: #fff;
          text-decoration: none;
          transition: var(--transMed);
          position: relative;

          &:hover {
            color: #0000FF;
          }
        }

        img {
          vertical-align: middle;
          width: 125px;

          @media (min-width: 768px) {
            width: 150px;
          }
        }

        h2 {
          margin: 0;
          font-size: 1.5rem;

          @media (min-width: 768px) {
            font-size: 1.75rem;
          }
        }
      }

      @media (min-width: 768px) {
        button {
          display: none;
        }
      }
      .nav-cont {
        ul {
          height: 100%;
          margin: 0;
          padding: 0;
          display: flex;

          a {
            display: inline-block;
            line-height: 2.5rem;
            color: #fff;
            text-decoration: none;
            transition: var(--transMed);
            position: relative;
  
            &:hover {
              color: #C0C0C0;
            }
          }


          li {
            padding-left: 2rem;
            padding-right: 2rem;
            margin-top: 1rem;
            margin-bottom: 1rem;
            font-size: 1.15rem;
            font-weight: 300;
            font-family: 'FontRegular';

          }
        }

        @media (min-width: 768px) {
          ul {
            align-items: center;
            li {
              padding-left: 2rem;
              justify-content: flex-end;
            }
          }
        }
      }
    }
  `

  return (
    <HeaderCont>
      <div className={`${menuStatus ? "menu-open" : "menu-closed"}`}>
        <header className="header-cont">
          <div className="logo-cont">
            <Link to="/">
              Jenil Thakker
            </Link>
          </div>
          <button className="btn" onClick={() => menuChange(!menuStatus)}>
            Menu
          </button>
          <nav className="nav-cont">
            <ul>
              <ListLink to="/profile/">About me</ListLink> 
              <a href="https://jenil.substack.com/p/coming-soon">Blog</a>
            </ul>
          </nav>
        </header>
      </div>
    </HeaderCont>
  )
}

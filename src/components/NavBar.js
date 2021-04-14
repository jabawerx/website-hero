import React from 'react'
import { HashLink } from 'react-router-hash-link'
import styled from 'styled-components'

const Nav = styled.nav`
  display:flex;
  text-transform:uppercase;
`;

const LI = styled.li`
  margin:0 15px;
  &:first-child{
    margin-left:0;
  }
  &:last-child{
    margin-right:0;
  }
  @media(max-width:700px){
    &{
      margin:0 7px;
    }
  }
`;



export const NavBar = () => {
  return(
    <Nav>
      <LI><HashLink smooth to="/#about">About</HashLink></LI>
      <LI><HashLink smooth to="/#hire">Hire</HashLink></LI>
      <LI><HashLink smooth to="/#software">Software</HashLink></LI>
      <LI><HashLink smooth to="/#blog-tease">Blog</HashLink></LI>
    </Nav>
  )
}
import React from 'react'
import styled from 'styled-components'
import { Copyright, Reserved, Author } from './'


const FooterArea = styled.footer`
  font-family: 'Raleway', sans-serif;
  display: flex;
  flex-direction:column;
  align-items:center;
  text-align:center;
  color:#fff;
  background-color:#000;
  padding:60px 0;
`;

const FlexList = styled.ul`
  width:100%;
  display: flex;
  flex-wrap:wrap;
  justify-content:center;
`;

const ListItem = styled.li`
  padding:0 30px;
  flex-basis:33%;
  text-align:center;
  color:#ddd;
  font-size:0.75rem;
  @media(max-width: 1000px){
    &{
      flex-basis:100%;
      margin-bottom:65px;
    }
    &:last-child{
      margin-bottom:0;
    }
  }
`;

export const Footer = () => {
  return(
    <FooterArea>
      <FlexList>
        <ListItem><Copyright /></ListItem>
        <ListItem><Reserved /></ListItem>
        <ListItem><Author /></ListItem> 
      </FlexList>
    </FooterArea>
  )
}
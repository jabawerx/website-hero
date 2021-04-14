import React from 'react'
import styled from 'styled-components'

const HireSection = styled.section`
  font-family: 'Raleway', sans-serif;
  background:#ddd;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 110px 100px;

  @media(max-width:1000px){
    &{
      padding:100px 50px;
    }
  }
  @media(max-width:800px){
    &{
      min-height:600px;
    }
  }
  @media(max-width:600px){
    &{
      padding:125px 30px;
    }
  }
`;

const P = styled.p`
  max-width:800px;
  text-align:center;
  margin-bottom:35px;
  line-height:1.5;
  text-align:center;
  padding-left:0;
  margin:0;
  @media(max-width: 1000px){
    &{
      padding:0;
    }
  }
`;

const Heading3 = styled.h3`
  text-transform:uppercase;
  font-size:50px;
  margin-bottom:5%;
`;

const Heading4 = styled.h4`
  font-size:20px;
  margin-bottom:25px;
`;


const UnorderedList = styled.ul`
  width:100%;
  display: flex;
  flex-wrap:wrap;
  justify-content:center;
`;

const ListItem = styled.li`
  padding:0 30px;
  flex-basis:33%;
  text-align:center;
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

const Icon = styled.svg`
  font-size:50px;
  fill:crimson;
  margin-bottom:25px;
`;


export const Hire = () => {
  return(
    <HireSection id="hire">
      <Heading3>Hire</Heading3>
      <UnorderedList>
        <ListItem>
        <Icon xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 0 24 24" width="50px"><path d="M0 0h24v24H0z" fill="none"/><path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V4h18v10z"/></Icon>
          <Heading4>Web Design</Heading4>
          <P>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quia nisi facere excepturi! Voluptatibus eos veritatis quo ratione voluptates at?</P>
        </ListItem>
        <ListItem>
        <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="crimson" width="50px" height="50px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM7.01 13.47l-2.55-2.55-1.27 1.27L7 16l7.19-7.19-1.27-1.27z"/></Icon>
          <Heading4>Mobile Applications</Heading4>
          <P>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quia nisi facere excepturi! Voluptatibus eos veritatis quo ratione voluptates at?</P>
        </ListItem>
        <ListItem>
        <Icon xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 0 24 24" fill="crimson" width="50px"><path d="M0 0h24v24H0z" fill="none"/><path fill="crimson" d="M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z"/></Icon>
          <Heading4>Hosting</Heading4>
          <P>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quia nisi facere excepturi! Voluptatibus eos veritatis quo ratione voluptates at?</P>
        </ListItem>

      </UnorderedList>
    </HireSection>
  )
}
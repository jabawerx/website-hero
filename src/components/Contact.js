import React from 'react'
import styled from 'styled-components'

const ContactSection = styled.section`
  font-family: 'Raleway', sans-serif;
  background:#fff;
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

const Heading3 = styled.h3`
  text-transform:uppercase;
  font-size:50px;
  margin-bottom:5%;
`;

const UnorderedList = styled.ul`
  width:100%;
  display: flex;
  flex-wrap:wrap;
  justify-content:center;
`;

const ListItem = styled.li`
  padding:0 30px;
  flex-basis:25%;
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

const P = styled.p`
  max-width:800px;
  text-align:center;
  margin-bottom:35px;
  line-height:1.5;
  padding-left:0;
  margin:0;
  @media(max-width: 1000px){
    &{
      padding:0;
    }
  }
`;

const IDLIST = styled.div`
  display:flex;
  flex-direction:column;
  max-width:800px;
  margin-bottom:35px;
  line-height:1.5;
  padding-left:0;
  margin:0;
  @media(max-width: 1000px){
    &{
      padding:0;
    }
  }
`;

const ID = styled.div`
  display:flex;
  max-width:800px;
  line-height:1.5;
  padding:0;
  margin:0;
  @media(max-width: 1000px){
    &{
      padding:0;
    }
  }
`;

const CLEFT = styled.div`
  text-align:right;
  width:50%;
  padding-right:0.5rem;
  margin:0;
  @media(max-width: 1000px){
    &{
      padding-right:0.5rem;
    }
  }
`;

const CRIGHT = styled.div`
  text-align:left;
  width:50%;
  padding-left:0.5rem;
  margin:0;
  @media(max-width: 1000px){
    &{
      padding-left:0.5rem;
    }
  }
`;




export const Contact = () => {
  return(
    <ContactSection id="contact">
      <Heading3>Contact</Heading3>
      <UnorderedList>
      <ListItem>
          <Icon height="50px" viewBox="-2 -2 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4z"/></Icon>
          <IDLIST>
            <ID><CLEFT>DUNS</CLEFT><CRIGHT>102318031</CRIGHT></ID>
            <ID><CLEFT>UEID</CLEFT><CRIGHT>VRJQWZ2YNAB5</CRIGHT></ID>
            <ID><CLEFT>CAGE</CLEFT><CRIGHT>-----</CRIGHT></ID>
          </IDLIST>
        </ListItem>
        {/*
        <ListItem>
          <Icon xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 0 24 24" width="50px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></Icon>
          <P>Valparaiso, FL</P>
        </ListItem>
        */}
        <ListItem>
          <Icon xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 0 24 24" width="50px"><path d="M0 0h24v24H0z" fill="none"/><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></Icon>
          <P>+850 295 8231</P>
        </ListItem>
        <ListItem>
          <Icon xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 0 24 24" width="50px"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></Icon>
          <P>info@jabawerx.com <br />jabawerx.com</P>
        </ListItem>
      </UnorderedList>
    </ContactSection>
  )
}
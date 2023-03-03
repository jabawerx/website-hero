import React from 'react'
import styled from 'styled-components'

const ServiceSection = styled.section`
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
  margin-bottom:35px;
  line-height:1.5;
  text-align:justify;
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


export const Services = () => {
  return(
    <ServiceSection id="services">
      <Heading3>SERVICES</Heading3>
      <UnorderedList>
        <ListItem>
        <Icon xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 0 24 24" width="50px"><path d="M0 0h24v24H0z" fill="none"/><path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V4h18v10z"/></Icon>
          <Heading4>Software Development</Heading4>
          <P>Our developers use the latest technologies to push the edge of innovation. By continously exploring emerging technologies such as machine learning and artificial intelligence, we create cutting-edge software products that transform industries.</P>
        </ListItem>
        <ListItem>
        <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="crimson" width="50px" height="50px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM7.01 13.47l-2.55-2.55-1.27 1.27L7 16l7.19-7.19-1.27-1.27z"/></Icon>
          <Heading4>Agile Solutions</Heading4>
          <P>Our experienced trainers are dedicated to helping participants understand the principles and best practices of agile practices so they may apply them in their own work and drive their organizations toward greater efficiency and success.</P>
        </ListItem>
        <ListItem>
        <Icon xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 0 24 24" fill="crimson" width="50px"><path d="M0 0h24v24H0z" fill="none"/><path fill="crimson" d="M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z"/></Icon>
          <Heading4>Cloud Deployment</Heading4>
          <P>Cloud providers such as AWS, Google Cloud and Microsoft Azure have become an essential component of modern software development. We are commited to helping our clients from initial planning to ongoing maintenance to improve their systems operations.</P>
        </ListItem>

      </UnorderedList>
    </ServiceSection>
  )
}
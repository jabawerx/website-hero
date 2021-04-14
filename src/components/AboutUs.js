import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const AboutArea = styled.section`
  font-family: 'Raleway', sans-serif;
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
  text-align:left;
  padding-left:0;
`;

const Title = styled.h3`
  text-transform:uppercase;
  font-size:50px;
  margin-bottom:5%;
`;

const Content = styled.ul`
  width:100%;
  display: flex;
  flex-wrap:wrap;
  justify-content:center;
`;

const LI = styled.li`
  padding:20px;
  height:290px;
  background-clip:content-box;
  background-size:cover;
  background-position:center;
`;

const Left = styled(LI)`
  flex-basis:40%;
  background-image:url(images/960version_control.jpg);
  @media(max-width:1000px){
    &{
      flex-basis:100%;
      padding:8px;
    }
  }
`;

const Right = styled(LI)`
  flex-basis:60%;
  @media(max-width:1000px){
    &{
      flex-basis:100%;
      padding:8px;
    }
  }
`;

const H2 = styled.h2`
  margin-bottom:2%;
`;

const AboutBtn = styled(Link)`
  padding:15px 35px;
  background:crimson;
  border-radius:50px;
  text-transform:uppercase;
  color:#fff;
`;




export const AboutUs = () => {
  return(
    <AboutArea id="about">
      <Title>About Us</Title>
      <Content>
        <Left></Left>
        <Right>
          <H2>About our Company</H2>
          <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente laborum dolore magni eaque, ratione fugit repudiandae? Dolor ea quo nobis.</P>
          <AboutBtn to="#">Learn more</AboutBtn>
        </Right>
      </Content>
    </AboutArea>
  )
}
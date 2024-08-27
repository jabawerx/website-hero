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
  margin-bottom:35px;
  line-height:1.5;
  text-align:justify;
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
  /*height:290px;*/
  background-clip:content-box;
  background-size:cover;
  background-position:center;
`;

const Left = styled(LI)`
  flex-basis:40%;
  background-image:url(images/jabawerx_version_control.jpg);
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
          <P>We are a veteran-owned, small business specializing in agile software engineering. We offer innovative solutions to help organizations tackle the challenges of tomorrow.  Our team is made up of skilled and experienced professionals who are dedicated to providing high-quality software solutions to our clients. With our expertise in agile methodologies, we are able to quickly adapt to changing requirements and deliver projects on time and within budget. As a small business, we pride ourselves on providing personalized attention to our clients and ensuring their satisfaction with our work. We are passionate about technology and committed to delivering reliable software and expert agile training solutions that exceed expectations.
          </P>
          <AboutBtn to="#">Learn more</AboutBtn>
        </Right>
      </Content>
    </AboutArea>
  )
}
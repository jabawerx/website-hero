import React from 'react'
import { HashLink } from 'react-router-hash-link'
import styled from 'styled-components'

const Section = styled.section`
  font-family: 'Raleway', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 110px 100px;
  position:relative;
  justify-content:center;
  min-height:100vh;
  color:#fff;
  text-align:center;

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

const BannerImg = styled.div`
  background-image: url(images/960splash_camo.jpg);
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-size:cover;
  z-index:-1;
  &:after{
    content:'';
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:#000;
    opacity:0.8;
  }
`;

const H1 = styled.h1`
  margin-bottom: 10px;
  font-size:48px;
  font-family:'Raleway',sans-serif;
  font-weight: 100;
  text-transform:uppercase;
  /*letter-spacing:0.3rem;*/
  @media(max-width:800px){
    &{
      font-size:28px;
    }
  }
`;

const H3 = styled.h3`
  margin-bottom: 30px;
  font-size:19px;
  text-transform:uppercase;
  font-weight:100;
  font-family:'Raleway',sans-serif;
  @media(max-width:800px){
    &{
      font-size:11px;
    }
  }
`;

const RedButton = styled(HashLink)`
  padding:15px 35px;
  background:crimson;
  border-radius:50px;
  text-transform:uppercase;
  @media(max-width:800px){
    &{
      padding:15px 40px;
    }
  }
`;



export const BannerArea = () => {
  return(
    <Section>
      <BannerImg></BannerImg>
      <H1>Software Engineering</H1>
      <H3>Modern Multiplatform Applications</H3>
      <RedButton smooth to="/#contact">Contact Us</RedButton>
    </Section>
  )
}
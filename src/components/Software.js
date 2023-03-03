import React from 'react'
import styled from 'styled-components'

const SoftwareSection = styled.section`
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

const Title = styled.h2`
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

const ListItem = styled.li`
  padding:20px;
  height:290px;
  background-clip:content-box;
  background-size:cover;
  background-position:center;
`;

const Left = styled(ListItem)`
  flex-basis:60%;
  @media(max-width:1000px){
    &{
      flex-basis:100%;
      padding:8px;
      order:2;
    }
  }
`;
const Right = styled(ListItem)`
  flex-basis:40%;
  background-image:url(images/jabawerx_wireframe.jpg);
  @media(max-width:1000px){
    &{
      flex-basis:100%;
      padding:8px;
      order:1;
    }
  }
`;

/*
const SubTitle = styled.h3`
  margin-bottom:2%;
`;
*/

const P = styled.p`
  max-width:800px;
  margin-bottom:35px;
  line-height:1.5;
  text-align:justify;
  padding-left:0;
`;

/*
const AboutBtn = styled(Link)`
  padding:15px 35px;
  background:crimson;
  border-radius:50px;
  text-transform:uppercase;
  color:#fff;
`;
*/


export const Software = () => {
  return(
    <SoftwareSection id="software">
      <Title>Software</Title>
      <Content>
        <Left>
          <P>The field of software development has undergone significant changes and improvements over the past few years. The emergence of agile methodologies has revolutionized the way software development projects are executed, with a focus on rapid iteration, continuous delivery and integration.</P>
          <P>The adoption of DevOps practices has resulted in better collaboration and communication, leading to improved software quality and faster time-to-market. The increasing use of cloud computing and containerization has also made it easier for developers to build, deploy, and scale their applications.</P>
        </Left>
        <Right></Right>
      </Content>
    </SoftwareSection>
  );
}
import React from 'react'
import styled from 'styled-components'

const NewsSection = styled.section`
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

const Title = styled.h3`
  text-transform:uppercase;
  font-size:50px;
  margin-bottom:5%;
`;

const SubTitle = styled.h4`
  font-size:20px;
  margin-bottom:25px;
`;


const NewsDouble = styled.ul`
  width:100%;
  display: flex;
  flex-wrap:wrap;
  justify-content:center;
`;

const NewsItem = styled.li`
  padding:0 30px;
  flex-basis:50%;
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
const Image1 = styled.div`
  background-image:url(images/jabawerx_openai.jpg);
  padding:20px;
  height:290px;
  background-clip:content-box;
  background-size:cover;
  background-position:center;
`;
const Image2 = styled.div`
  background-image:url(images/jabawerx_javascript.jpg);
  padding:20px;
  height:290px;
  background-clip:content-box;
  background-size:cover;
  background-position:center;
`;


export const NewsTease = () => {
  return(
    <NewsSection id="news-tease">
      <Title>Latest</Title>
      <NewsDouble>
        <NewsItem>
        <Image1></Image1>
          <SubTitle>March 2023</SubTitle>
          <P>Developers can now integrate ChatGPT and Whisper models into their apps and products through OpenAI's APIs.</P>
        </NewsItem>
        <NewsItem>
        <Image2></Image2>
        <SubTitle>June 2022</SubTitle>
          <P>The thirteenth edition of the ECMAScript Language Specification, ECMAScript 2022 Language, has been approved.</P>
        </NewsItem>
      </NewsDouble>
    </NewsSection>
  )
}
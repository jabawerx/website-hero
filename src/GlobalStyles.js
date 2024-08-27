import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  ul,nav{
    list-style:none;
  }
  a{
    text-decoration:none;
    cursor:pointer;
    color:inherit;
  }
`;
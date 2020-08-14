import styled from "styled-components"

export  const Button = styled.button`
padding: 0.9rem;
color: white;
border-radius: ${props => props.noborder? "none" : "0.5rem"};
transition: all 0.5s ease-in-out;
background: ${props => props.background};
margin-right: ${props => props.margined && "30px"};
outline : none;
cursor: pointer;
width: ${props => props.fullwidth && "100%"};
border: 1px solid rgb(150, 150, 243);
text-transform : capitalize;
font-size: 1rem;
font-weight: 700;
&:hover{
 background-color: ${props => props.main && "rgb(65, 65, 238)"};
 border : 1px solid yellow;
 color: ${props => props.primary && "rgb(240, 178, 62)"};
}

`
export const Titletext = styled.h1`
    font-size: 2.5rem;
    font-weight: 600;
    color:rgb(240, 178, 62);
    height: 20vh;
    line-height: 20vh;
    text-align: center;
    `
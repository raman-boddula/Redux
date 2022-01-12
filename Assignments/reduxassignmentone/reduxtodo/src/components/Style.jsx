import styled from "styled-components";

export const StyledButton = styled.button`
color:#fe7e6d;
background-color:#feece9
padding:10px 20px;
font-weight:bold;
border-radius:5px;
`;
export const H1 = styled.h1`
font-style:italic;
font-family:Helvetica
`;
export const Div = styled.div`
width:60%;
display:grid;
grid-template-columns: repeat(4,23%);
grid-gap:2%;
margin-left:20%;
background:#FFEEAD;
padding:10px;
border:1px solid red;
&>h5{
    color:black;
    font-family:nanospace;;
}`;
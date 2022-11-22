import styled from 'styled-components/native';
import theme from "../../global/styles/theme";



export const Container = styled.View`
height: 50%;
    background-color: green;
    padding: 24px;
`


export const Nome = styled.Text``;


export const CPF = styled.Text``;
export const CEP = styled.Text``;
export const Email = styled.Text``;
export const Telefone = styled.Text``;

export const ContainerButton = styled.View`
width:100%;
background:blue;
height:100px;
position:relative;
margin-top:50px;
align-items:center;
`

export const AtualizarInfo = styled.TouchableOpacity`
width:70%;
height:50%;
position: absolute;
background:red;
bottom: 0px;
align-items:center;
justify-content:center;
border-radius:6px;
`;

export const TextAtualizarinfo = styled.Text`
font-family:${theme.fonts.minusTitle};
font-size:20px;

`;


import styled from 'styled-components/native';
import theme from "../../global/styles/theme";



export const Container = styled.View`
/* height: 50%; */
padding: 24px;
`

export const ContainerInfo = styled.View`
/* height:60%; */
justify-content:space-evenly;


`;

export const Nome = styled.Text`
font-family:${theme.fonts.text};
margin-top:12px;
margin-bottom:12px;
`;
export const CPF = styled.Text`
font-family:${theme.fonts.text};
margin-top:12px;
margin-bottom:12px;
`;
export const CEP = styled.Text`
margin-top:12px;
margin-bottom:12px;
font-family:${theme.fonts.text};
`;
export const Email = styled.Text`
margin-top:12px;
margin-bottom:12px;
font-family:${theme.fonts.text};
`;
export const Telefone = styled.Text`
margin-top:12px;
margin-bottom:12px;
font-family:${theme.fonts.text};
`;

export const ContainerButton = styled.View`
/* margin-top:12px;
margin-bottom:12px; */
width:100%;
/* height:16%; */
/* background:green; */
/* position:absolute; */
bottom:0px;
`

export const AtualizarInfo = styled.TouchableOpacity`
width:70%;
/* height:100%; */
/* position: absolute; */
/* margin-left:16px; */
/* margin-top:12px; */
background:red;
bottom: 0px;
align-items:center;
justify-content:center;
border-radius:50px;
`;

export const TextAtualizarinfo = styled.Text`
font-family:${theme.fonts.subTitle};
text-transform: uppercase;
color:${theme.colors.white};
font-size:16px;
margin-top:16px;
margin-bottom:16px;

`;


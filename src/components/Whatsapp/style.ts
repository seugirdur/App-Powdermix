import styled from "styled-components/native";
import theme from "../../global/styles/theme";


export const Container = styled.View`
flex:1;
margin-top:24px;
margin-bottom:30px;
width:100%;
/* height:400px; */
background: ${theme.colors.red};
align-items:center;
justify-content:center;
padding:30px;
`;

export const ContainerPostZap = styled.View`
width:100%;
/* background:pink; */
margin-top:16px;
align-items:center;
justify-content:center;
`;

export const ButtonZap = styled.TouchableOpacity`
background: white;
border-radius:12px;
width:100%;

align-items:center;
justify-content:center;
`;

export const TextoZap = styled.Text`
font-family: ${theme.fonts.title};
color: ${theme.colors.red};
text-align:center;
font-size:20px;
margin:16px;
`;
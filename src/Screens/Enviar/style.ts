import styled from "styled-components/native";
import theme from "../../global/styles/theme";


export const Container = styled.ScrollView`
flex:1;
height:100%;
/* background:yellow; */
`;


export const TextWarning = styled.Text`
font-family:${theme.fonts.description};
color:${theme.colors.gray900};
font-size:9px;
/* position:absolute; */
bottom:0px;
margin-top:5%;
text-align:center;

`;



export const ButtonEnviar = styled.TouchableOpacity`
/* height:10%; */
background-color:${theme.colors.red};
width:100%;
align-items:center;
justify-content:center;
/* position:absolute; */
bottom:0px;

`;


export const EnviarText = styled.Text`
font-size:16px;
font-family:${theme.fonts.subTitle};
text-transform:uppercase;
color:${theme.colors.white};
margin-top:20px;
margin-bottom:20px;
`;
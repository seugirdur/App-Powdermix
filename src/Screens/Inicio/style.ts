import styled from 'styled-components/native'
import theme from '../../global/styles/theme';


export const Container = styled.View`
    flex:1
    background-color: #EEEEEE
`;


export const TitleHistoric = styled.Text`
font-family:${theme.fonts.title};
color:${theme.colors.red};
font-size:24px;
text-align:center;
text-transform:uppercase;
margin:10px;

`;



export const Carrosel = styled.View`
margin-left: auto;
margin-right: auto;
width: 100%;
top:120px;
height:30%;
justify-content:center;
/* background-color:red */
`

export const Image = styled.Image`
height:100%;
width: 100%;
margin-left: auto;
margin-right: auto;
`

export const ButtonLeft = styled.TouchableOpacity`
position:absolute;
align-items:center;
left:5%;
justify-content:center;
`


export const ButtonRight = styled.TouchableOpacity`
position:absolute;
left:90%
`

export const ThreeDots = styled.TouchableOpacity`
width:100%;
height:40px;
position:relative;
top:130px;
flex-direction: row;
justify-content:center
`

export const Flatlist = styled.TouchableOpacity`
position:relative;
left:90%;
`;

export const Button = styled.TouchableOpacity`
width:200px;
background-color:blue`

export const Text = styled.Text`
font-weight: bold;
font-size: 25px;
line-height: 31px;
margin-top: 5px;
text-transform: capitalize;
color: #000;
`;

export const CardContainer = styled.View`
margin-left: auto;
margin-right: auto;
width: 95%;
top:140px;
height:55%;
justify-content:center;
background-color:${theme.colors.white};
`;

export const ModalContainer = styled.Modal`

`;

export const ModalView = styled.View`
width: 100%;
height:100%;
justify-content:center;
background-color:'rgba(0,0,0,0.5)';
`;

export const CartContainer = styled.View`
background-color:green;
width: 50%;
height:50%;

`;

export const Texttest = styled.Text`
font-size: 20px;
color:red;
`;
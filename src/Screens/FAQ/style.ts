import styled from 'styled-components/native'
import theme from '../../global/styles/theme';


export const Container = styled.View`
    flex:1;
    background-color: '#EEEEEE';
    justify-content:center;
    align-items:center;
`

export const StatusBar = styled.View`
width:100%;
top:35px;
height:56px;
position:absolute;
justify-content: space-between;
flex-direction: row;
`;

export const ContainerFlat = styled.View`
top:140px;
margin-bottom:200px;
`;

export const TitleHistoric = styled.Text`
font-family:${theme.fonts.title};
color:${theme.colors.red};
font-size:24px;
text-align:center;
text-transform:uppercase;
margin:10px;

`;

export const FlatContainer = styled.View``

export const FaqTitleContainer = styled.View`
align-items:center;
margin:12px;
`;

export const FaqTitle = styled.Text`
font-family:${theme.fonts.subTitle};
font-size:20px;
`

export const FaqDescricaoContainer = styled.View`
padding:12px;
`

export const FaqDescricao = styled.Text`
font-family:${theme.fonts.subTitle};
`





export const Hamburguer = styled.TouchableOpacity`

justify-content:center;
left:32px;
`

export const Logo = styled.Image`
justify-content: center;
width:200px;
height:55px;
margin-left:64px;
`

export const SquareRound = styled.TouchableOpacity`
width:80px;
right:-10px;
justify-content: center;
align-items: center;
border-radius: 15px;
background-color:red`

export const Carrinho = styled.Image`
width:40px;
background-color:red`

export const Carrosel = styled.View`
margin-left: auto;
margin-right: auto;
width: 95%;
top:140px;
height:200px;
justify-content:center;
background-color:red`

export const Image = styled.Image`
height:200px;
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
top:150px;
flex-direction: row;
justify-content:center
`

export const Flatlist = styled.TouchableOpacity`
position:relative;
left:90%
`

export const Button = styled.TouchableOpacity`
width:200px;
background-color:blue`
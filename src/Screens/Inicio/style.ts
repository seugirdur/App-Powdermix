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

export const FlatlistA = styled.TouchableOpacity`
position:relative;
left:90%;
/* top:-16px; */
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
top:120px;
height:50%;
margin-bottom:80px;
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

type Video = {
  type: string
}

export const CardVertical = styled.TouchableOpacity`
width:95%;
height:100px;
justify-content: space-between;
flex-direction: row;
background-color:${theme.colors.Cards.background};
margin-left:10px;
margin-right:10px;
margin-bottom:15px;

`;



export const ContainerImage = styled.View`
height:100%;
width:27%;
justify-content:center;
align-items: center;

`;

export const ProdutoImage = styled.Image`
  width: 100%;
  height: 90%;
  justify-content:center;
`;



export const ContainerText = styled.View`
height:90%;
width:40%;
/* background: blue; */

`;

export const Titulo = styled.Text`
color: ${theme.colors.Cards.darkRed};
font-family:${theme.fonts.title};
/* font-size: 15px; */
white-space: nowrap;
text-overflow: ellipsis;
/* background: yellow; */
overflow: hidden;
margin: 1px;

`;

export const Desc = styled.Text`
color: ${theme.colors.subtitle};
font-family:${theme.fonts.subTitle};
font-size: 10px;
/* background: pink; */
flex: 1;
white-space: nowrap;
/* overflow: hidden; */
text-overflow: ellipsis;
height:100%;
`;



export const ContainerVideo = styled.View`
height:100px;
width:100px;
justify-content:center;
align-items: center;
border-radius:4px;
`;

export const Video = styled.Image<Video>`
width: 80px;
height: 40px;
justify-content:center;
border-radius:4px;

`;


export const OverFlowVideo = styled.View`
  background-color: ${theme.colors.Cards.black};
  width: 80px;
  height: 40px;
  overflow: hidden;
  opacity: 0.5;
  border-radius:4px;

  position:absolute;
`;

export const VideoIcon = styled.View`
width: 80px;
height: 40px;
position:absolute;
justify-content:center;
align-items: center;
`;


export const ContainerButton = styled.View`
height:100px;
width:100px;
justify-content:center;
align-items: center;
`;

export const BuyButton = styled.TouchableOpacity`
height:50px;
flex-direction:row;
width:70px;
justify-content: center;
align-items: center;
border-radius: 15px;
background-color:red
`;




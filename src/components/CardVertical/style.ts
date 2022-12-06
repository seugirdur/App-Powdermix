import styled, { css } from 'styled-components/native';
import theme from '../../global/styles/theme';


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
padding-left:4px;
/* padding-left:6px; */
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
margin-left:2px;
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




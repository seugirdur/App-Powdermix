import styled, { css } from 'styled-components/native';
import theme from '../../global/styles/theme';


type Video = {
  type: string
}

export const CardVertical = styled.View`
width:95%;
height:100px;
justify-content: space-between;
flex-direction: row;
background-color:${theme.colors.VerticalCard.background};
margin:10px;
`;



export const ContainerImage = styled.View`
height:100px;
width:100px;
justify-content:center;
align-items: center;
background-color:red;

`;

export const ProdutoImage = styled.Image`
  width: 90px;
  height: 90px;
  justify-content:center;
`;



export const ContainerText = styled.View`
height:100px;
width:120px;
background-color:green;

`;

export const Titulo = styled.Text`
color: ${theme.colors.text};
font-family:${theme.fonts.title};
font-size: 15px;
white-space: nowrap;
height:40px;
background-color:red;
text-overflow: ellipsis;
overflow: hidden;
margin: 1px;

`;

export const Desc = styled.Text`
color: ${theme.colors.subtitle};
font-family:${theme.fonts.subTitle};
font-size: 10px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
background-color:yellow;
height:55px;
`;



export const ContainerVideo = styled.View`
height:100px;
width:100px;
justify-content:center;
align-items: center;
`;

export const Video = styled.Image<Video>`
width: 80px;
height: 40px;
justify-content:center;
`;


export const OverFlowVideo = styled.View`
  background-color: ${theme.colors.VerticalCard.black};
  width: 80px;
  height: 40px;
  overflow: hidden;
  opacity: 0.5;
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
background-color:purple;
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




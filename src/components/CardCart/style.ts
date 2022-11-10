import styled, { css } from 'styled-components/native';
import theme from '../../global/styles/theme';


type Video = {
  type: string
}

export const CardCart = styled.TouchableOpacity`
width:95%;
height:100px;
justify-content: space-between;
flex-direction: row;
background-color:${theme.colors.VerticalCard.background};
margin:10px;
`;

export const ContainerImage = styled.View`
height:80%;
width:20%;
justify-content:center;
align-items: center;
background-color: ${theme.colors.VerticalCard.darkRed} ;
`;

export const ProdutoImage = styled.Image`
  width: 90px;
  height: 90px;
  justify-content:center;
`;

export const ContainerText = styled.View`
height:100px;
width:120px;
`;

export const Titulo = styled.Text`
color: ${theme.colors.VerticalCard.darkRed};
font-family:${theme.fonts.title};
font-size: 15px;
white-space: nowrap;
height:40px;
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
height:55px;
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




import styled, { css } from 'styled-components/native';
import theme from '../../global/styles/theme';


type Video = {
  type: string
}

export const CardHorizontal = styled.TouchableOpacity`
width:100px;
height:220px;
justify-content: space-between;
background-color:${theme.colors.white};
margin-left:12px;
border-radius:8px;
`;



export const ContainerImage = styled.View`
height:90px;
width:100%;
justify-content:center;
align-items: center;
border-radius:8px;

`;

export const ProdutoImage = styled.Image`
  width: 80px;
  height: 80px;
  justify-content:center;
  border-radius:8px;

`;



export const ContainerText = styled.View`
height:70px;
width:100%;

`;

export const Titulo = styled.Text`
color: ${theme.colors.Cards.darkRed};
font-family:${theme.fonts.title};
font-size: 15px;
height:40px;
margin: 1px;
text-align: left;
margin-left:4px;

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

export const Price = styled.Text`
color: ${theme.colors.textblack};
font-family:${theme.fonts.minusTitle};
font-size: 10px;
white-space: nowrap;
overflow: hidden;
text-align: center;
text-decoration: underline;
text-overflow: ellipsis;
height:15px;
`;

export const ButtonCard = styled.TouchableOpacity`
margin-top:4px;
background-color:red;
border-radius: 15px;


`;
export const ContainerButton = styled.View`
margin-top:4px;

height:100px;
width:100px;
align-items:center;
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




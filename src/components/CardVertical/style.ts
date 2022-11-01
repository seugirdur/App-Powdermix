import styled, { css } from 'styled-components/native';
import theme from '../../global/styles/theme';




export const CardVertical = styled.View`
width:95%;
height:100px;
justify-content: space-between;
flex-direction: row;
background-color:${theme.colors.VerticalCard.background};
margin:10px;
`;

export const ProdutoImage = styled.Image`
  position: absolute;
  width: 74px;
  height: 32px;
  left: 90px;
  top: -10px;
`;

export const Titulo = styled.Text`
color: ${theme.colors.text};
font-family:${theme.fonts.title};
font-size: 15px;
line-height: 31px;
margin-top: 5px;
`;


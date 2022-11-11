import styled, { css } from 'styled-components/native';
import theme from '../../global/styles/theme';


export const CardCartBorder = styled.TouchableOpacity`
width:95%;
height:100px;
background-color:${theme.colors.gray500};
margin:10px;
align-items:center;
justify-content:center;
border-radius:4px;
`;

export const CardCart = styled.TouchableOpacity`
width:99%;
height:98%;
justify-content: space-between;
flex-direction: row;
background-color:${theme.colors.Cards.background};
align-items:center;
padding-right:8px;
padding-left:8px;
border-radius:4px;
`;


export const ContainerImage = styled.View`
height:80%;
width:25%;
justify-content:center;
align-items: center;
background-color: ${theme.colors.Cards.darkRed} ;
`;

export const ProdutoImage = styled.Image`
width: 100%;
height: 100%;
justify-content:center;
`;

export const ContainerText = styled.View`
height:100%;
width:25%;
justify-content:center;
margin-left:2%;
margin-right:2%;
`;

export const Qtd = styled.Text`
color: ${theme.colors.Cards.black};
font-family:${theme.fonts.text};
font-size: 12px;
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
margin: 1px;
`;

export const Price = styled.Text`
color: ${theme.colors.Cards.black};
font-family:${theme.fonts.minusTitle};
font-size: 12px;
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
margin: 1px;
font-align:center;
`;

export const Titulo = styled.Text`
color: ${theme.colors.Cards.darkRed};
font-family:${theme.fonts.title};
font-size: 11px;
height:50%;
margin: 1px;
`;


export const ContainerTextPrice = styled.View`
height:100%;
width:25%;
justify-content:center;
`;

export const CircleClose = styled.TouchableOpacity`
width:10%;
height:25%;
background-color:${theme.colors.gray300};
position: absolute;
top:4%;
right:2%;
border-radius:20px;
justify-content: center;
align-items:center;
`;



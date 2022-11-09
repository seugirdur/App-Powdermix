import styled from 'styled-components/native';
import theme from '../../global/styles/theme';



export const QuantityBox = styled.View`
width: 25%;
height:80px;
border-radius: 15px;
background-color:white;
margin-right: 15px;
`;

export const QuantityRedBox = styled.View`
width: 100%;
height:35%;
justify-content: center;
align-items: center;
border-top-left-radius: 15px;
border-top-right-radius: 15px;
background-color:${theme.colors.red};
`;

export const TitleQuantity = styled.Text`
color: ${theme.colors.textWhite};
font-family: ${theme.fonts.title};
`;

export const QuantityWhiteBox = styled.View`
/* background-color:${theme.colors.red}; */
background-color:white;
width:100%;
height:65%;
border-bottom-left-radius: 15px;
border-bottom-right-radius: 15px;
align-items:center;
justify-content:space-around;
flex-direction:row;
`;

export const MinusQuantity = styled.TouchableOpacity`
width:25%;
height:50%;
border-radius: 15px;
align-items:center;
justify-content:center;
`;

export const QuantityNumber = styled.Text`
`;

export const PlusQuantity = styled.TouchableOpacity`
/* background-color:${theme.colors.red}; */
width:25%;
height:50%;
align-items:center;
justify-content:center;
border-radius: 15px;


`;
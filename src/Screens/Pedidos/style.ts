import styled from 'styled-components/native'
import theme from '../../global/styles/theme';


export const Container = styled.View`
    flex:1
    background-color: #EEEEEE;
`

export const StatusBar = styled.View`
width:100%;
top:35px;
height:56px;
position:absolute;
justify-content: space-between;
flex-direction: row;
`;

export const WholeScreen = styled.View`
flex:1;
`

export const ContentContainer = styled.View`
border-radius:25px;
border: 1px solid ${theme.colors.cinzapowdermixclaro};
position:absolute;
width:100%;
height:85%;
justify-content:center;
bottom:-12px;
`;

export const FlatlistContainer = styled.View`
justify-content:center;
align-items:center;
margin-bottom:16px;
width:100%;
`;

export const TitleHistoric = styled.Text`
font-family:${theme.fonts.title};
color:${theme.colors.red};
font-size:24px;
text-align:center;
text-transform:uppercase;
margin:10px;

`;


export const CardHistoric = styled.View`
background:white;
width:93%;
padding:10px;
padding-left:16px;
margin-bottom:10px;
`;

export const TopRow = styled.View`
margin:4px;
flex-direction:row;
`;

export const TitleRow = styled.View`
margin:4px;
width:50%;
flex-direction:row;
`;

export const TitleCard = styled.Text`
font-family:${theme.fonts.minusTitle};
text-transform: uppercase;
color:${theme.colors.red};
font-size:16px;

`;

export const DateTitle = styled.Text`
font-family:${theme.fonts.minusTitle};
text-transform: uppercase;
color:${theme.colors.red};

font-size:16px;

`;

export const IconRow = styled.View`
width:50%;
flex-direction:row;
justify-content:flex-end;
`;

export const CircleZap = styled.TouchableOpacity`
width:36px;
height:36px;
background:red;
align-items:center;
justify-content:center;
border-radius:20px;
margin-right:4px;
`;

export const CircleMail = styled.TouchableOpacity`
width:36px;
height:36px;
background:red;
align-items:center;
justify-content:center;
border-radius:20px;
`;



export const TableTitle = styled.View`
flex-direction:row;
justify-content:space-evenly;
margin:4px;
align-items:center;
`;

export const EmptyImage = styled.View`

`;
 
export const NomeLabel = styled.Text`
font-family:${theme.fonts.subTitle};
text-transform: uppercase;
font-size:12px;
text-align:center;
`;

export const QtdLabel = styled.Text`
font-family:${theme.fonts.subTitle};
text-transform: uppercase;
font-size:12px;

`;


export const PrecoLabel = styled.Text`
font-family:${theme.fonts.subTitle};
text-transform: uppercase;
font-size:12px;
text-align:center;
`;



export const NestedFlatlistContainer = styled.View`
width: 100%;

`;


export const NestedContentContainer = styled.View`
width:95%;
margin:10px;
flex-direction:row;
justify-content:space-between
`;

export const ContainerImgProduto = styled.View`
align-items:center;
justify-content:center;
margin-right:8px;


`;

export const ImgProduto = styled.Image`
width:40px;
height:40px;
left:-4px;
`;

export const ProdutoNomeContainer = styled.View`
width:30%;
padding:4px;
`;

export const ProdutoNome = styled.Text`
font-size:14px;
color:${theme.colors.red};
font-family:${theme.fonts.subTitle};
`;

export const QuantidadeProdutoContainer = styled.View`
width:30%;
justify-content:center;

`;

export const QuantidadeProduto = styled.Text`
text-align:center;
font-family:${theme.fonts.subTitle};
color:${theme.colors.red};
font-size:14px;

`;

export const PrecoFinalContainer = styled.View`
width:30%;
/* background:orange; */
justify-content:center;

`;

export const PrecoFinal = styled.Text`
text-align:center;
color:${theme.colors.red};
font-size:14px;

font-family:${theme.fonts.subTitle};
`;


export const ContainerTotal = styled.View`
/* background:blue; */
/* position:absolute; */
align-items:center;
justify-content:center;
width:100%;
bottom:0px;
padding: 12px;
`;

export const Total = styled.View`
background:${theme.colors.red};
border-radius:16px;
width:95%;
margin-left:12px;
margin-right:12px;
margin-bottom:12px;
`;


export const TotalwithLine = styled.View`
flex-direction:row;
padding-left:10px;
padding-right:10px;
justify-content:space-between;
`;


export const TotalLabelContainer = styled.View`
margin:10px;
justify-content:center;
`;


export const TotalLabel = styled.Text`
color:${theme.colors.white};
font-family:${theme.fonts.minusTitle};
`;

export const TotalValues = styled.View`
margin:10px;


`;
export const PriceContainer = styled.View``;
export const PriceQuantity = styled.Text`
color:${theme.colors.white};
font-family:${theme.fonts.minusTitle};
`;



export const FreteContainer = styled.View``;
export const FreteText = styled.Text`
color:${theme.colors.white};
font-family:${theme.fonts.title};
`;

export const ContainerLine = styled.View`
align-items:center;
justify-content:center;
`;

export const Line = styled.View`
width:90%;
height:1px;
margin-bottom:8px;
background: white;

`;

export const RefazerContainer = styled.TouchableOpacity`
width:100%;
align-items:center;
justify-content:center;
`;

export const Refazer = styled.Text`
color:${theme.colors.red};
font-size:20px;
font-family:${theme.fonts.subTitle};

`;
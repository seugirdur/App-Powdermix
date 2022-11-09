import styled from 'styled-components/native'
import theme from '../../global/styles/theme';


export const Container = styled.View`
    flex:1
    background-color: ${theme.colors.white}
`

export const ScrollContainer = styled.ScrollView`
margin-top:100px;
background-color: ${theme.colors.background};
`;

export const Carrosel = styled.View`
margin-left: auto;
margin-right: auto;
width: 100%;
margin-top:4px;
height:300px;
justify-content:center;
background-color:red`

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

flex-direction: row;
justify-content:center
`

export const Prices = styled.View`
width:100%
height:42px;
flex-direction: row;
`;

export const OriginalPrice = styled.Text`
position: relative;
top: 20px;
text-decoration: line-through;
margin-left:20px
color:${theme.colors.subtitle}
font-family:${theme.fonts.text};

`;

export const PromocionalPrice = styled.Text`
color: ${theme.colors.title}
font-size:32px;
margin-left:5px;
font-family:${theme.fonts.minusTitle};
text-decoration: underline;
`;

export const Name = styled.View`
width:100%

margin-top:16px;
padding-left:16px;
`;

export const Title = styled.Text`
color:${theme.colors.title}
font-family:${theme.fonts.minusTitle};

`;


export const BigName = styled.Text`
color:${theme.colors.textblack};
margin-top:4px;
font-size:24px;
font-family:${theme.fonts.minusTitle};

`;

export const ContainerButton = styled.View`
width:100%;
height:100px;
margin-top:24px;
justify-content: center;
align-items: center;
flex-direction:row;
`;

export const QuantityBox = styled.View`
width: 25%;
height:80px;
border-radius: 15px;
background-color:white;
margin-right: 15px;
`

export const QuantityRedBox = styled.View`
width: 100%;
height:35%;
justify-content: center;
align-items: center;
border-top-left-radius: 15px;
border-top-right-radius: 15px;
background-color:${theme.colors.red};
`

export const TitleQuantity = styled.Text`
color: ${theme.colors.textWhite};
font-family: ${theme.fonts.title};
`

export const QuantityWhiteBox = styled.View`
/* background-color:${theme.colors.red}; */
background-color:white;
width:100%;
height:65%;
border-bottom-left-radius: 15px;
border-bottom-right-radius: 15px;
`

export const MinusQuantity = styled.View`
background-color:${theme.colors.red};
width:25%;
height:25%;
`



export const ButtonBuy = styled.TouchableOpacity`
width:65%;
height:80px;
justify-content: center;
align-items: center;
border-radius: 15px;
background-color:${theme.colors.red};
flex-direction:row;
overflow-wrap: break-word;

`;

export const TextButton = styled.Text`
text-transform: uppercase;
color: ${theme.colors.textWhite};
font-family: ${theme.fonts.title};
font-size:20px;
width:30px;
margin-left:16px;
margin-right:40px;
overflow-wrap: break-word;
flex: 1;
flexShrink: 1;
justify-content: center;
align-items: center;
textAlign: center;
width:20%;
`;


export const Description =  styled.View`
width:100%;
margin-top:12px;
padding-left:12px;
padding-right:12px;

`;

export const TitleDesc =  styled.Text`
font-family: ${theme.fonts.minusTitle};
color: ${theme.colors.red};

`;

export const TextDesc =  styled.Text`
margin-top:4px;
font-family:${theme.fonts.text};
color: ${theme.colors.subtitle};
`;

export const Video =  styled.View`
margin-top:16px;
`;

export const Hyperlink = styled.Text`
color: ${theme.colors.red};
margin-top:8px;
font-family: ${theme.fonts.minusTitle};
font-size: 18px;
margin-left:8px;
text-decoration: underline;
`;

export const ScrollHorizontal = styled.FlatList`

`

export const CardContainer = styled.View`
margin-top:16px;
margin-bottom:10px;

`;


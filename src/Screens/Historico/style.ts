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

export const ContentContainer = styled.View`

border-radius:25px;
border: 1px solid ${theme.colors.cinzapowdermixclaro};
position:absolute;
width:100%;
height:85%;
padding-bottom:24px;
justify-content:center;
bottom:-16px;
`;

export const FlatlistContainer = styled.View`
justify-content:center;
align-items:center;

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


export const CardHistoric = styled.TouchableOpacity`
background:white;
width:85%;
padding:10px;
padding-left:16px;
margin:10px;
`;

export const TitleRow = styled.View`
margin:4px;
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

export const ValueRow = styled.View`
flex-direction:row;
margin:4px;

`;
 
export const ValueLabel = styled.Text`
font-family:${theme.fonts.subTitle};
text-transform: uppercase;
font-size:12px;

`;

export const ValueValue = styled.Text`
font-family:${theme.fonts.subTitle};
text-transform: uppercase;
font-size:12px;

`;

export const HourRow = styled.View`
margin:4px;

flex-direction:row;
`;

export const HourLabel = styled.Text`
font-family:${theme.fonts.subTitle};
text-transform: uppercase;
font-size:12px;

`;

export const HourValue = styled.Text`
font-family:${theme.fonts.subTitle};
text-transform: uppercase;
font-size:12px;

`;

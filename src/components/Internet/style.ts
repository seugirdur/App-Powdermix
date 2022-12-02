import styled from "styled-components/native";
import theme from "../../global/styles/theme";



export const Container = styled.View`
background: ${theme.colors.red};
 /* background: red; */
width:100%;
height:100%;
position:absolute;
/* top:15%; */
align-self: center;
/* border_radius:12px; */
align-items: center;
justify-content: space-evenly;
`;

// export center 


export const TitleOpsContainer = styled.View`
background: ${theme.colors.red};
margin: 12px;

`;
export const TitleOps = styled.Text`
font-family: ${theme.fonts.minusTitle};
text-align: center;
font-size: 32px;
color: white;
`;

export const EmojiTextContainer = styled.View`
background: ${theme.colors.red};
margin: 16px;
margin-left:20px;
margin-right:20px;

`;
export const EmojiText = styled.Text`
font-family: ${theme.fonts.minusTitle};
text-align: center;
font-size: 32px;
color: white;
`;


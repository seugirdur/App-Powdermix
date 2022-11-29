import styled from "styled-components/native";
import theme from "../../global/styles/theme";



export const Container = styled.ScrollView`
    flex: 1;
    background-color: #F4F5F6;
    padding: 24px;


`;

export const FormsContainer = styled.View``;

export const NomeText = styled.Text``;

export const NomeInput = styled.TextInput``;



export const CNPJText = styled.Text``;
export const CNPJInput = styled.TextInput``;

export const CEPText = styled.Text``;
export const CEPInput = styled.TextInput``;

export const TelText = styled.Text``;
export const TelInput = styled.TextInput``;

export const EmailText = styled.Text``;
export const EmailInput = styled.TextInput``;

export const Or = styled.Text`
font-family:${theme.fonts.title};
color: ${theme.colors.red};
font-size:20px;
text-align:center;
`;
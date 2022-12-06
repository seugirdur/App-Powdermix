import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

export const Container = styled.TouchableOpacity`
  width: 100%;
  padding: 19px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.red};
  margin-bottom: 24px;
  /* position:absolute;
  top:0px; */
  margin-top: 24px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family:${theme.fonts.title};

  color: #FFFFFF;
`;
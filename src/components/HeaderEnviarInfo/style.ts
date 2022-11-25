import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

export const Container = styled.View`
  width: 100%;
  margin-top:32px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: ${theme.colors.red};
  font-family:${theme.fonts.title};
  text-transform:uppercase;
  margin-top: 40px;
`;

export const Subtitle = styled.Text`
  font-size: 15px;
  color: #7A7A80;
  font-family:${theme.fonts.subTitle};

  line-height: 25px;  
`;


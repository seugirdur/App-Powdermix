import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

export const Container = styled.View`
  width: 100%;
  margin-top: 32px;
`;

export const Title = styled.Text`
  font-size: 40px;
  color: #47474D;
  font-family:${theme.fonts.minusTitle};

  margin-top: 60px;
`;

export const Subtitle = styled.Text`
  font-size: 15px;
  color: #7A7A80;
  font-family:${theme.fonts.subTitle};

  line-height: 25px;  
`;


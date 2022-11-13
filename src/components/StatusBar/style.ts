import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const Container = styled.View`
    flex:1
    background-color: #EEEEEE
    position: absolute;

`;

export const StatusBar = styled.View`
  width: 100%;
  top: 35px;
  height: 56px;
  position: absolute;
  justify-content: space-between;
  flex-direction: row;
`;

export const Hamburguer = styled.TouchableOpacity`
  justify-content: center;
  left: 32px;
`;

export const Logo = styled.Image`
  justify-content: center;
  width: 200px;
  height: 55px;
  margin-left: 64px;
`;

export const SquareRound = styled.TouchableOpacity`
  width: 80px;
  right: -10px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: red;
`;

export const Carrinho = styled.Image`
  width: 40px;
  background-color: red;
`;

export const Carrosel = styled.View`
  margin-left: auto;
  margin-right: auto;
  width: 95%;
  top: 140px;
  height: 200px;
  justify-content: center;
  background-color: red;
`;

export const Image = styled.Image`
  height: 200px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export const ButtonLeft = styled.TouchableOpacity`
  position: absolute;
  align-items: center;
  left: 5%;
  justify-content: center;
`;

export const ButtonRight = styled.TouchableOpacity`
  position: absolute;
  left: 90%;
`;

export const ThreeDots = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  position: relative;
  top: 150px;
  flex-direction: row;
  justify-content: center;
`;

export const Flatlist = styled.TouchableOpacity`
  position: relative;
  left: 90%;
`;

export const Button = styled.TouchableOpacity`
  width: 200px;
  background-color: blue;
`;

export const ModalContainer = styled.Modal``;

export const OffClick = styled.TouchableOpacity`
  width: 100%;
  height: 80%;
  background-color: "rgba(0,0,0,0.5)";
  align-items: center;
  justify-content: center;
`;

export const TitleCart = styled.Text`
  color: ${theme.colors.Cards.darkRed};
  font-family: ${theme.fonts.title};
  font-size: 24px;
  text-align: center;
  margin: 16px;
`;

export const TouchableSemCapa = styled.TouchableHighlight`
  background-color: blue;
  width: 80%;
  height: 80%;
  border-radius: 20px;
`;

export const CartContainer = styled.View`
  background-color: ${theme.colors.graypink};
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;

export const Texttest = styled.Text`
  font-size: 20px;
  color: red;
`;

export const ButtonPostContainer = styled.View`
  width: 100%;
  height: 30%;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.red};
  top:25%;
`;

export const SendPost = styled.TouchableOpacity`
  background-color: ${theme.colors.white};
  width: 80%;
  height: 100%;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
`;

export const PostText = styled.Text`
  font-family: ${theme.fonts.subTitle};
  color: ${theme.colors.red};
  font-size: 20px;
  text-transform: uppercase;
`;

export const ModalPost = styled.Modal``;

export const TouchablePost = styled.TouchableHighlight`
  background-color: red;
  width: 100%;
  height: 20%;
  bottom: 0px;
`;

export const PostContainer = styled.View`
  background-color: ${theme.colors.red};
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;

export const LogoContainer = styled.View`
width:35%;
height:20%;
background-color:white;
border-bottom-right-radius: 25px;
border-top-right-radius: 25px;

`;

export const LogoImage = styled.Image`
width:90%;
height:90%;
left:10px;
`;

export const ValueContainer = styled.View`
flex-direction:row;
justify-content: space-around;
top:8%;
`;

export const TextValue = styled.Text`
font-family: ${theme.fonts.title};
color: ${theme.colors.white};
font-size:20px;
`;

export const ValueCalc = styled.Text`
color: ${theme.colors.white};
font-size:20px;
`;

export const Row = styled.View`
width:100%;
height:1%;
top:20%;
align-items:center;

`;

export const RowInternal = styled.View`
width:85%;
height:100%;
background-color: ${theme.colors.white};
`;


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



import React from 'react';
import * as S from './style'



export function Internet() {
  return (
    //tela sem acesso a internet
    <S.Container>
        <S.TitleOpsContainer>
            <S.TitleOps>Ops! Parece que você está sem internet!</S.TitleOps>
        </S.TitleOpsContainer>

        <S.EmojiTextContainer>
            <S.EmojiText>:({'\n'}{'\n'}Tente novamente mais tarde...</S.EmojiText>
        </S.EmojiTextContainer>

    </S.Container>
  );
}
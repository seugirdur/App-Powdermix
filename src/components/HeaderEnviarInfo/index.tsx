import React from "react";
import * as S from "./style";

interface Props {
  title: string;
}

export function HeaderEnviarInfo({ title }: Props) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>

      <S.Subtitle></S.Subtitle>
    </S.Container>
  );
}

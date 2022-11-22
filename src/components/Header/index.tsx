import React from 'react';
import { Container, Subtitle, Title } from './styles';

export function Header() {
  return (
    <Container>
      <Title>
        Preencha a{'\n'}ficha
      </Title>

      <Subtitle>
        Assim poderemos entrar{'\n'}
        em contato de forma rápida{'\n'}
        e fácil com você!
      </Subtitle>
    </Container>
  )
}
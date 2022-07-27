import React from 'react';

import * as S from './styles';

type Props = {
  title: string;
  amount: string;
  lastTransaction: string;
  type: 'income' | 'withdraw' | 'total';
};

const icon = {
  income: 'arrow-up-circle',
  withdraw: 'arrow-down-circle',
  total: 'dollar-sign',
};

export function HighlightCard({ amount, lastTransaction, title, type }: Props) {
  return (
    <S.Container type={type}>
      <S.Header>
        <S.Title type={type}>{title}</S.Title>
        <S.Icon name={icon[type]} type={type} />
      </S.Header>

      <S.Footer>
        <S.Amount type={type}>{amount}</S.Amount>
        <S.LastTransaction type={type}>{lastTransaction}</S.LastTransaction>
      </S.Footer>
    </S.Container>
  );
}

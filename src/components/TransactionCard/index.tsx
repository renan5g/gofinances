import { Feather } from '@expo/vector-icons';
import React from 'react';

import * as S from './styles';

type CategoryM = {
  name: string;
  icon: keyof typeof Feather.glyphMap;
};

export type TransactionCardProps = {
  type: 'income' | 'withdraw';
  title: string;
  amount: string;
  category: CategoryM;
  date: string;
};

type Props = {
  data: TransactionCardProps;
};

export function TransactionCard({ data }: Props) {
  return (
    <S.Container>
      <S.Title>{data.title}</S.Title>

      <S.Amount type={data.type}>
        {data.type === 'withdraw' && '- '}
        {data.amount}
      </S.Amount>

      <S.Footer>
        <S.Category>
          <S.Icon name={data.category.icon} />
          <S.CategoryName>{data.category.name}</S.CategoryName>
        </S.Category>

        <S.Date>{data.date}</S.Date>
      </S.Footer>
    </S.Container>
  );
}

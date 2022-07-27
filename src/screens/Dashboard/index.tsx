import React from 'react';

import { HighlightCard } from '../../components/HighlightCard';
import {
  TransactionCard,
  TransactionCardProps,
} from '../../components/TransactionCard';

import * as S from './styles';

export type DataListProps = { id: string } & TransactionCardProps;

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: '1',
      type: 'income',
      title: 'Desenvolvimento de app',
      amount: 'R$ 12.000,00',
      category: {
        name: 'Vendas',
        icon: 'dollar-sign',
      },
      date: '12/05/2022',
    },
    {
      id: '2',
      type: 'withdraw',
      title: 'Desenvolvimento de app',
      amount: 'R$ 12.000,00',
      category: {
        name: 'Vendas',
        icon: 'dollar-sign',
      },
      date: '12/05/2022',
    },
    {
      id: '3',
      type: 'income',
      title: 'Desenvolvimento de app',
      amount: 'R$ 12.000,00',
      category: {
        name: 'Vendas',
        icon: 'dollar-sign',
      },
      date: '12/05/2022',
    },
  ];

  return (
    <S.Container>
      <S.Header>
        <S.UserWrapper>
          <S.UserInfo>
            <S.Photo source={{ uri: 'https://github.com/renan5g.png' }} />

            <S.User>
              <S.UserGreeting>Olá,</S.UserGreeting>
              <S.UserName>Baianinho</S.UserName>
            </S.User>
          </S.UserInfo>

          <S.Icon name="power" />
        </S.UserWrapper>
      </S.Header>

      <S.HighlightCards>
        <HighlightCard
          type="income"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
        />

        <HighlightCard
          type="withdraw"
          title="Saídas"
          amount="R$ 2.400,00"
          lastTransaction="Última saída dia 3 de abril"
        />

        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 15.000,00"
          lastTransaction="01 à 16 de abril"
        />
      </S.HighlightCards>

      <S.Transactions>
        <S.Title>Transactions</S.Title>

        <S.TransactionList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </S.Transactions>
    </S.Container>
  );
}

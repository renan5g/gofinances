import { Feather } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';

type TransactionProps = {
  type: 'income' | 'withdraw';
};

export const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: ${theme.radii.sm};

    padding: ${theme.space[4]} ${theme.space[6]};
    margin-bottom: ${theme.space[4]};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${theme.fontSizes.sm};
  `}
`;

export const Amount = styled.Text<TransactionProps>`
  ${({ theme, type }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${theme.fontSizes.xl};

    color: ${type === 'income' ? theme.colors.green500 : theme.colors.red500};

    margin-top: ${theme.space[1]};
  `}
`;

export const Footer = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-top: ${theme.space[5]};
  `}
`;

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Feather)`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.xl};
    color: ${theme.colors.neutral500};
  `}
`;

export const CategoryName = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.sm};
    color: ${theme.colors.neutral500};

    margin-left: ${theme.space[4]};
  `}
`;

export const Date = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.sm};
    color: ${theme.colors.neutral500};
  `}
`;

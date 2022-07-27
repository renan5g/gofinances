import { Feather } from '@expo/vector-icons';
import styled, { css, DefaultTheme } from 'styled-components/native';

type CardProps = {
  type: 'income' | 'withdraw' | 'total';
};

export const Container = styled.View<CardProps>`
  ${({ theme, type }) => css`
    width: ${theme.space[70]};

    background-color: ${
      type === 'total' ? theme.colors.secondary500 : theme.colors.white
    }
    border-radius: ${theme.radii.sm};

    padding: ${theme.space[5]} ${theme.space[6]};
    padding-bottom: ${theme.space[10]};
    margin-right: ${theme.space[4]};
  `}
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text<CardProps>`
  ${({ theme, type }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${theme.fontSizes.sm};

    color: ${type === 'total' ? theme.colors.white : theme.colors.black};
  `}
`;

const iconModifiers = {
  income: (theme: DefaultTheme) => css`
    color: ${theme.colors.green500};
  `,
  withdraw: (theme: DefaultTheme) => css`
    color: ${theme.colors.red500};
  `,
  total: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
  `,
};

export const Icon = styled(Feather)<CardProps>`
  ${({ theme, type }) => css`
    font-size: ${theme.fontSizes['5xl']};

    ${iconModifiers[type](theme)}
  `}
`;

export const Footer = styled.View``;

export const Amount = styled.Text<CardProps>`
  ${({ theme, type }) => css`
    font-family: ${theme.fonts.medium};
    font-size: ${theme.fontSizes['4xl']};

    margin-top: ${theme.space[8]};

    color: ${type === 'total' ? theme.colors.white : theme.colors.black};
  `}
`;

export const LastTransaction = styled.Text<CardProps>`
  ${({ theme, type }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${theme.fontSizes.xs};

    color: ${type === 'total' ? theme.colors.white : theme.colors.neutral500};
  `}
`;

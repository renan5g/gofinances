import Feather from '@expo/vector-icons/Feather';
import { FlatList, FlatListProps } from 'react-native';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';
import { DataListProps } from '.';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.neutral100};
  `}
`;

export const Header = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: ${RFPercentage(42)}px;

    flex-direction: row;
    justify-content: center;
    align-items: flex-start;

    background-color: ${theme.colors.primary500};
  `}
`;

export const UserWrapper = styled.View`
  ${({ theme }) => css`
    width: 100%;

    padding-horizontal: ${theme.space[6]};
    margin-top: ${getStatusBarHeight() + RFValue(28)}px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `}
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
  ${({ theme }) => css`
    width: ${theme.space[12]};
    height: ${theme.space[12]};
    border-radius: ${theme.radii.sm};

    flex-direction: row;

    background-color: ${theme.colors.primary500};
  `}
`;

export const User = styled.View`
  ${({ theme }) => css`
    margin-left: ${theme.space[4]};
  `}
`;

export const UserGreeting = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.neutral100};
    font-size: ${theme.fontSizes.md};
    font-family: ${theme.fonts.regular};
  `}
`;

export const UserName = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.neutral100};
    font-size: ${theme.fontSizes.lg};
    font-family: ${theme.fonts.bold};
  `}
`;

export const Icon = styled(Feather)`
  ${({ theme }) => css`
    color: ${theme.colors.secondary500};
    font-size: ${theme.fontSizes['2xl']};
  `}
`;

export const HighlightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingLeft: 24 },
})`
  width: 100%;

  position: absolute;
  margin-top: ${RFPercentage(20)}px;
`;

export const Transactions = styled.ScrollView`
  ${({ theme }) => css`
    flex: 1;
    padding: 0 ${theme.space[4]};
    margin-top: ${RFPercentage(12)}px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${theme.fontSizes.lg};

    margin-bottom: ${theme.space[4]};
  `}
`;

export const TransactionList = styled(
  FlatList as new (
    props: FlatListProps<DataListProps>
  ) => FlatList<DataListProps>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace(),
  },
})``;

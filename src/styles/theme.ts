import { RFValue } from 'react-native-responsive-fontsize';

export const THEME = {
  colors: {
    white: '#FFF',
    black: '#000',
    neutral100: '#F0F2F5',
    neutral800: '#363F5F',
    neutral500: '#969CB2',

    primary500: '#5636D3',

    secondary500: '#FF872C',
    secondaryA30: 'rgba(255, 135, 44, 0.3)',

    green500: '#12A454',
    greenA50: 'rgba(18, 164, 84, 0.5)',

    red500: '#E83F5B',
    redA50: 'rgba(232, 63, 91, 0.5)',
  },

  fonts: {
    regular: 'Poppins_400Regular',
    medium: 'Poppins_500Medium',
    bold: 'Poppins_700Bold',
  },

  fontSizes: {
    xss: `${RFValue(10)}px`,
    xs: `${RFValue(12)}px`,
    sm: `${RFValue(14)}px`,
    md: `${RFValue(16)}px`,
    lg: `${RFValue(18)}px`,
    xl: `${RFValue(20)}px`,
    '2xl': `${RFValue(24)}px`,
    '3xl': `${RFValue(28)}px`,
    '4xl': `${RFValue(32)}px`,
    '5xl': `${RFValue(36)}px`,
    '6xl': `${RFValue(48)}px`,
    '7xl': `${RFValue(64)}px`,
    '8xl': `${RFValue(72)}px`,
    '9xl': `${RFValue(96)}px`,
  },

  lineHeights: {
    shorter: '125%',
    short: '140%',
    base: '160%',
    tall: '180%',
  },

  space: {
    px: 1,
    1: `${RFValue(4)}px`,
    2: `${RFValue(8)}px`,
    3: `${RFValue(12)}px`,
    4: `${RFValue(16)}px`,
    5: `${RFValue(20)}px`,
    6: `${RFValue(24)}px`,
    7: `${RFValue(28)}px`,
    8: `${RFValue(32)}px`,
    10: `${RFValue(40)}px`,
    12: `${RFValue(48)}px`,
    16: `${RFValue(64)}px`,
    20: `${RFValue(80)}px`,
    40: `${RFValue(160)}px`,
    64: `${RFValue(256)}px`,
    70: `${RFValue(280)}px`,
    80: `${RFValue(320)}px`,
  },

  radii: {
    xs: '2.5px',
    sm: '5px',
    md: '10px',
    lg: '20px',
    round: '50%',
    full: '9999px',
  },

  borderWidths: {
    thin: '1px',
    medium: '1.5px',
    thick: '2px',
    heavy: '4px',
  },

  opacity: {
    default: '100%',
    semiOpaque: '90%',
    intense: '75%',
    medium: '50%',
    light: '25%',
    semiTransparent: '10%',
  },
};

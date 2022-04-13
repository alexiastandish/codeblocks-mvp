import { colors, createTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import GlobalStyle from './global-styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: colors.blueGrey,
    secondary: {
      ...colors.deepPurple,
      light: colors.deepPurple[200],
    },
    red: '#FF8E7B',
    green: '#7AF694',
    yellow: '#F2FC54',
    blue: '#90E5FF',
    success: colors.lightGreen,
    text: {
      primary: 'white',
    },
  },
  components: {
    // MuiCssBaseline: {
    //     styleOverrides: {
    //         body: 'white'
    //     },
    // },
  },
});

const html = {
  WebkitFontSmoothing: 'antialiased', // Antialiasing.
  MozOsxFontSmoothing: 'grayscale', // Antialiasing.
  // Change from `box-sizing: content-box` so that `width`
  // is not affected by `padding` or `border`.
  boxSizing: 'border-box',
  // Fix font resize problem in iOS
  WebkitTextSizeAdjust: '100%',
};

const body = {
  color: theme.palette.text.primary,
  ...theme.typography.body1,
  backgroundColor: theme.palette.background.default,
  '@media print': {
    // Save printer ink.
    backgroundColor: theme.palette.common.white,
  },
};

const defaultStyles = {
  html,
  '*, *::before, *::after': {
    boxSizing: 'inherit',
  },
  'strong, b': {
    fontWeight: theme.typography.fontWeightBold,
  },
  body: {
    margin: 0, // Remove the margin in all browsers.
    ...body,
    // Add support for document.body.requestFullScreen().
    // Other elements, if background transparent, are not supported.
    '&::backdrop': {
      backgroundColor: theme.palette.background.default,
    },
  },
};

const themeOverrides = theme?.components?.MuiCssBaseline?.styleOverrides;

const styles = typeof themeOverrides === 'undefined' ? defaultStyles : [defaultStyles, themeOverrides];

export const withTheme = (Component) => (props) =>
  (
    <ThemeProvider theme={theme}>
      <GlobalStyle styles={styles} />
      <Component {...props} />
    </ThemeProvider>
  );

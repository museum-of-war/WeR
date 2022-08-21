import { createTheme } from '@mui/material';

const defaultTheme = createTheme();
export const theme = createTheme({
  palette: {
    primary: {
      main: '#101010',
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: 96,
          lineHeight: '96px',
          fontWeight: 900,
          fontFamily: 'RockstarBlack',
          [defaultTheme.breakpoints.down('sm')]: {
            fontSize: 48,
            lineHeight: '48px',
          },
        },
        h2: {
          fontSize: 58,
          lineHeight: '64px',
          fontWeight: 900,
          fontFamily: 'RockstarBlack',
          [defaultTheme.breakpoints.down('sm')]: {
            fontSize: 29,
            lineHeight: '32px',
          },
        },
        h3: {
          fontSize: 40,
          lineHeight: '48px',
          fontWeight: 400,
          fontFamily: 'RockstarNarrowRegular',
          [defaultTheme.breakpoints.down('sm')]: {
            fontSize: 22,
            lineHeight: '32px',
          },
        },
        body1: {
          fontSize: 22,
          lineHeight: '32px',
          fontWeight: 400,
          fontFamily: 'RockstarNarrowRegular',
          [defaultTheme.breakpoints.down('sm')]: {
            fontSize: 16,
            lineHeight: '24px',
          },
        },
        body2: {
          fontSize: 18,
          lineHeight: '32px',
          fontWeight: 400,
          fontFamily: 'RockstarNarrowRegular',
        },
        [defaultTheme.breakpoints.down('sm')]: {
          fontSize: 14,
          lineHeight: '24px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: 18,
          fontWeight: 400,
          lineHeight: '48px',
          borderRadius: 50,
          height: 48,
          textTransform: 'initial',
          fontFamily: 'RockstarNarrowRegular',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          cursor: 'pointer',
          fontFamily: 'RockstarNarrowRegular',
          fontSize: 18,
        },
      },
    },
  },
});
// todo @current move white to theme

import { createTheme } from '@mui/material';

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
          lineHeight: '96 px',
          fontWeight: 900,
          fontFamily: 'RockstarBlack',
        },
        h2: {
          fontSize: 58,
          lineHeight: '64px',
          fontWeight: 900,
          fontFamily: 'RockstarBlack',
        },
        h3: {
          fontSize: 40,
          lineHeight: '48px',
          fontWeight: 400,
          fontFamily: 'RockstarNarrowRegular',
        },
        body1: {
          fontSize: 22,
          lineHeight: '32px',
          fontWeight: 400,
          fontFamily: 'RockstarNarrowRegular',
        },
        body2: {
          fontSize: 18,
          lineHeight: '32px',
          fontWeight: 400,
          fontFamily: 'RockstarNarrowRegular',
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

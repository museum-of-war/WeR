import { createTheme } from '@mui/material';

const defaultTheme = createTheme();
export const theme = createTheme({
  palette: {
    primary: {
      main: '#101010',
    },
    text: {
      primary: '#eaeaea',
    },
  },
  typography: {
    fontFamily: 'Inter',
    // @ts-ignore
    letterSpacing: '40px',
    lineHeight: '130%',
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: '#eaeaea',
          fontSize: 32,
          lineHeight: '32px',
          fontFamily: 'RockstarBlack',
          [defaultTheme.breakpoints.down('sm')]: {
            fontSize: 24,
            lineHeight: '24px',
          },
        },
        h2: {
          color: '#eaeaea',
          fontSize: 24,
          lineHeight: '24px',
          fontFamily: 'RockstarBlack',
          [defaultTheme.breakpoints.down('sm')]: {
            fontSize: 20,
            lineHeight: '20px',
          },
        },
        h3: {
          color: '#eaeaea',
          fontSize: 16,
          lineHeight: '20.8px',
          fontFamily: 'Inter',
          [defaultTheme.breakpoints.down('sm')]: {
            fontSize: 20,
            lineHeight: '20px',
          },
        },
        body1: {
          color: '#eaeaea',
          lineHeight: '130%',
        },
        body2: {
          color: '#404040',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          minWidth: 0,
          borderRadius: 8,
          textTransform: 'none',
          justifyContent: 'space-between',
          color: '#eaeaea',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '2000px!important',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          background: '#101010',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          background: '#101010',
          borderRadius: '12px',
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontFamily: 'RockstarNarrowRegular',
          padding: '48px 12px 12px 12px',
          background: '#101010',
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          background: '#101010',
          padding: 0,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          border: '1px solid #2c2c2c',
          padding: 0,
          borderRadius: 8,
          input: {
            padding: 8,
            borderRadius: 8,
          },
        },
      },
    },
  },
});

import { createTheme } from '@mui/material';

const defaultTheme = createTheme();
export const theme = createTheme({
  palette: {
    primary: {
      main: '#101010',
    },
  },
  typography: {
    fontFamily: 'RockstarNarrowRegular',
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
    MuiDialog: {
      defaultProps: {
        PaperProps: {
          sx: {
            paddingBottom: 8,
            [defaultTheme.breakpoints.down('sm')]: {
              paddingBottom: 4,
            },
          },
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          paddingTop: 64,
          paddingLeft: 64,
          paddingRight: 64,
          fontSize: 40,
          lineHeight: '48px',
          [defaultTheme.breakpoints.down('sm')]: {
            fontSize: 29,
            lineHeight: '32px',
            paddingLeft: 32,
            paddingRight: 32,
          },
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          paddingLeft: '64px!important',
          paddingRight: '64px!important',
          marginTop: '32px!important',
          justifyContent: 'space-between',
          padding: 0,
          flex: 1,
          [defaultTheme.breakpoints.down('sm')]: {
            paddingLeft: 32,
            paddingRight: 32,
          },
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          marginTop: 48,
          paddingLeft: 64,
          paddingRight: 64,
          [defaultTheme.breakpoints.down('sm')]: {
            marginTop: 24,
            [defaultTheme.breakpoints.down('sm')]: {
              paddingLeft: 32,
              paddingRight: 32,
            },
          },
        },
      },
    },
  },
});
// todo @current move white to theme

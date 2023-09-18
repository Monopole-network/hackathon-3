import { mode } from '@chakra-ui/theme-tools';

export const globalStyles = {
  initialColorMode: 'dark',
  colors: {
    gray: {
      700: '#1f2733',
    },
    royal: '#000126',
  },
  styles: {
    global: (props: any) => ({
      html: {
        overflow: 'hidden',
        height: '100vh',
        fontFamily: 'DM Sans, sans-serif',
        scrollBehavior: 'smooth',
        scrollbarWidth: 'thin',
        scrollbarColor: '#5651B7',
      },
      body: {
        overflow: 'hidden',
        height: '100vh',
        bg: mode('gray.50', 'royal')(props),
        fontFamily: 'DM Sans, sans-serif',
      },
      '::-webkit-scrollbar': {
        width: '18px',
        borderRadius: '25px',
      },
      '::-webkit-scrollbar-track': {
        boxShadow: 'inset 0 0 15px 15px transparent',
        border: 'solid 4px transparent',
        borderRadius: '25px',
      },
      '::-webkit-scrollbar-thumb': {
        /*"background-position": "center bottom, center -40px",
        "background-repeat": "no-repeat, no-repeat",
        "background-size": "contain, contain",*/
        boxShadow: 'inset 0 0 15px 15px #03CB88',
        border: 'solid 6px transparent',
        borderRadius: '25px',
      },
      '::-webkit-scrollbar-button': {
        display: 'none',
      },
    }),
  },
};

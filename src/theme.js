const base = {
  borderRadius: {
    xs: 0.8,
    s: 1.2,
    m: 1.6,
    l: 2,
    xl: 2.4,
  },
  colors: {
    primary: {
      main: '#004279',
      hover: '#002E55',
      active: '#00213D',
      deactivated: '#80A1BC',
      contrast: {
        main: '#ABDEFF',
        alternative: '#FFFFFF',
      },
    },
    secondary: {
      main: '#ABDEFF',
      hover: '#9AC8E6',
      active: '#8CB6D1',
      contrast: {
        main: '#004279',
      },
      light: {
        main: '#ABDEFF',
        hover: '#9AC8E6',
        active: '#8CB6D1',
      },
    },
    supporting: {
      main: '#B2FFD8',
      hover: '#A6E6C3',
      active: '#97D9B8',
      contrast: {
        main: '#004279',
      },
    },
    alternative: {
      main: 'rgba(255, 255, 255, 1)',
      hover: 'rgba(255, 255, 255, 0.3)',
      active: 'rgba(255, 255, 255, 0.6)',
      contrast: {
        main: 'rgba(255, 255, 255, 1)',
      },
    },
    neutral: {
      main: 'transparent',
      hover: 'rgba(173, 222, 255, 0.3)',
      active: 'rgba(173, 222, 255, 0.6)',
      '@new_dark': 'rgba(0, 0, 0, 0.7)',
      contrast: {
        main: '#004279',
      },
    },
    disabled: {
      main: '#F1F1F1',
      contrast: {
        main: '#A4A4A4',
      },
    },
    background: {
      main: '#D6EDFF',
      neutral: '#F7F7F7',
      transparent: 'transparent',
      alternative: {
        main: '#E6F6FF',
        active: '#CDEBFF',
      },
    },
    success: {
      background: '#E9F3EA',
      foreground: '#1E7E27',
    },
    info: {
      background: '#EAF0FD',
      foreground: '#2662E7',
    },
    warn: {
      background: '#FFF5EB',
      foreground: '#FB9737',
    },
    error: {
      background: '#FBEBEB',
      foreground: '#D13135',
    },
  },
  icon: {
    sizes: {
      xs: 1.6,
      s: 2.4,
      m: 3.2,
      l: 4.8,
      xl: 6.4,
    },
  },
  layout: {
    breakpoints: {
      xs: {
        max: 359,
      },
      s: {
        min: 360,
        max: 639,
      },
      m: {
        min: 640,
        max: 767,
      },
      l: {
        min: 768,
        max: 1023,
      },
      xl: {
        min: 1024,
        max: 1365,
      },
      xxl: {
        min: 1366,
      },
    },
    spacing: (x) => (x || 1) * 0.8,
  },
  shadows: [
    'none',
    '0 0.2rem 0.8rem rgba(0, 66, 121, 0.18)',
    '0 0.8rem 1.6rem rgba(0, 66, 121, 0.18)',
    '0 1.4rem 2.8rem rgba(0, 66, 121, 0.18)',
    '0 1.6rem 3.2rem rgba(0, 66, 121, 0.18)',
    '0 1.8rem 3.6rem rgba(0, 66, 121, 0.18)',
    '0 2rem 4rem rgba(0, 66, 121, 0.18)',
  ],
  transitions: {
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
  typography: {
    fontsUrl: 'https://static.medbelle.com/fonts/fonts-subset-v2.css',
    fontFamilies: {
      primary: {
        main: 'Haas Grot Disp Web',
        fallback: 'arial',
      },
      secondary: { main: 'RecifeDisplayWeb', fallback: 'georgia' },
    },
    fontWeights: {
      normal: 400,
      bold: 500,
    },
    h1: {
      xs: {
        fontSize: 3.6,
        letterSpacing: 0.08,
        fallbackLetterSpacing: -0.12,
        lineHeight: 4.4,
        fontWeight: 400,
        margin: '3.6rem 0 1.2rem',
      },
      s: {
        fontSize: 4,
        letterSpacing: 0.08,
        fallbackLetterSpacing: -0.143,
        lineHeight: 4.4,
        fontWeight: 400,
        margin: '4rem 0 1.2rem',
      },
      m: {
        fontSize: 4,
        letterSpacing: 0.08,
        fallbackLetterSpacing: -0.143,
        lineHeight: 4.4,
        fontWeight: 400,
        margin: '4.8rem 0 1.6rem',
      },
      l: {
        fontSize: 4.8,
        letterSpacing: 0.1,
        fallbackLetterSpacing: -0.153,
        lineHeight: 5,
        fontWeight: 400,
        margin: '4.8rem 0 1.6rem',
      },
      xl: {
        fontSize: 4.8,
        letterSpacing: 0.1,
        fallbackLetterSpacing: -0.153,
        lineHeight: 5,
        fontWeight: 400,
        margin: '4.8rem 0 2.4rem',
      },
      xxl: {
        fontSize: 6.4,
        letterSpacing: 0.1,
        fallbackLetterSpacing: -0.237,
        lineHeight: 6.6,
        fontWeight: 400,
        margin: '5.6rem 0 4rem',
      },
    },
    h2: {
      xs: {
        fontSize: 2.8,
        letterSpacing: 0.06,
        fallbackLetterSpacing: -0.075,
        lineHeight: 3.6,
        fontWeight: 400,
        margin: '2rem 0 0.8rem',
      },
      s: {
        fontSize: 3.2,
        letterSpacing: 0.08,
        fallbackLetterSpacing: -0.071,
        lineHeight: 4,
        fontWeight: 400,
        margin: '2.8rem 0 0.8rem',
      },
      m: {
        fontSize: 3.2,
        letterSpacing: 0.08,
        fallbackLetterSpacing: -0.071,
        lineHeight: 4,
        fontWeight: 400,
        margin: '4rem 0 1.6rem',
      },
      l: {
        fontSize: 3.2,
        letterSpacing: 0.08,
        fallbackLetterSpacing: -0.071,
        lineHeight: 4,
        fontWeight: 400,
        margin: '4rem 0 1.6rem',
      },
      xl: {
        fontSize: 3.6,
        letterSpacing: 0.1,
        fallbackLetterSpacing: -0.059,
        lineHeight: 4.4,
        fontWeight: 400,
        margin: '4.8rem 0 2.4rem',
      },
      xxl: {
        fontSize: 4.8,
        letterSpacing: 0.08,
        fallbackLetterSpacing: -0.071,
        lineHeight: 6,
        fontWeight: 400,
        margin: '4.8rem 0 2.4rem',
      },
    },
    h3: {
      xs: {
        fontSize: 2.4,
        letterSpacing: 0.08,
        fallbackLetterSpacing: -0.035,
        lineHeight: 2.8,
        fontWeight: 400,
        margin: '2rem 0 0.8rem',
      },
      s: {
        fontSize: 2.4,
        letterSpacing: 0.08,
        fallbackLetterSpacing: -0.035,
        lineHeight: 2.8,
        fontWeight: 400,
        margin: '2rem 0 0.8rem',
      },
      m: {
        fontSize: 2.4,
        letterSpacing: 0.08,
        fallbackLetterSpacing: -0.035,
        lineHeight: 3.2,
        fontWeight: 400,
        margin: '2.4rem 0 1.6rem',
      },
      l: {
        fontSize: 2.4,
        letterSpacing: 0.08,
        fallbackLetterSpacing: -0.035,
        lineHeight: 3.2,
        fontWeight: 400,
        margin: '2.4rem 0 1.6rem',
      },
      xl: {
        fontSize: 2.8,
        letterSpacing: 0.06,
        fallbackLetterSpacing: -0.062,
        lineHeight: 3.6,
        fontWeight: 400,
        margin: '2.8rem 0 1.6rem',
      },
      xxl: {
        fontSize: 3.6,
        letterSpacing: 0.08,
        fallbackLetterSpacing: -0.079,
        lineHeight: 4.4,
        fontWeight: 400,
        margin: '3.2rem 0 2rem',
      },
    },
    h4: {
      xs: {
        fontSize: 2,
        letterSpacing: 0.06,
        fallbackLetterSpacing: -0.035,
        lineHeight: 2.6,
        fontWeight: 400,
        margin: '1.6rem 0 0.8rem',
      },
      s: {
        fontSize: 2.2,
        letterSpacing: 0.06,
        fallbackLetterSpacing: -0.042,
        lineHeight: 3,
        fontWeight: 400,
        margin: '1.6rem 0 0.8rem',
      },
      m: {
        fontSize: 2.2,
        letterSpacing: 0.06,
        fallbackLetterSpacing: -0.042,
        lineHeight: 3,
        fontWeight: 400,
        margin: '1.6rem 0 0.8rem',
      },
      l: {
        fontSize: 2.2,
        letterSpacing: 0.06,
        fallbackLetterSpacing: -0.042,
        lineHeight: 3,
        fontWeight: 400,
        margin: '1.6rem 0 0.8rem',
      },
      xl: {
        fontSize: 2.4,
        letterSpacing: 0.06,
        fallbackLetterSpacing: -0.046,
        lineHeight: 3.2,
        fontWeight: 400,
        margin: '2rem 0 0.8rem',
      },
      xxl: {
        fontSize: 2.8,
        letterSpacing: 0.04,
        fallbackLetterSpacing: -0.08,
        lineHeight: 3.6,
        fontWeight: 400,
        margin: '2rem 0 0.8rem',
      },
    },
    h5: {
      xs: {
        fontSize: 1.6,
        letterSpacing: 0.06,
        fallbackLetterSpacing: 0.075,
        lineHeight: 2,
        fontWeight: 400,
        margin: '1.2rem 0 0.8rem',
      },
      s: {
        fontSize: 1.8,
        letterSpacing: 0.06,
        fallbackLetterSpacing: -0.025,
        lineHeight: 2.4,
        fontWeight: 400,
        margin: '1.2rem 0 0.8rem',
      },
      m: {
        fontSize: 2,
        letterSpacing: 0.06,
        fallbackLetterSpacing: -0.031,
        lineHeight: 2.8,
        fontWeight: 400,
        margin: '1.2rem 0 0.8rem',
      },
      l: {
        fontSize: 2,
        letterSpacing: 0.06,
        fallbackLetterSpacing: -0.031,
        lineHeight: 2.8,
        fontWeight: 400,
        margin: '1.2rem 0 0.8rem',
      },
      xl: {
        fontSize: 2.2,
        letterSpacing: 0.06,
        fallbackLetterSpacing: -0.038,
        lineHeight: 3,
        fontWeight: 400,
        margin: '1.2rem 0 0.8rem',
      },
      xxl: {
        fontSize: 2.4,
        letterSpacing: 0.08,
        fallbackLetterSpacing: -0.027,
        lineHeight: 3,
        fontWeight: 400,
        margin: '1.2rem 0 0.8rem',
      },
    },
    h6: {
      xs: {
        fontSize: 1.6,
        letterSpacing: 0.02,
        lineHeight: 2.4,
        fontWeight: 500,
        margin: '0.8rem 0',
      },
      s: {
        fontSize: 1.6,
        letterSpacing: 0.02,
        lineHeight: 2.4,
        fontWeight: 500,
        margin: '0.8rem 0',
      },
      m: {
        fontSize: 1.6,
        letterSpacing: 0.02,
        lineHeight: 2.4,
        fontWeight: 500,
        margin: '0.8rem 0',
      },
      l: {
        fontSize: 1.6,
        letterSpacing: 0.02,
        lineHeight: 2.4,
        fontWeight: 500,
        margin: '0.8rem 0',
      },
      xl: {
        fontSize: 1.6,
        letterSpacing: 0.02,
        lineHeight: 2.4,
        fontWeight: 500,
        margin: '0.8rem 0',
      },
      xxl: {
        fontSize: 1.6,
        letterSpacing: 0.02,
        lineHeight: 2.4,
        fontWeight: 500,
        margin: '0.8rem 0',
      },
    },
    subheader: {
      xs: {
        fontSize: 1.8,
        letterSpacing: 0.06,
        fallbackLetterSpacing: -0.015,
        lineHeight: 2.6,
        fontWeight: 400,
        margin: '0.8rem 0',
      },
      s: {
        fontSize: 1.8,
        letterSpacing: 0.06,
        fallbackLetterSpacing: -0.015,
        lineHeight: 2.6,
        fontWeight: 400,
        margin: '0.8rem 0',
      },
      m: {
        fontSize: 1.8,
        letterSpacing: 0.06,
        fallbackLetterSpacing: -0.015,
        lineHeight: 2.6,
        fontWeight: 400,
        margin: '0.8rem 0',
      },
      l: {
        fontSize: 1.8,
        letterSpacing: 0.06,
        fallbackLetterSpacing: -0.015,
        lineHeight: 2.6,
        fontWeight: 400,
        margin: '0.8rem 0',
      },
      xl: {
        fontSize: 2,
        letterSpacing: 0.06,
        fallbackLetterSpacing: -0.018,
        lineHeight: 3.2,
        fontWeight: 400,
        margin: '0.8rem 0',
      },
      xxl: {
        fontSize: 2.2,
        letterSpacing: 0.01,
        fallbackLetterSpacing: -0.077,
        lineHeight: 3.2,
        fontWeight: 400,
        margin: '0.8rem 0',
      },
    },
    paragraph: {
      xs: {
        fontSize: 1.6,
        letterSpacing: 0.06,
        fallbackLetterSpacing: -0.027,
        lineHeight: 2.4,
        fontWeight: 400,
        margin: '0.8rem 0',
      },
      s: {
        fontSize: 1.6,
        letterSpacing: 0.06,
        fallbackLetterSpacing: -0.027,
        lineHeight: 2.4,
        fontWeight: 400,
        margin: '0.8rem 0',
      },
      m: {
        fontSize: 1.6,
        letterSpacing: 0.06,
        fallbackLetterSpacing: -0.027,
        lineHeight: 2.4,
        fontWeight: 400,
        margin: '0.8rem 0',
      },
      l: {
        fontSize: 1.6,
        letterSpacing: 0.06,
        fallbackLetterSpacing: -0.027,
        lineHeight: 2.4,
        fontWeight: 400,
        margin: '0.8rem 0',
      },
      xl: {
        fontSize: 1.8,
        letterSpacing: 0.06,
        fallbackLetterSpacing: -0.027,
        lineHeight: 3,
        fontWeight: 400,
        margin: '0.8rem 0',
      },
      xxl: {
        fontSize: 1.8,
        letterSpacing: 0.06,
        fallbackLetterSpacing: -0.027,
        lineHeight: 3,
        fontWeight: 400,
        margin: '0.8rem 0',
      },
    },
    textButton: {
      xs: {
        fontSize: 1.8,
        letterSpacing: 0.04,
        fallbackLetterSpacing: -0.027,
        lineHeight: 2.4,
        fontWeight: 500,
      },
      xl: {
        fontSize: 2.0,
        letterSpacing: 0.04,
        fallbackLetterSpacing: -0.027,
        lineHeight: 2.4,
        fontWeight: 500,
      },
    },
    label: {
      small: {
        fontSize: 1.6,
        letterSpacing: 0.02,
        lineHeight: 2.4,
        fontWeight: 500,
        margin: '0.8rem 0',
      },
      large: {
        fontSize: 2,
        letterSpacing: 0.04,
        lineHeight: 2.8,
        fontWeight: 500,
        margin: '0.8rem 0',
      },
    },
    small: {
      fontSize: 1.6,
      letterSpacing: 0.04,
      lineHeight: 2,
      fontWeight: 400,
      margin: '0.8rem 0',
    },
    min: {
      fontSize: 1.4,
      letterSpacing: 0.02,
      lineHeight: 2,
      fontWeight: 400,
      margin: '1.2rem 0',
    },
    helper: {
      fontSize: 1.2,
      letterSpacing: 0.02,
      lineHeight: 1.8,
      fontWeight: 400,
      margin: '0.2rem 0',
    },
  },
  zIndex: {
    appBar: 22,
    selectableCards: {
      passive: 2,
      active: 8,
    },
    scrollableCards: {
      passive: 8,
      active: 14,
    },
    fab: {
      passive: 16,
      active: 20,
    },
    tooltip: 30,
    snackbar: 18,
    drawer: 24,
    dialog: 26,
  },
};

export default base;

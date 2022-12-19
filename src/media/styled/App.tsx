import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
//@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@100;900&display=swap');

/* latin-ext */
@font-face {
  font-family: 'Kanit';
  font-style: normal;
  font-weight: 100;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/kanit/v11/nKKX-Go6G5tXcr72KwyAcI5DPFpLGw.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Kanit';
  font-style: normal;
  font-weight: 100;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/kanit/v11/nKKX-Go6G5tXcr72KwKAcI5DPFo.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* latin-ext */
@font-face {
  font-family: 'Kanit';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/kanit/v12/nKKZ-Go6G5tXcrabGwCKd6xBDFs.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
  font-family: 'Kanit';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/kanit/v12/nKKZ-Go6G5tXcraVGwCKd6xB.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* latin-ext */
@font-face {
  font-family: 'Kanit';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/kanit/v11/nKKU-Go6G5tXcr4WPBWpVaFrNlJzIu4.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Kanit';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/kanit/v11/nKKU-Go6G5tXcr4WPBWnVaFrNlJz.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

body {
    margin: 0;
    padding: 0;
    font-family: 'Kanit', sans-serif;
    font-weight: 100;
    font-size: 12px !important;
}
`;


export { GlobalStyle };
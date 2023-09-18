import { ColorModeScript } from '@chakra-ui/react';
import { Html, Main, default as NextDocument, NextScript } from 'next/document';
import theme from '../styles/theme';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

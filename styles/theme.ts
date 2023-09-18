import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { globalStyles } from './styles';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

export default extendTheme(
  {
    config,
    components: {
      Tooltip: {
        baseStyle: {
          zIndex: 9999, // Set a high value
        },
      },
    },
  },
  globalStyles
);

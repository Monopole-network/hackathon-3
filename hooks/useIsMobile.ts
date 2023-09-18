import { useMediaQuery } from '@chakra-ui/react';

export const useIsMobile = () => {
  const [isMobileView] = useMediaQuery('(max-width: 768px)', {
    ssr: true,
    fallback: true,
  });

  return isMobileView;
};

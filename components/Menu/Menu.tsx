import { ButtonGroup, Flex, useColorModeValue } from '@chakra-ui/react';
import { useIsMobile } from '../../hooks/useIsMobile';
import CryptoPartnersBtn from './CryptoPartnersBtn';
import DashboardBtn from './DashboardBtn';
import HomeBtn from './HomeBtn';
import ServicesBtn from './ServicesBtn';
import StudioBtn from './StudioBtn';
import WorldBtn from './WorldBtn';

export default function MainMenu() {
  const backgroundColor = useColorModeValue('#f7fafc', '#000123');
  const isMobileView = useIsMobile();

  return (
    <>
      <Flex justifyContent="center" alignItems="center" w="100%" h="100%" minW={isMobileView ? '100%' : '50%'}>
        <ButtonGroup gap="8px" display={{ base: 'block', sm: 'block', md: 'block', lg: 'block' }} borderRadius="16px">
          <HomeBtn />
          <ServicesBtn />
          <StudioBtn />
          <WorldBtn />
          <CryptoPartnersBtn />
          {!isMobileView && <DashboardBtn />}
        </ButtonGroup>
      </Flex>
    </>
  );
}

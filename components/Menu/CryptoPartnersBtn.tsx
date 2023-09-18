import { Button, Tooltip } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { MiniMNPLIcon } from '../Icons';

const CryptoPartnersBtn = () => {
  const router = useRouter();

  return (
    <Tooltip label="VIP">
      {router.pathname === '/services/crypto-partners' ? (
        <Button
          borderRadius="16px"
          height="48px"
          width="48px"
          background="transparent"
          border="2px solid #3A1888"
          onClick={() => {
            router.push('/services/crypto-partners');
          }}
        >
          <MiniMNPLIcon height="24px" width="24px" />
        </Button>
      ) : (
        <Button
          borderRadius="16px"
          height="48px"
          width="48px"
          background="transparent"
          onClick={() => {
            router.push('/services/crypto-partners');
          }}
        >
          <MiniMNPLIcon color="#646587" height="24px" width="24px" />
        </Button>
      )}
    </Tooltip>
  );
};

export default CryptoPartnersBtn;

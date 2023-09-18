import { Button, Icon, Tooltip } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FaGlobeAmericas } from 'react-icons/fa';

const WorldBtn = () => {
  const router = useRouter();

  return (
    <Tooltip label="World">
      {router.pathname === '/world' ? (
        <Button
          borderRadius="16px"
          height="48px"
          width="48px"
          background="transparent"
          border="2px solid #3A1888"
          onClick={() => {
            router.push('/world');
          }}
          aria-label="World button"
        >
          <Icon height="22px" width="22px" as={FaGlobeAmericas} />
        </Button>
      ) : (
        <Button
          borderRadius="16px"
          height="48px"
          width="48px"
          background="transparent"
          onClick={() => {
            router.push('/world');
          }}
          aria-label="World button"
        >
          <Icon height="22px" width="22px" color="#646587" as={FaGlobeAmericas} />
        </Button>
      )}
    </Tooltip>
  );
};

export default WorldBtn;

import { Button, Tooltip } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { HomeIcon, HomeLightIcon } from '../Icons';

const HomeBtn = () => {
  const router = useRouter();

  return (
    <Tooltip label="Home">
      {router.pathname === '/' ? (
        <Button
          borderRadius="16px"
          height="48px"
          width="48px"
          background="transparent"
          border="2px solid #3A1888"
          onClick={() => {
            router.push('/');
          }}
          aria-label='Home button'
        >
          <HomeIcon height="24px" width="24px" />
        </Button>
      ) : (
        <Button
          borderRadius="16px"
          height="48px"
          width="48px"
          background="transparent"
          onClick={() => {
            router.push('/');
          }}
          aria-label='Home button'
        >
          <HomeLightIcon color="#646587" height="24px" width="24px" />
        </Button>
      )}
    </Tooltip>
  );
};

export default HomeBtn;

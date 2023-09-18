import { Button, Icon, Tooltip } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { BsFillPersonFill } from 'react-icons/bs';

const DashboardBtn = () => {
  const router = useRouter();

  return (
    <Tooltip label="Dashboard">
      {router.pathname === '/dashboard' ? (
        <Button
          borderRadius="16px"
          height="48px"
          width="48px"
          background="transparent"
          border="2px solid #3A1888"
          onClick={() => {
            router.push('/dashboard');
          }}
          aria-label='Dashboard button'
        >
          <Icon height="20px" width="20px" as={BsFillPersonFill} />
        </Button>
      ) : (
        <Button
          borderRadius="16px"
          height="48px"
          width="48px"
          background="transparent"
          onClick={() => {
            router.push('/dashboard');
          }}
          aria-label='Dashboard button'
        >
          <Icon height="20px" width="20px" color="#646587" as={BsFillPersonFill} />
        </Button>
      )}
    </Tooltip>
  );
};

export default DashboardBtn;

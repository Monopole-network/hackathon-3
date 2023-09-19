import { Button, Icon, Tooltip } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FaGlobeAmericas } from 'react-icons/fa';

const B2BBtn = () => {
  const router = useRouter();

  return (
    <Tooltip label="projects">
      {router.pathname === '/projects' ? (
        <Button
          borderRadius="16px"
          height="48px"
          width="48px"
          background="transparent"
          border="2px solid #3A1888"
          onClick={() => {
            router.push('/projects');
          }}
          aria-label="projects button"
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
            router.push('/projects');
          }}
          aria-label="projects button"
        >
          <Icon height="22px" width="22px" color="#646587" as={FaGlobeAmericas} />
        </Button>
      )}
    </Tooltip>
  );
};

export default B2BBtn;

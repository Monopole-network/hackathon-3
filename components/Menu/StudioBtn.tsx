import { Button, Tooltip } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { PieChartIcon, PieChartLightIcon } from '../Icons';

const StudioBtn = () => {
  const router = useRouter();

  return (
    <Tooltip label="Studio">
      {router.pathname === '/services/studio' ? (
        <Button
          borderRadius="16px"
          height="48px"
          width="48px"
          background="transparent"
          border="2px solid #3A1888"
          onClick={() => {
            router.push('/services/studio');
          }}
          aria-label='Studio button'
        >
          <PieChartIcon height="24px" width="24px" />
        </Button>
      ) : (
        <Button
          borderRadius="16px"
          height="48px"
          width="48px"
          background="transparent"
          onClick={() => {
            router.push('/services/studio');
          }}
          aria-label='Studio button'
        >
          <PieChartLightIcon color="#646587" height="24px" width="24px" />
        </Button>
      )}
    </Tooltip>
  );
};

export default StudioBtn;

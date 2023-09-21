import { Button, Icon, Tooltip } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FaLightbulb } from 'react-icons/fa';

const CreateProjectBtn = () => {
    const router = useRouter();

    return (
        <Tooltip label="createprojetc">
            {router.pathname === '/createprojetc' ? (
                <Button
                    borderRadius="16px"
                    height="48px"
                    width="48px"
                    background="transparent"
                    border="2px solid #3A1888"
                    onClick={() => {
                        router.push('/createprojetc');
                    }}
                    aria-label="projects button"
                >
                    <Icon height="22px" width="22px" as={FaLightbulb} />
                </Button>
            ) : (
                <Button
                    borderRadius="16px"
                    height="48px"
                    width="48px"
                    background="transparent"
                    onClick={() => {
                        router.push('/createprojetc');
                    }}
                    aria-label="create projects button"
                >
                    <Icon height="22px" width="22px" color="#646587" as={FaLightbulb} />
                </Button>
            )}
        </Tooltip>
    );
};

export default CreateProjectBtn;
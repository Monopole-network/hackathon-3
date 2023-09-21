import React, { useState, useEffect } from 'react';
import {Box, Grid, GridItem, Text, Container, Divider, Image, Icon} from '@chakra-ui/react';
import { FaHeart, FaSeedling, FaUsers } from 'react-icons/fa';


const Project = () => {
  const retrieveDataFromLocalStorage = () => {
    const retrievedDataString = localStorage.getItem('allFormResponses');
    if (retrievedDataString) {
      const retrievedData = JSON.parse(retrievedDataString);
      return retrievedData;
    }
    return [];
  };

  const [localData, setLocalData] = useState<any[]>([])

  useEffect(() => {
    const retrievedData = retrieveDataFromLocalStorage();
    setLocalData(retrievedData);
  }, []);

  return (
    <Container maxW="container.lg" mt={5}>
      <Divider mb={4} />
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        {localData.map((data, index) => (
          <GridItem key={index}>
            <Box
              borderWidth="1px"
              borderRadius="lg"
              p={4}
              borderColor="gray.200"
              boxShadow="base"
              display="flex"
              flexDirection={"column"}
              gap={150}
              bgImage="url('/card.webp')"
              bgPosition="center"
              bgRepeat="no-repeat"

            >
              <Box display="flex" justifyContent="space-between">
                <Box display="inline-flex" gap={2}>
                  <Box borderRadius='full' p={2} bg="white" display="inline-flex" boxSize='25px' justifyContent={"center"} alignItems={"center"} title='Social'>
                    <Icon height="19px" width="19px" color="black" as={FaUsers} />
                  </Box>
                  <Box borderRadius='full' p={1} bg="white" display="inline-flex" boxSize='25px' justifyContent={"center"} alignItems={"center"} title='Social'>
                    <Image src='/env.png' alt='' ></Image>
                  </Box>
                  <Box borderRadius='full' p={1} bg="white" display="inline-flex" boxSize='25px' justifyContent={"center"} alignItems={"center"} title='Social'>
                    <Image src='/dollar.png' alt='' ></Image>
                  </Box>
                  <Box borderRadius='full' p={1} bg="white" display="inline-flex" boxSize='25px' justifyContent={"center"} alignItems={"center"} title='Social'>
                    <Image src='/heart.png' alt='' ></Image>
                  </Box>
                </Box>
                <Box display="inline-flex" boxSize='35px'>
                  <Icon height="19px" width="19px" as={FaHeart} color="white"/>
                </Box>
                <Box borderRadius='full' p={1} bg="#02cb87" display="inline-flex" boxSize='25px'>
                  <Image src='/label.png' alt='' ></Image>
                </Box>
              </Box>
              <Box>
                <Text fontSize="xl" fontWeight="bold" color="white">{data.title}</Text>
                <Text fontSize="sm" align="right" color="white">22/09/2023</Text>
              </Box>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};

export default Project;
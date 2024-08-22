'use client'; 

import React from 'react';
import { Box, Flex, Heading, Button, Icon, Text } from '@chakra-ui/react';
import { FaUser } from 'react-icons/fa';
const LandingPage = () => {
  return (
    <Box
      minHeight="100vh"
      bg="linear-gradient(200deg, #0066EE 60%, #9383FB 100%)" 
      position="relative"
      p={4} 
    >
      
      <Flex
        align="center"
        justify="space-evenly"
        gap={90} 
        w="full" 
        px={8} 
        pt={4}
      >
        <Heading 
          as="h1" 
          size="lg" 
          color="white" 
          fontWeight="bold" 
        >
          myfitness
        </Heading>

        <Button
          borderRadius="3xl" 
          size="sm" 
          p={0}
          minWidth="40px" 
          minHeight="40px" 
          backgroundColor="white" 
          border="2px"
          borderColor="white" 
          color="white" 
          _hover={{ backgroundColor: 'blue.50' }} 
          alignItems="center"
          justifyContent="center"
        >
          <Icon as={FaUser} boxSize={4} color="#1e81b0" /> 
        </Button>
      </Flex>

   
      <Flex
        direction="column" 
        align="center" 
        mt={16} 
        px={8} 
      >
        <Text 
          fontSize="16px" 
          fontWeight="600" 
          color="#D8D8DC" 
          textAlign="center" 
        >
          #1 nutrition tracking app
        </Text>
      </Flex>
    </Box>
  );
};

export default LandingPage;

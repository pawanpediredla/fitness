'use client'; // Ensure this component is treated as a client-side component

import React from 'react';
import { Box, Flex, Heading, Button, Icon } from '@chakra-ui/react';
import { FaUser } from 'react-icons/fa'; // Importing a user icon from react-icons

const LandingPage = () => {
  return (
    <Box
      minHeight="100vh"
      bg="linear-gradient(200deg, #0066EE 60%, #9383FB 100%)" // Linear gradient background
      position="relative"
      p={4} // Padding for the entire Box
    >
      <Flex
        align="center"
        justify="space-evenly" // Space between text and button
        position="relative"
        w="full" // Full width
        px={8} // Horizontal padding to maintain equal spacing from edges
      >
        <Flex
          align="center"
          justify="center"
        >
          <Heading 
            as="h1" 
            size="lg" 
            color="white" 
            fontWeight="bold" // Somewhat bold
          >
            myfitness
          </Heading>
        </Flex>

        <Flex
          align="center"
          justify="center"
        >
          <Button
            borderRadius="3xl" // Rounded corners
            size="sm" // Small size
            p={0}
            minWidth="40px" // Adjusted for smaller button
            minHeight="40px" // Adjusted for smaller button
            backgroundColor="white" // White background
            border="2px"
            borderColor="white" // Border color matching the button background
            color="white" // White text color
            _hover={{ backgroundColor: 'blue.50' }} // Light blue hover effect
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Icon as={FaUser} boxSize={4} color="#1e81b0" /> {/* Adjusted icon color */}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default LandingPage;

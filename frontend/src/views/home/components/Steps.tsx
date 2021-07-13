import React from 'react'
import { Box, SimpleGrid, Text, Stack, Circle, Center, Heading } from '@chakra-ui/react';

interface FeatureProps {
  title: string;
  text: string;
  number: number;
}

const Feature = ({ title, text, number }: FeatureProps) => {
  return (
    <Stack>
      <Center>
        <Circle size={16} color={'white'} bg={'blue.400'}>
          <Heading as="h2">{number}</Heading>
        </Circle>
      </Center>
      
      <Text align='center' fontWeight={600}>{title}</Text>
      <Text align='center' color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

const Steps = () => {
    return (
    <Box p={4}>
      <Center m={4}>
        <Heading>
          How to use <Text as={'span'} color={'blue.400'}> Moody </Text>
        </Heading>
      </Center>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          number={1}
          title={'Lifetime Support'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature
          number={2}
          title={'Unlimited Donations'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature
            number={3}
          title={'Instant Delivery'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
      </SimpleGrid>
    </Box>
  )
}

export default Steps

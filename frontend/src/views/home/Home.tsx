import React from 'react'
import {
  Box, Stack,
} from '@chakra-ui/react'
import CTA from './components/CTA'
import Steps from './components/Steps'

const Home = () => {
    return (
        <Stack>
            <CTA />
            <Steps />
        </Stack>

  )
}

export default Home

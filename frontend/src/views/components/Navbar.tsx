import React, { useContext } from 'react';
import { Link as ReactLink } from "react-router-dom" 

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Heading,
  Collapse,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import {AuthContext} from "./AuthProvider"

const Links = ['Dashboard', 'Projects', 'Team'];

const NavLink = ({ page }: { page: string }) => (
  <Link
    as={ReactLink}
    to={`/${page}`}
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
  >
    {page}
  </Link>
)

export default function Navbar() {
  const [user] = useContext(AuthContext)
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={useColorModeValue('white', 'gray.800')} px={4} borderBottom={1} borderStyle={'solid'} borderColor={useColorModeValue('gray.200', 'gray.900')}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            variant="ghost"
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
                <Heading>
                  Moody
                </Heading>
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link} page={link}/>
              ))}
            </HStack>
          </HStack>
          { user ? <SignedInNavbar/> : <NotSignedInNavbar/> }
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4} >
              {Links.map((link) => (
                <NavLink key={link} page={link}></NavLink>
              ))}
            </Stack>
          </Box>
        </Collapse>
      </Box>
  )
}

const SignedInNavbar = () => {
  return (
    <Menu>
      <MenuButton 
        p="1"
        // rightIcon={<ChevronDownIcon />}
        as={Button}
        rounded={'full'}
        variant={'link'}
        cursor={'pointer'}>
        <Avatar
          size={'sm'}
          src={
            'https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2Fvector-images%2Fprofile-placeholder.html&psig=AOvVaw0AmD7cnibkzbXWozh3MA4A&ust=1622316544361000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjT-ZuO7fACFQAAAAAdAAAAABAD'
          }
        />
      </MenuButton>
      <MenuList>
        <MenuItem>Profile</MenuItem>
        <MenuDivider />
        <MenuItem>Sign Out</MenuItem>
      </MenuList>
    </Menu>
  )
}

const NotSignedInNavbar = () => {
  return (
        <Stack
          flex={{ base: 0, md: 1 }} 
          justify={'flex-end'} 
          direction={'row'} 
          spacing={6}> 
        <Button
          as={ReactLink}
          to="/signin"
          fontSize={'sm'}
          fontWeight={400}
          variant={'link'}
          >
          {/* href={'#'}> */}
          Sign In
        </Button>
        <Button
          as={ReactLink}
          to="/signup"
          display={{ base: 'none', md: 'inline-flex' }}
          fontSize={'sm'}
          fontWeight={600}
          color={'white'}
          bg={'pink.400'}
          _hover={{
            bg: 'pink.300',
          }}>
          Sign Up
        </Button>
      </Stack>
  )
}
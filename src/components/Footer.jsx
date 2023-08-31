import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'black'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack w={'full'} alignItems={'stretch'}>
          <Heading size="md" textTransform={'uppercase'} >
            Subscribe to get updates
          </Heading>
          <HStack borderBottom={'2px solid white'}>
            <Input
              placeholder="Enter Email Here..."
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              colorScheme="purple"
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
          borderTop={['2px solid white','none']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            CyberTron
          </Heading>
          <Text>All rights received</Text>
        </VStack>

        <VStack w={'full'} borderTop={['2px solid white','none']}>
          <Heading textTransform={'uppercase'} size={'md'} textAlign={'center'}>
            Social Media
          </Heading>
          <Button variant={'link'}>
          <a href="https://github.com/imzaib">
            GitHub
          </a>
          </Button>
          <Button variant={'link'}>
          <a href="https://instagram.com/">
            Instagram
          </a>
          </Button>
          <Button variant={'link'}>
          <a href="https://facebook.com/">
            Facebook
          </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;

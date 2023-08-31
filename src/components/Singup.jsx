import { Avatar, Button, Container, Heading, Input,  Text,  VStack } from '@chakra-ui/react';
import React from 'react';
import {Link} from 'react-router-dom'
import avt from '../assets/img5.jpg'

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack align={'stretch'} spacing={'8'} w={['full','96']} m={'auto'} >
          <Heading textAlign={'center'}>CyberTron</Heading>
          <Avatar alignSelf={'center'} boxSize={'32' } src={avt}/>
          <Input
            placeholder="Name"
            type="text"
            required
            focusBorderColor="purple"
          />
          <Input
            placeholder="Email"
            type="email"
            required
            focusBorderColor="purple"
          />
          <Input
            placeholder="Password"
            type="password"
            required
            focusBorderColor="purple"
          />
          <Button variant={'solid'} colorScheme='purple' type='submit'>Signup</Button>
        
          <Text  textAlign="right">Already signup?{' '}
          <Button alignSelf={'flex-end'} variant={'link'}>
            <Link to={'/log-in'}>Login</Link>
          </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;

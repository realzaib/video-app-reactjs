import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineCloudUpload } from 'react-icons/ai'

const Upload = () => {
  return (
    <Container h={'100vh'} maxW={'container.xl'} p={'16'}>
        <VStack color={'purple'} h={'full'}
        justifyContent={'center'}>
            <AiOutlineCloudUpload size={'10vmax'}/>
            <HStack >
                    <Input type='file' css={{
                        "&::file-selector-button":{
                            border: 'none',
                            width: 'calc(100% + 36px)',
                            height: '100%',
                            // margin:'-18px',
                            color:'purple',
                            backgroundColor: 'white',
                            cursor: 'pointer'
                        }
                    }}/>
                    <Button colorScheme='purple' type='submit'> Upload</Button>
            </HStack>
        </VStack>

    </Container>
  )
}

export default Upload
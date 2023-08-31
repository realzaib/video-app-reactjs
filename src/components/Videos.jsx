import React, { useState } from 'react';
import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';

const videoArr = [
  'https://www.youtube.com/embed/O5O3yK8DJCc',
  'https://www.youtube.com/embed/b3ootXSAaqE',
  'https://www.youtube.com/embed/LXb3EKWsInQ',
];

const Videos = () => {
  const [videoSrc, setVideoSrc] = useState(videoArr[0]);

  return (
    <Stack direction={['column', 'row']} minHeight="100vh">
      <VStack flex="3" minWidth="75%" p={'8'}>
        {videoSrc.includes('youtube') ? (
          <iframe
            title="Video Player"
            src={videoSrc}
            allowFullScreen
            style={{ width: '100%', height: '100%' }}
          ></iframe>
        ) : (
          <video
            autoPlay
            controls
            style={{ width: '100%', height: 'auto' }}
            src={videoSrc}
          ></video>
        )}
        <VStack alignItems="flex-start" p="8" w="full" overflow="auto">
          <Heading>Sample Video</Heading>
        </VStack>
        <Text p="8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
          quasi sapiente amet impedit incidunt. Consequatur explicabo repudiandae
          quasi repellat, debitis in incidunt!
        </Text>
      </VStack>
      <VStack
        flex="1"
        alignItems={['center', 'center']}
        p="8"
        spacing="8"
        overflow="auto"
      >
        {videoArr.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            colorScheme="purple"
            w={'72'}
            border={'1px'}
            onClick={() => setVideoSrc(item)}
          >
            Sample Video {index + 1}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
};

export default Videos;

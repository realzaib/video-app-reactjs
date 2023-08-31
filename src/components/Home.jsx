import { Box, Container, Heading, Img ,Stack, Text} from '@chakra-ui/react';
import React from 'react';
import Slider from './Slider';
import SVG from '../assets/img6.svg'

const Home = () => {
  return (
    <Box>
      <Slider />
      <Container minH={'100vh'} maxW={'container.lg'} p="19">
        <Heading
          m={'auto'}
          py={'2'}
          borderBottom={'4px solid'}
          textTransform={'uppercase'}
          w={'fit-content'}
        >
          Services
        </Heading>

        <Stack 
            h="full"
            p={"4"}
            alignItems={"center"}
            justifyContent={"center"}
            direction={['column', 'row']}
        >
            <Img src={SVG} h={['250', '300']} filter={"hue-rotate(10deg)"} p={'43'}/>   

            <Text letterSpacing={'widest'} textAlign={'center'} py={'30'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio facere fuga porro vero adipisci repellendus officia accusantium necessitatibus non, omnis iure dignissimos quis aspernatur vel atque ex nemo veniam, architecto suscipit repudiandae! Ex quibusdam molestiae reprehenderit aliquid voluptatem fugit consequuntur saepe dolorem, deserunt doloremque excepturi repudiandae. Sequi eveniet mollitia eum deleniti amet, eaque pariatur id molestias autem! Maiores perspiciatis rem, odio eum nihil nemo distinctio similique harum eius, minima impedit quisquam placeat. Fuga repellat quos ipsam necessitatibus! Repudiandae est, eius fuga voluptatibus ducimus dolor nesciunt nihil voluptate deserunt quae, excepturi maxime labore, culpa blanditiis quidem earum tempora? Dignissimos, illo nam?</Text>

        </Stack>
      </Container>
    </Box>
  );
};

export default Home;

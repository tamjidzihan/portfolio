import { Box, Center, Container, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { GrGithub, GrTwitter, GrLinkedin, GrInstagram } from "react-icons/gr";

import Tilt from 'react-parallax-tilt';
// import profile from '../../assets/profile.svg';
import logo from '../../assets/logo_dev.png'

function Home2() {
    return (
        <Container maxW="container.xl" marginTop={200}>
            <Flex direction={{ base: 'column', md: 'row' }} justifyContent="space-between">
                <Box flex="0 0 60%" >
                    <Heading fontSize="4xl" mb={4}>
                        LET ME
                        <Text as="span" color="purple"> INTRODUCE </Text>
                        MYSELF
                    </Heading>
                    <Text fontSize="xl" mb={6}>
                        I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
                        <br /><br />
                        I am fluent in classics like
                        <Text as="i" fontWeight="bold" color="purple">C++, Javascript and Go.</Text>
                        <br /><br />
                        My field of Interest's are building new
                        <Text as="i" fontWeight="bold" color="purple">Web Technologies and Products</Text> and also in areas related to
                        <Text as="b" color="purple">Blockchain.</Text>
                        <br /><br />
                        Whenever possible, I also apply my passion for developing products with <Text as="b" color="purple">Node.js</Text> and <Text as="i" fontWeight="bold" color="purple">Modern Javascript Library and Frameworks</Text> like <Text as="i" fontWeight="bold" color="purple">React.js and Next.js</Text>.
                    </Text>
                </Box>
                <Center flex="0 0 35%" >
                    <Tilt >
                        <Image src={logo} boxSize='200px' alt="avatar" />
                    </Tilt>
                </Center >
            </Flex>

            <Center mt={12} flexDirection={'column'}>
                <Heading mb={6}>FIND ME ON</Heading>
                <Text>Feel free to <Text as="span" color="purple">connect</Text> with me</Text>
                <Flex mt={4}>
                    <Box as="ul" listStyleType="none" p={0}>
                        <Box as="li" display="inline-block" mr={4}>
                            <a href="#" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                                <GrGithub />
                            </a>
                        </Box>
                        <Box as="li" display="inline-block" mr={4}>
                            <a href="#" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                                <GrTwitter />
                            </a>
                        </Box>
                        <Box as="li" display="inline-block" mr={4}>
                            <a href="# " target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                                <GrLinkedin />
                            </a>
                        </Box>
                        <Box as="li" display="inline-block">
                            <a href="#" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                                <GrInstagram />
                            </a>
                        </Box>
                    </Box>
                </Flex>
            </Center>

        </Container>
    );
}

export default Home2;

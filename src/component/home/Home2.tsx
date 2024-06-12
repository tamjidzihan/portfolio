import { Box, Center, Container, Flex, Heading, Image, Text } from '@chakra-ui/react';
import Tilt from 'react-parallax-tilt';
import profile from '../../assets/profile.svg';

function Home2() {
    return (
        <Container maxW="container.xl" marginTop={200}>
            <Flex justifyContent="space-between">
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
                        <Image src={profile} boxSize='200px' alt="avatar" />
                    </Tilt>
                </Center >
            </Flex>
            {/* <Box mt={12}>
                <Heading mb={6}>FIND ME ON</Heading>
                <Text>Feel free to <Text as="span" color="purple">connect</Text> with me</Text>
                <Flex mt={4}>
                    <Box as="ul" listStyleType="none" p={0}>
                        <Box as="li" display="inline-block" mr={4}>
                            <a href="https://github.com/soumyajit4419" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                                <AiFillGithub />
                            </a>
                        </Box>
                        <Box as="li" display="inline-block" mr={4}>
                            <a href="https://twitter.com/Soumyajit4419" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                                <AiOutlineTwitter />
                            </a>
                        </Box>
                        <Box as="li" display="inline-block" mr={4}>
                            <a href="https://www.linkedin.com/in/soumyajit4419/" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                                <FaLinkedinIn />
                            </a>
                        </Box>
                        <Box as="li" display="inline-block">
                            <a href="https://www.instagram.com/soumyajit4419" target="_blank" rel="noreferrer" className="icon-colour home-social-icons">
                                <AiFillInstagram />
                            </a>
                        </Box>
                    </Box>
                </Flex>
            </Box> */}

        </Container>
    );
}

export default Home2;

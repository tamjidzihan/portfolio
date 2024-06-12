import { Box, Container, Flex, Heading, Image, Text } from '@chakra-ui/react'
import heroImage from '../../assets/home_hero.svg'
import Type from './Type'

const Hero = () => {
    return (

        <Box w="100%" id="home" position="relative" marginTop={200}>
            {/* <Particle /> */}
            <Container maxW="container.xl" py={8}>
                <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between">
                    <Box flex="1" textAlign={{ base: 'center', md: 'left' }} mb={{ base: 8, md: 0 }}>
                        <Heading as="h1" size="2xl" mb={4}>
                            Hi There!{' '}
                            <Text as="span" role="img" aria-label="wave">
                                👋🏻
                            </Text>
                        </Heading>
                        <Heading as="h1" size="2xl" mb={4}>
                            I'M
                            <Text as="span" fontWeight="bold" color="teal.500">
                                {' '}
                                Tamzid Islam Zihan
                            </Text>
                        </Heading>
                        <Box py={4} fontSize='4xl'>
                            <Type />
                        </Box>
                    </Box>
                    <Box flex="1" display="flex" justifyContent="center">
                        <Image src={heroImage} alt="home pic" maxH="450px" objectFit="cover" />
                    </Box>
                </Flex>
            </Container>

        </Box>

    )
}

export default Hero

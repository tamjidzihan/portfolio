import { Box, Flex, HStack, IconButton, useDisclosure, Stack, Container } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { FaHome, FaInfoCircle, FaPhone } from 'react-icons/fa';
import NavBarLink from './NavBarLink';
import { motion } from 'framer-motion';

const Links = [
    { name: 'Home', icon: FaHome, href: '#' },
    { name: 'About', icon: FaInfoCircle, href: '#' },
    { name: 'Contact', icon: FaPhone, href: '#' },
];


const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const MotionBox = motion(Box);

    return (
        <Container maxW='container.xl' >
            <Box px={4}>

                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Box>Logo</Box>
                    <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                        {Links.map((link) => (
                            <NavBarLink key={link.name} name={link.name} icon={link.icon} href={link.href} />
                        ))}
                    </HStack>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon boxSize={5} /> : <HamburgerIcon boxSize={6} />}
                        as={motion.button}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}

                    />
                </Flex>
            </Box>
            {isOpen ? (
                <MotionBox
                    pb={4}
                    display={{ md: 'none' }}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                >
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavBarLink key={link.name} name={link.name} icon={link.icon} href={link.href} />
                            ))}
                        </Stack>
                    </Box>
                </MotionBox>
            ) : null}

        </Container>
    );
};

export default Navbar;
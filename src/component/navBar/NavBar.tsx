import { Box, Container, Flex, HStack, IconButton, Stack, Text, useBreakpointValue, useDisclosure } from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { GrBlog, GrDocumentUser, GrHomeRounded, GrTerminal, GrUser } from "react-icons/gr";
import { motion } from 'framer-motion';
import NavBarLink from './NavBarLink';
import NavBarLinkMd from './NavBarLinkmd';

const Links = [
    { name: 'Home', icon: GrHomeRounded, href: '#' },
    { name: 'About', icon: GrUser, href: '#' },
    { name: 'Projects', icon: GrTerminal, href: '#' },
    { name: 'Resume', icon: GrDocumentUser, href: '#' },
    { name: 'Blogs', icon: GrBlog, href: '#' },
];


const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const displayValue = useBreakpointValue({ base: 'none', sm: 'none', md: 'flex', lg: 'none' })
    const MotionBox = motion(Box);

    return (
        <Container maxW='container.xl' >
            <Box px={4}>

                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>

                    <Text fontSize='3xl' as='samp'>tiz.dev</Text>
                    <HStack as={'nav'} spacing={4} display={{ base: 'none', lg: 'flex' }}>

                        {Links.map((link) => (
                            <NavBarLink key={link.name} name={link.name} icon={link.icon} href={link.href} />
                        ))}
                    </HStack>

                    <HStack as={'nav'} spacing={4} display={displayValue} >
                        {Links.map((link) => (
                            <NavBarLinkMd key={link.name} name={link.name} icon={link.icon} href={link.href} />
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
            {
                isOpen ? (
                    <MotionBox
                        pb={4}
                        display={{ sm: 'none' }}
                        position='absolute'
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                    >
                        <Box pb={4} display={{ sm: 'none' }} position='absolute'>
                            <Stack as={'nav'} spacing={4}>
                                {Links.map((link) => (
                                    <NavBarLink key={link.name} name={link.name} icon={link.icon} href={link.href} />
                                ))}
                            </Stack>
                        </Box>
                    </MotionBox>
                ) : null
            }

        </Container >
    );
};

export default Navbar;
import { Link, Flex, Icon, Box } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";

interface NavLinkPropsmd {
    name: string;
    icon: typeof FaHome;
    href: string
}

const NavBarLinkMd = ({ name, icon, href }: NavLinkPropsmd) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        position="relative"
        display="inline-block"
        _hover={{
            textDecoration: 'none',
            _after: {
                width: '100%',
                transition: 'width 0.3s ease-in-out',
            }
        }}
        _after={{
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            borderRadius: 4,
            width: '0%',
            height: '4px',
            backgroundColor: 'blue.500',
            transition: 'width 0.3s ease-in-out',
        }}
        href={href}>
        <Flex align="center" flexDirection='column'>
            <Icon as={icon} />
            <Box>{name}</Box>
        </Flex>
    </Link>
);

export default NavBarLinkMd
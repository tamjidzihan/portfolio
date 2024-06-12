import { Link, Flex, Icon } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";

interface NavLinkProps {
    name: string;
    icon: typeof FaHome;
    href: string
}

const NavBarLink = ({ name, icon, href }: NavLinkProps) => (
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
                transition: 'width 0.6s ease-in-out',
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
            transition: 'width 0.6s ease-in-out',
        }}
        href={href}>
        <Flex align="center" fontSize='xl'>
            <Icon as={icon} mr={2} />
            {name}
        </Flex>
    </Link>
);

export default NavBarLink
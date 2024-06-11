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
        _hover={{
            textDecoration: 'none',
        }}
        href={href}>
        <Flex align="center">
            <Icon as={icon} mr={2} />
            {name}
        </Flex>
    </Link>
);

export default NavBarLink
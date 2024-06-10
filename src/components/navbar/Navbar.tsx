import {
    GrHomeRounded,
    GrUser,
    GrTerminal,
    GrDocumentText,
    GrTask
} from "react-icons/gr";
import { FiGithub } from "react-icons/fi";
import logo from '../../assets/logo_dev.png'




const mainLinksMockdata = [
    { icon: GrHomeRounded, label: 'Home' },
    { icon: GrUser, label: 'About' },
    { icon: GrTerminal, label: 'Projects' },
    { icon: GrDocumentText, label: 'Resume' },
    { icon: GrTask, label: 'Blog' },
    { icon: FiGithub, label: 'Git' },
];


const linksMockdata = [
    'Home',
    'About',
    'Projects',
    'Releases',
    'Resume',
    'Blog',
    'Git'
];

function Navbar() {
    return (
        <>

        </>
    )
}

export default Navbar

import { Box } from '@chakra-ui/react'
import Hero from './Hero'
import Hero2 from './Hero2'

const home = () => {
    return (
        <Box as="section">
            <Hero />
            <Hero2 />
        </Box >
    )
}

export default home

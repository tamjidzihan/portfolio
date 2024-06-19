import { Box } from '@chakra-ui/react'
import Hero from '../component/home/Hero'
import Hero2 from '../component/home/Hero2'

const HomePage = () => {
    return (
        <>
            <Box as="section">
                <Hero />
                <Hero2 />
            </Box >
        </>
    )
}

export default HomePage

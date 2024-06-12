import Typewriter from 'typewriter-effect';
import { Box } from '@chakra-ui/react';

function Type() {
    return (
        <Box>
            <Typewriter
                options={{
                    strings: [
                        'Software Developer',
                        'Freelancer',
                        'MERN Stack Developer',
                        'Backend API Developer',
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 40,
                }}
            />
        </Box>
    );
}

export default Type;

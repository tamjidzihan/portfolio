import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'

function ColorModeSwitch() {
    const { toggleColorMode, colorMode } = useColorMode()

    return (
        <div>
            <HStack>
                <Switch
                    colorScheme='purple'
                    isChecked={colorMode === "dark"}
                    onChange={toggleColorMode}
                />
                <Text whiteSpace='nowrap'></Text>
            </HStack>
        </div>
    )
}

export default ColorModeSwitch

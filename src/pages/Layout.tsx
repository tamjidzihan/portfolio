import { Grid, GridItem } from '@chakra-ui/react'
import NavBar from '../component/navBar/NavBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            {/* ===== Grid Layout ===== */}
            <Grid templateAreas={
                `"nav nav"
          "main main"`
            }
                templateColumns={{
                    base: '1fr',
                    lg: '260px'
                }}
            >

                <GridItem
                    area='nav'
                    position='sticky'
                    top='0'
                    zIndex='99'
                    backdropFilter="auto"
                    backdropBlur="22px"
                >
                    <NavBar />
                </GridItem>


                <GridItem area='main'>
                    <Outlet />
                </GridItem>


            </Grid >

        </>
    )
}

export default Layout

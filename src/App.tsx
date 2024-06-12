import { Grid, GridItem } from '@chakra-ui/react'
import './App.css'
import NavBar from './component/navBar/NavBar'
import Home from './component/home/home'

function App() {


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
        }}>


        <GridItem
          area='nav'
          position='sticky'
          top='0'
          zIndex='99'
          backdropFilter="auto"
          backdropBlur="22px"
          boxShadow="md"
        >
          <NavBar />
        </GridItem>

        <GridItem area='main'>
          <Home />
        </GridItem>

      </Grid >

    </>
  )
}

export default App

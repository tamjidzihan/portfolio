import { Grid, GridItem } from '@chakra-ui/react'
import './App.css'
import NavBar from './component/NavBar'

function App() {


  return (
    <>
      {/* ===== Grid Layout ===== */}
      <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
      }}
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



      </Grid>

    </>
  )
}

export default App

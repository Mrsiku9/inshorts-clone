import React from 'react'
import Header from "./components/Header"
import InfoHeader from './components/InfoHeader'
import { Box,styled } from '@mui/material'
import Article from './components/Articles'
// import "./App.css"
const Container = styled(Box)`
  width: 65%;
  margin: 30px auto 0 auto;
`

const App = () => {
  return (
    <Box>
      <Header></Header>
      <Container>
      <InfoHeader></InfoHeader>
      </Container>
      <Article/>
    </Box>
  )
}

export default App

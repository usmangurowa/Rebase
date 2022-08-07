import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Navbar from './components/navbar';
import Hero from './components/hero';



export default function App() {
  return (
    <Container >
      <Navbar />
      <Hero />
    </Container>
  );
}

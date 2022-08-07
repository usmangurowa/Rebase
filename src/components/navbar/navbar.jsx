import React from 'react';
import Container from "@mui/material/Container"

import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"

const Navbar = () => {
    return (
        <AppBar position='static' sx={{ boxShadow: 'none', bgcolor: 'transparent' }}>
            <Toolbar>
                <Box sx={{ width: 60, height: 50 }} component='img' src='/e-naira.png' />
                <Box sx={{ flexGrow: 1 }} />
                <Button>Home</Button>
                <Button>About</Button>
                <Button>How It Works</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
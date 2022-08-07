import React from 'react'
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';



const styles = {
    container: {
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        width: '100%'
    },
    card: {
        width: { xs: '100%', md: '40%' },
        maxHeight: '300px'
    }
}

const Hero = () => {
    return (
        <Container sx={styles.container}>
            <Stack sx={{ justifyContent: 'space-between', width: '100%' }} direction={{ xs: 'column', md: 'row' }} spacing={5}>
                <Box >
                    <Typography my={2} component='div' variant='h2'>
                        <Typography variant='h1' color='primary'>ReBase</Typography> Unlocking the eNaira.
                    </Typography>
                    <Typography component='div' variant='subtitle1'>
                        Purchase anything online or send money anywhere in the world with your enaira wallet without any charge!!!
                    </Typography>
                    <Button sx={{ px: 3, py: 2, my: 5 }} variant='contained' disableElevation>Get Started</Button>
                </Box>
                <Box sx={styles.card} component='img' src='/card.png' />
            </Stack>
        </Container>
    )
}

export default Hero
import React from 'react'
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';



const styles = {
    container: {
        height: '90vh',
        display: 'flex',
        alignItems: 'center',
        width: '100%'
    },
    card: {
        width: '50%'
    }
}

const Hero = () => {
    return (
        <Container sx={styles.container}>
            <Stack sx={{ justifyContent: 'space-between', width: '100%' }} direction={{ xs: 'column', md: 'row' }} spacing={5}>
                <Box>
                    <Typography component='div' variant='h2'>
                        <Typography sx={{ backgroundImage: '/textbg.png' }} variant='h1'>ReBase</Typography> Unlocking the eNaira.
                    </Typography>
                </Box>
                <Box sx={styles.card} component='img' src='/card.png' />
            </Stack>
        </Container>
    )
}

export default Hero
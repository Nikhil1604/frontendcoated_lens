import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box>
        <Grid container direction='row' justifyContent='center' alignItems='center' height='350px' sx={{bgcolor:'#000',color:'#fff'}}>
            <Grid xs={8} container direction='column' justifyContent='center' paddingLeft='250px' alignItems='flex-start'>
                <Typography fontSize='30px' paddingBottom='20px'>NewsLetter</Typography>
                <Grid>
                <TextField variant='outlined'  placeholder='Email' size='small' borderRadius='5'  sx={{bgcolor:'#fff', color:'#000'}} />
                <Button variant='outlined'  sx={{marginLeft:'15px',color:'#000',bgcolor:"#fff", border:"1px solid #fff",borderRadius:'5',transition: 'transform 0.3s ease-in-out',
                '&:hover':{scale:'1.1',color:'#000',bgcolor:'#fff'}}}>Subscibe</Button>
                </Grid>
                <Typography fontSize='20px' paddingTop='30px' fontWeight='200'>Sign up with your email address to receive news and updates</Typography>

            </Grid>
            <Grid xs={4} container direction="column" justifyItems='center' alignItems='center'>
                <Typography fontSize='24px'>Contact Us</Typography>
                <Typography fontSize='20px'>AnyWhere, AnyCity, 445533</Typography>
                <Typography fontSize='20px'>Call Us: +5555555555</Typography>
                <Typography fontSize='20px'>info@kingserent.com</Typography>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Footer
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box sx={{width:'1920px'}}>
        <Grid xs={12} container p={10} sx={{bgcolor:'#000',color:'#fff'}}>
            <Grid xs={10} container direction='column' justifyContent='center' alignItems='flex-start' paddingTop='246px' paddingLeft='566px'>
                <Typography>NewsLetter</Typography>
                <Grid>
                <TextField variant='outlined'  placeholder='Email' size='small' sx={{bgcolor:'#fff', color:'#000'}} />
                <Button variant='outlined'  sx={{marginLeft:'15px',color:'#000',bgcolor:"#fff", border:"1px solid #fff",borderRadius:''}}>Subscibe</Button>
                </Grid>
                <Typography>Sign up with your email address to receive news and updates</Typography>

            </Grid>
            <Grid xs={2} container direction="column" justifyItems='center' alignItems='center' paddingTop='173px'>
                <Typography>Contact Us</Typography>
                <Typography>AnyWhere,AnyCity,445533</Typography>
                <Typography>Call Us:+5555555555</Typography>
                <Typography>info@kingserent.com</Typography>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Footer
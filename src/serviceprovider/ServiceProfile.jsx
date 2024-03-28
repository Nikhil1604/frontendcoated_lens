import { Box, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import editpro from '../images/editpro.jpg'
import portimages from '../images/portimages.jpg'

const ServiceProfile = () => {
  return (
    <Box height='100%' sx={{backgroundColor:'white'}}>
        <Grid container direction='column' justifyContent='center'>
            
            <Grid xs={12} sx={{paddingY:'10px',color:'white',backgroundColor:'#ff258d',marginTop:'20px'}} >
                <Typography fontSize='26px' sx={{paddingLeft:'50px'}}>Edit Profile</Typography>
            </Grid>

            <Grid xs={12} container direction='row' justifyContent='space-between' alignItems='center' padding='20px'>
                
                <Grid xs={4} container direction='row' justifyContent='space-around'>
                    <Grid xs={5}>
                        <img src={editpro} alt="edot" width='100%' />
                    </Grid>
                    <Grid xs={6} container direction='row'>
                        <TextField placeholder='Enter Your Name' variant='standard'/>
                        <TextField placeholder='Contact' variant='standard'/>
                        <TextField placeholder='Email Id' variant='standard'/>
                        <TextField placeholder='Date Of Birth' variant='standard'/>
                    </Grid>
                </Grid>

                <Grid xs={4} container direction='row' justifyContent='center'>
                        <TextField placeholder='Your Bio' variant='standard' multiline  rows='7'/>
                </Grid>

            </Grid>

            <Grid container direction='column' paddingTop='150px' paddingLeft='50px'>
                
                <Grid xs={12}>
                    <Typography fontSize='24px'>Portfolio</Typography>
                </Grid>

                <Grid xs={18} container direction='row'>
                    <Grid xs={2}>
                        <img src={portimages} alt="port" width='90%' height='100%' />
                    </Grid>
                    <Grid xs={2}>
                        <img src={portimages} alt="port" width='90%' height='100%' />
                    </Grid>
                    <Grid xs={2}>
                        <img src={portimages} alt="port" width='90%' height='100%' />
                    </Grid>
                    <Grid xs={2}>
                        <img src={portimages} alt="port" width='90%' height='100%' />
                    </Grid>
                    <Grid xs={2}>
                        <img src={portimages} alt="port" width='90%' height='100%' />
                    </Grid>
                    <Grid xs={2}>
                        <img src={portimages} alt="port" width='90%' height='100%' />
                    </Grid>
                    
                </Grid>

            </Grid>

        </Grid>
    </Box>
  )
}

export default ServiceProfile
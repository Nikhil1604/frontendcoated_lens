import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import image1 from '../images/servicedash1.jpg'
import image2 from '../images/servicedash2.jpg'
// import photo from '../images/leadsphoto.jpg'
import Leads from './Leads'

const ServiceProviDashboard = () => {
  return (
    <Box height='100%' sx={{backgroundColor:'white'}}>
        <Grid container direction='column'>
            <Grid container direction='row' justifyContent='space-between' marginX='20px' paddingY='20px'> 
                <Grid xs={6}>
                    <img src={image1} height='95%' width='95%' alt="im" />
                </Grid>
                <Grid xs={6}>
                    <img src={image2} height='95%' width='95%' alt="im2"/>
                </Grid>
            </Grid>
            
            <Grid container direction='column' >
                <Typography  paddingY='10px' fontSize='28px' paddingLeft='50px' color='white' backgroundColor='#ff258d'>
                    New Leads
                </Typography>
                <Grid container direction='row' paddingY='10px' paddingLeft='40px'>
                    <Leads />
                    <Leads />
                    <Leads />
                </Grid>


            </Grid>

            <Grid container direction='column' >
                <Typography  paddingY='10px' fontSize='28px' paddingLeft='50px' color='white' backgroundColor='#ff258d'>
                    Old Leads
                </Typography>
                
                <Grid container direction='row' paddingY='10px' paddingLeft='40px'>
                    <Leads />
                    <Leads />
                    <Leads />
                </Grid>


            </Grid>



        </Grid>
    </Box>
  )
}

export default ServiceProviDashboard
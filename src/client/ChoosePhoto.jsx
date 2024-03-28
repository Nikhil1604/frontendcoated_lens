import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import coupen from '../images/coupen.jpg'
import coupen2 from '../images/coupen2.jpg'
import Profile from './Profile'


const ChoosePhoto = () => {
  return (
    <Box sx={{backgroundColor:'white'}} height='100%'>
        <Grid padding='20px' container direction='column'>
            <Typography fontSize='36px'>Choose Your Photographer</Typography>
            
            <Grid container direction='row' alignItems='center' justifyContent='space-around'>
                <Grid xs={6}>
                    <img src={coupen} alt="coupen" width='90%' />
                </Grid>
                <Grid xs={6}>
                    <img src={coupen2} alt="coupen" width='90%' />
                </Grid>
            </Grid>


            <Grid container direction='row' alignItems='center' justifyContent='space-around' paddingY='25px'>
                <Profile />
                <Profile />
                <Profile />
                <Profile />
                <Profile />
                <Profile />
                <Profile />
                <Profile />

            </Grid>

            

        </Grid>
    </Box>
  )
}

export default ChoosePhoto
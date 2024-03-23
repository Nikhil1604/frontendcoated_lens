import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import userDash from '../images/userdash.jpg'
import photo from '../images/photography.jpg'
import edit from '../images/editing.jpg'
import video from '../images/videography.jpg'
import design from '../images/design.jpg'
import { Link } from 'react-router-dom'


const UserDashboard = () => {
  return (
    <Box height='100%' sx={{backgroundColor:'white'}}>
        <Grid container direction='column'  >
            <Grid container direction='row' padding='20px' alignItems='center' justifyContent='space-between'>
                <Typography fontSize='36px'>Welcome Back Chinmay </Typography>
                <TextField size='small' sx={{backgroundColor:'#fff7ea'}} label='Search User'/>
            </Grid>
            <Grid container direction='row' paddingX='20px' paddingY='50px'>
                <img src={userDash} alt="userDash"  width='100%' height='75%' sx={{objectFit:'cover'}} />
            </Grid>

            <Grid container direction='row' justifyContent='space-around' alignItems='center' paddingTop='74px'>
                        <Grid xs={3} container direction='column' justifyContent='center' alignItems='center'>
                            <img src={photo} alt='photo1'/>
                            <Button component={Link} to='/choosephoto' variant='text' sx={{fontSize:'20px', color:'black',paddingTop:'28px'}}>PhotoGraphy</Button>
                        </Grid>
                        <Grid xs={3} container direction='column' justifyContent='center' alignItems='center'>
                            <img src={video} alt='video'/>
                            <Button component={Link} to='/choosephoto' variant='text' sx={{fontSize:'20px',color:'black',paddingTop:'28px'}}>VideoGraphy</Button>
                        </Grid>
                        <Grid xs={3} container direction='column' justifyContent='center' alignItems='center'>
                            <img src={design} alt='design'/>
                            <Button component={Link} to='/choosephoto' variant='text' sx={{fontSize:'20px',color:'black',paddingTop:'28px'}}>Designing</Button>
                        </Grid>
                        <Grid xs={3} container direction='column' justifyContent='center' alignItems='center'>
                            <img src={edit} alt='edit'/>
                            <Button component={Link} to='/choosephoto' variant='text' sx={{fontSize:'20px',color:'black',paddingTop:'28px'}}>Editing</Button>
                        </Grid>
                </Grid>

        </Grid>
    </Box>
  )
}

export default UserDashboard
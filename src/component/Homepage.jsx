import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import homepage from '../images/homepage.jpg'
import photo from '../images/photography.jpg'
import edit from '../images/editing.jpg'
import video from '../images/videography.jpg'
import design from '../images/design.jpg'
import { Link } from 'react-router-dom'


const Homepage = () => {
  return (
    <Box sx={{height:'100%',backgroundColor:'white'}}>
            <Box sx={{  position:'relative',              
                    }}>
                <img src={homepage} sx={{width:'100%',objectFit:'cover'}} alt="Home page"/>
                    <Grid container width='75%' direction='column' justifyContent='center' alignItems='flex-start' paddingX='24px' paddingY='24px' sx={{
                        position:'absolute',
                        bottom:'85px',
                        left:'85px',
                        backgroundColor:'#fff',
                       
                    }}>
                        <Typography variant='body1' fontSize='24px' paddingBottom={4} sx={{color:'#a2873a'}} >Plan Your Events With Us.</Typography>
                        <Typography variant='body1' fontSize='30px'paddingBottom={2}>YOUR PERSONAL DREAM MAKER</Typography>
                        <Typography variant='subtitle1'  fontSize='20px' paddingBottom={2}>We believe that it is all about the BIG DREAMS and the small details!</Typography>
                        <Button component={Link} to='/oldlead' variant='contained' sx={{color:'#fff',bgcolor:'#000',width:'205px',height:'50px',fontSize:'16px'}}>Book Now</Button>
                        
                    </Grid>
            </Box>
            <Grid container direction='row' justifyContent='center' alignSelf='flex-start' paddingTop='34px' >
                <Typography variant='h4' fontSize='40px' fontWeight='600'>View Best Service Provider </Typography>
                <Grid container direction='row' justifyContent='space-around' alignItems='center' paddingTop='74px'>
                        <Grid xs={3} container direction='column' justifyContent='center' alignItems='center'>
                            <img src={photo} alt='photo1'/>
                            <Typography fontSize='30px' paddingTop='28px'>PhotoGraphy</Typography>
                        </Grid>
                        <Grid xs={3} container direction='column' justifyContent='center' alignItems='center'>
                            <img src={video} alt='video'/>
                            <Typography fontSize='30px' paddingTop='28px' >VideoGraphy</Typography>
                        </Grid>
                        <Grid xs={3} container direction='column' justifyContent='center' alignItems='center'>
                            <img src={design} alt='design'/>
                            <Typography fontSize='30px' paddingTop='28px'>Designing</Typography>
                        </Grid>
                        <Grid xs={3} container direction='column' justifyContent='center' alignItems='center'>
                            <img src={edit} alt='edit'/>
                            <Typography fontSize='30px' paddingTop='28px'>Editing</Typography>
                        </Grid>
                </Grid>

            </Grid>
           

    </Box>
  )
}

export default Homepage
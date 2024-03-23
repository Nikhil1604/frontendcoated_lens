import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import port from '../images/port.jpg'
import profi from '../images/profi.jpg'
import Review from './Review'

const Photographerinfo = () => {
  return (
    <Box sx={{backgroundColor:'white',height:'100%'}}>
        <Grid container direction='row' justifyContent='space-around' alignItems='center' paddingY='30px' paddingX='20px'>
            <Grid xs={4}>
                <img src={profi} alt="profile" width='90%' height='95%' />
            </Grid>
            <Grid xs={8} container direction='column' justifyContent='center' alignItems='flex-start'>
                <Typography fontSize='24px' >WElCOME ,I AM PROFESSIONAL PHOTOGRAPHER</Typography>
                <Typography fontSize='30px' fontWeight='600' paddingTop='5px'> Name: <Typography fontSize='26px' fontWeight='300' display='inline'>Vivek Padia</Typography></Typography>
                <Typography fontSize='20px' fontWeight='700' paddingTop='2px'>Desciption:
                <Typography fontSize='20px' fontWeight='200'  display='inline'>I deliver high-quality solutions that meet my clients' needs. With a strong technical background and a passion for innovation, I create efficient web applications. My expertise ensures exceptional user experiences and seamless functionality.</Typography>
                </Typography>
                <Grid container direction='row' alignItems='center' justifyContent='center' paddingY='10px'>
                    <Grid xs={6} container direction='column' alignItems='flex-start' justifyContent='center'>
                        <Typography fontSize='18px'>Reqiurement: <Typography display='inline'>Photography</Typography></Typography>
                        <Typography fontSize='18px'>Loaction: <Typography display='inline'>Gujrat ,India</Typography></Typography>
                        <Button variant='contained' paddingTop='10px' sx={{backgroundColor:'#ff258d',color:'white'}}>Send Enquiry</Button>
                    </Grid>
                    <Grid xs={6} container direction='column' alignItems='flex-start' justifyContent='center'>
                        <Typography fontSize='18px'>Contact: <Typography display='inline'>+91 9988776655</Typography></Typography>
                        <Typography fontSize='18px'>Email: <Typography display='inline' sx={{color:'blueviolet'}}>info@info.com</Typography></Typography>
                        <Typography paddingTop='10px'>Date: <Typography display='inline'>26/11/2023</Typography></Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

        <Grid container direction='column' justifyContent='center' alignItems='center' paddingX='20px'>
            <Typography fontSize='30px' fontWeight='600'>My Portfolio</Typography>
            <Grid container direction='row' justifyContent='center' alignItems='center' paddingX='10px'>
                <Grid xs={2}>
                <img src={port} alt="port" sx={{width:'90%'}}/>
                </Grid>
                <Grid xs={2}>
                <img src={port} alt="port" sx={{width:'90%'}}/>
                </Grid>
                <Grid xs={2}>
                <img src={port} alt="port" sx={{width:'90%'}}/>
                </Grid>
                <Grid xs={2}>
                <img src={port} alt="port" sx={{width:'90%'}}/>
                </Grid>
                <Grid xs={2}>
                <img src={port} alt="port" sx={{width:'90%'}}/>
                </Grid>
                <Grid xs={2}>
                <img src={port} alt="port" sx={{width:'90%'}}/>
                </Grid>
            </Grid>
        </Grid>
        <Typography fontSize='30px' fontWeight='600'>Reviews</Typography>
        <Grid container direction='row' >
            <Review />
            <Review />
        </Grid>
        
        


    </Box>
  )
}

export default Photographerinfo
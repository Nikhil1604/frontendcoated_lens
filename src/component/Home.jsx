import { Box, Grid, Typography } from '@mui/material'
import companylogo from '../images/companylogo.jpg'  
import googleplay from '../images/googleplay.jpg'
import applestore from '../images/applestore.jpg'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
// import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

import React from 'react'

const Home = () => {
  return (
    <Box  sx={{height:'auto',width:'auto'}}>
        <Grid container lineHeight={20} direction='column' justifyContent='center' alignItems='center'>
            <img src={companylogo}  alt="Company Logo" style={{backgroundColor:'#fff7ea',padding:'60px 0 75px 0'}} />
            <Typography variant='h6' fontSize='25px'  sx={{color:'#a2783a',paddingBottom:'25px'}}>Home</Typography>
            <Typography variant='h6' fontSize='25px' sx={{color:'#a2783a',paddingBottom:'25px'}}>About</Typography>
            <Typography variant='h6' fontSize='25px' sx={{color:'#a2783a',paddingBottom:'38px'}}>Contact</Typography>
            <Typography variant='h6' fontSize='25px' sx={{color:'#a2783a',padding:'15px 0 0'}}>Log In</Typography>
            <Typography variant='h6' fontSize='25px' sx={{color:'#a2783a',padding:'15px 0 25px 0'}}>Sign Up</Typography>
            <img src={googleplay} style={{padding:'0 0 25px 0'}} alt="google play" />
            <img src={applestore} style={{padding:'0 0 45px 0'}} alt="apple store" />
            <hr  style={{width:'33%',color:'a2783a'}}/>
            <Typography fontSize='24px' paddingTop='14px' sx={{fontWeight:'light'}}> +91 8886668888</Typography>
            <Typography fontSize='24px' paddingTop='11px' sx={{fontWeight:'light'}}>info@info.com</Typography>
            <Grid container direction='row' justifyContent='space-around' alignItems='center' paddingTop='44px' paddingBottom='35px' paddingLeft='85px' paddingRight='85px'>
                <FacebookIcon fontSize='large' sx={{bgcolor:'#a2783a',color:'#fff7ea'}}/>
                <InstagramIcon fontSize='large' sx={{bgcolor:'#a2783a',color:'#fff7ea'}}/>
                <LinkedInIcon fontSize='large' sx={{bgcolor:'#a2783a',color:'#fff7ea'}}/>
                <TwitterIcon fontSize='large' sx={{bgcolor:'#a2783a',color:'#fff7ea'}}/>

            </Grid>

        </Grid>
    </Box>
  )
}

export default Home
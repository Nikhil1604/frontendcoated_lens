import { Box, Button, Grid, Typography } from '@mui/material'
import companylogo from '../images/companylogo.jpg'  
import googleplay from '../images/googleplay.jpg'
import applestore from '../images/applestore.jpg'
import facebook from '../images/facebook.jpg'
import indeed from '../images/indeed.jpg'
import twitter from '../images/twitter.jpg'
import other from '../images/other.jpg'
import insta from '../images/insta.jpg'
import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <Box  sx={{}}>
        <Grid container direction='column' alignItems='center'>
            <img src={companylogo}  alt="Company Logo" style={{padding:'43px 0 75px 0',backgroundColor:'#fff7ea'}} />
            <Button component={Link} to='/' variant='text' sx={{fontSize:'20px',color:'#a2783a',paddingBottom:'23px',boxShadow:'none',transition: 'transform 0.3s ease-in-out',
            '&:hover':{scale:'1.1',boxShadow:'none' }
            }}>Home</Button>
            <Button component={Link} to='/about' variant='text' sx={{ fontSize:'20px',color:'#a2783a',paddingBottom:'23px',transition: 'transform 0.3s ease-in-out',
            '&:hover':{scale:'1.1'}}}>About</Button>
            <Button component={Link} to='/contact' variant='text' sx={{ fontSize:'20px',color:'#a2783a',paddingBottom:'36px',transition: 'transform 0.3s ease-in-out',
            '&:hover':{scale:'1.1'}}}>Contact</Button>
            <Button component={Link} to='/login' variant='text' sx={{fontSize:'20px',color:'#a2783a',transition: 'transform 0.3s ease-in-out',
            '&:hover':{scale:'1.1'}}}>Log In</Button>
            <Button component={Link} to='/signup' variant='text' sx={{fontSize:'20px',color:'#a2783a',padding:'25px 0 0 0',transition: 'transform 0.3s ease-in-out',
            '&:hover':{scale:'1.1'}}}>Sign Up</Button>
            <img src={googleplay} style={{paddingTop:'48px'}} alt="google play" />
            <img src={applestore} style={{paddingTop:'25px'}} alt="apple store" />
            <hr  style={{ marginTop:'35px',width:'33%',color:'a2783a'}}/>
            <Typography fontSize='24px' paddingTop='14px' sx={{fontWeight:'light'}}> +91 8886668888</Typography>
            <Typography fontSize='24px' paddingTop='11px' sx={{fontWeight:'light'}}>info@info.com</Typography>
            <Grid container direction='row' justifyContent='space-around' alignItems='center' paddingTop='44px' paddingBottom='35px' paddingLeft='85px' paddingRight='85px'>
                <img src={facebook} alt="facebook" />
                <img src={indeed} alt="indeed" />
                <img src={twitter} alt="twitter" />
                <img src={other} alt="other" />
                <img src={insta} alt="insta" />

            </Grid>

        </Grid>
    </Box>
  )
}

export default SideBar
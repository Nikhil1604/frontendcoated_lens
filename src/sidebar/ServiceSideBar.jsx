import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import companylogo from '../images/companylogo.jpg'  
import facebook from '../images/facebook.jpg'
import indeed from '../images/indeed.jpg'
import twitter from '../images/twitter.jpg'
import other from '../images/other.jpg'
import insta from '../images/insta.jpg'
import { Link } from 'react-router-dom'

const CustomButton = ({ children,to }) => {
    const styles = {
      fontSize: '20px',
      color: 'black',
      textalign:'left',
      paddingBottom: '10px',
      paddingRight:0,
      boxShadow: 'none',
      transition: 'transform 0.3s ease-in-out',
      '&:hover': {
        scale: '1.1',
        boxShadow: 'none',
      },
    };
  
    return (
      <Button variant="text" sx={styles} component={Link} to={to}>
        {children}
      </Button>
    );
  };

const ServiceSideBar = () => {
  return (
    <Box >
        <Grid container direction='column' alignItems='center' >
            <img src={companylogo}  alt="Company Logo" style={{padding:'43px 0 75px 0',backgroundColor:'#fff7ea'}} />
            <CustomButton component={Link} to='/profile' variant='text'>Profile</CustomButton>
            <CustomButton component={Link} to='/portfolio' variant='text'>Your Portfolio</CustomButton>
            <CustomButton component={Link} to='/address' variant='text'>Your Address</CustomButton>
            <CustomButton component={Link} to='/oldlead' variant='text'>Past Order</CustomButton>
            <CustomButton component={Link} to='/newlead' variant='text'>New Order</CustomButton>
            <CustomButton component={Link} to='/subsciption' variant='text'>Subsciption</CustomButton>
            <CustomButton component={Link} to='/oldlead' variant='text'>Your Service</CustomButton>
            <CustomButton component={Link} to='/servicesetting' variant='text'>Settings</CustomButton>
            <CustomButton component={Link} to='/terms' variant='text'>Terms & Conditions</CustomButton>
            <CustomButton component={Link} to='/privacy' variant='text'>Privacy Policy</CustomButton>
            <CustomButton component={Link} to='/earning' variant='text'>Your Earning</CustomButton>
            <CustomButton component={Link} to='/oldlead' variant='text'>Logout</CustomButton>


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

export default ServiceSideBar
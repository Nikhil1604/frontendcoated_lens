import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import {List,ListItem} from '@mui/joy'
import service from '../images/bookservice.jpg'
import { Link } from 'react-router-dom'

const BookService = () => {
  return (
    <Box sx={{backgroundColor:'white'}}>
    <Grid container height='screen' direction='column' sx={{padding:'30px'}} >
        <Typography varient="h3" sx={{fontSize:'35px',fontStyle:'italic',color:'#a2783a'}} gutterBottom>Our Services</Typography>
        <Typography varient="h1" sx={{fontSize:'50px'}} gutterBottom>Book A Service</Typography>
        <Grid container direction='row' justifyContent='center' sx={{marginTop:'60px'}}>
            <Grid xs={6} >
                <img src={service} sx={{width:'574px',height:'801px',}} alt="Service-Provider" />
            </Grid>
            <Grid xs={6} container direction='column' justifyContent='flex-start' >
                <Typography varient='body1' sx={{fontSize:'20px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis harum assumenda dicta facere non, expedita voluptates magni nisi quidem! Eum, saepe quos! Quos dolores dolor sed tempore, quisquam autem alias illum eligendi, voluptatibus vitae fugit aliquid dolorum aliquam esse perspiciatis, sit quaerat enim magnam laudantium fugiat. In aperiam alias voluptatum?</Typography>
                <hr />
                <hr />
                <Typography varient='body1' sx={{fontSize:'20px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt beatae incidunt distinctio illum consequuntur? Tempore corrupti harum facilis expedita amet assumenda aliquam eaque iusto earum!</Typography>
                <Typography varient='h4' sx={{fontSize:'30px' ,fontStyle:'italic',color:'#a2783a'}}>Package Include</Typography>
                
                <List component="ol" marker="decimal" sx={{fontSize:'20px'}}>
                    <ListItem>
                        PWE Weddings & Events Workbook 
                    </ListItem>
                    <ListItem>
                        Unlimited access to expert wedding advice (via e-mail) 
                    </ListItem>
                    <ListItem>
                        Access to Preferred Vendors List
                    </ListItem>
                    <ListItem>
                        Wedding Assistant for wedding day
                    </ListItem>
                    <ListItem>
                        Oversee and help with ceremony/reception site set up & tear down
                    </ListItem>
                    <ListItem>
                        Review of Vendor contracts 
                    </ListItem>
                    <ListItem>
                    Distribute final payments and gratuities to vendors as necessary 
                    </ListItem>
                </List>
                <Button varient='contained' component={Link} to='/signup' sx={{bgcolor:'#000',color:'#fff',
                width:'30%',paddingTop:'15px',
                transform:'transition 0.3s ease-in-out',
                paddingBottom:'15px','&:hover':{bgcolor:'#000',color:'#fff',scale:'1.05'}}}>Book Now</Button>
            </Grid>
        </Grid>
    </Grid>
</Box>
  )
}

export default BookService
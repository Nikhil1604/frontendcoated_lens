import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import earn from '../images/earn.jpg'
import book from '../images/bookwithus.jpg'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <Box sx={{backgroundColor:'white', paddingLeft:'40px', height:'100%'}}>
        
            <Grid container direction='row' justifyContent='flex-start ' alignItems='center'>
                    <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                        <Typography variant='body2' fontSize='50px' fontWeight='light' paddingTop='70px'>About</Typography>
                        {/* <Button variant='contained' sx={{ bgcolor:'#000',color:'#fff',width:'205px',height:'50px',marginRight:'125px', fontSize:'20px'}}>See more</Button> */}
                    </Grid>
                    <Typography variant='h6' fontSize='20px'  paddingTop='40px'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis distinctio minus consequatur aspernatur recusandae? Laborum nam, asperiores est, quas illum accusamus explicabo neque laudantium nihil commodi quaerat reprehenderit ducimus voluptate hic accusantium ab maxime ratione ex eaque. Voluptas delectus nulla sapiente expedita tempora quidem ipsam doloribus saepe porro numquam labore odit ea cupiditate repudiandae, hic quibusdam molestiae nisi illo quos eaque quia, id quam illum? Ducimus quidem tempora, expedita repellendus ipsa fuga quis quasi iusto vel esse voluptatibus eveniet, magnam accusamus aperiam doloremque optio dolorem explicabo. </Typography>
            </Grid>

            <Grid container direction='row' paddingTop='65px' paddingBottom='55px' justifyContent='flex-start '>
                    <Typography variant='body' fontSize='50px' fontWeight='400'>What We Offer</Typography>
                    <Grid container direction='row' justifyContent='space-around' alignItems='center' paddingTop='108px' >
                        <Grid xs={6} container direction='column' justifyContent='center' alignItems='center'>
                            <img src={earn} alt='earn'/>
                            <Typography variant='body1' fontSize='30px' paddingTop='40px' paddingBottom='45px' fontWeight='400'>Earn With Us</Typography>
                            <Button component={Link} to='/earnwithus' variant='contained' sx={{bgcolor:'#000',color:'#fff',width:'251px',height:'71px',paddingTop:'15px', fontSize:'23px'}}>View Details</Button>
                        </Grid>
                        <Grid xs={6} container direction='column' justifyContent='center' alignItems='center'>
                            <img src={book} alt='book'/>
                            <Typography variant='body1' fontSize='30px' paddingTop='40px'  paddingBottom='45px' fontWeight='400'>Book A service</Typography>
                            <Button component={Link} to='/bookaservice' variant='contained' sx={{bgcolor:'#000',color:'#fff',width:'251px',height:'71px',paddingTop:'15px', fontSize:'23px'}}>View Details</Button>
                        </Grid>
                          
                    </Grid>
            </Grid>
    </Box>
  )
}

export default About
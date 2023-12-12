import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import homepage from '../images/homepage.jpg'
import photo from '../images/photography.jpg'
import edit from '../images/editing.jpg'
import video from '../images/videography.jpg'
import design from '../images/design.jpg'
import earn from '../images/earn.jpg'
import book from '../images/Book.jpg'


const Homepage = () => {
  return (
    <Box>

            <Box sx={{  position:'relative',
                       
                    }}>
                <img src={homepage} sx={{}} alt="Home page"/>
                    <Grid container direction='column' justifyContent='center' alignItems='flex-start' paddingX='24px' paddingY='24px' sx={{
                        position:'absolute',
                        bottom:'85px',
                        left:'85px',
                        backgroundColor:'#fff',
                        width:'687px',
                        height:'294px',
                    }}>
                        <Typography variant='body1'fontSize='24px' paddingBottom={4} sx={{color:'#a2873a'}} >Plan Your Events With Us.</Typography>
                        <Typography variant='body1' fontSize='30px'paddingBottom={2}>YOUR PERSONAL DREAM MAKER</Typography>
                        <Typography variant='subtitle1'  fontSize='20px' paddingBottom={2}>We believe that it is all about the BIG DREAMS and the small details!</Typography>
                        <Button variant='contained' sx={{color:'#fff',bgcolor:'#000',width:'205px',height:'50px',fontSize:'16px'}}>Book Now</Button>
                        
                    </Grid>
            </Box>
            <Grid container direction='row' justifyContent='center' alignSelf='flex-start' paddingTop='34px' >
                <Typography variant='h4' fontSize='40px'>View Best Service Provider </Typography>
                <Grid container direction='row' justifyContent='space-around' alignItems='center' paddingTop='74px'>
                        <Grid xs={3} container direction='column' justifyContent='center' alignItems='center'>
                            <img src={photo} alt='photo1'/>
                            <Typography>PhotoGraphy</Typography>
                        </Grid>
                        <Grid xs={3} container direction='column' justifyContent='center' alignItems='center'>
                            <img src={video} alt='video'/>
                            <Typography>VideoGraphy</Typography>
                        </Grid>
                        <Grid xs={3} container direction='column' justifyContent='center' alignItems='center'>
                            <img src={design} alt='design'/>
                            <Typography>Designing</Typography>
                        </Grid>
                        <Grid xs={3} container direction='column' justifyContent='center' alignItems='center'>
                            <img src={edit} alt='edit'/>
                            <Typography>Editing</Typography>
                        </Grid>
                </Grid>

            </Grid>
            <Grid container direction='row' paddingTop='83px' justifyContent='flex-start '>
                    <Typography variant='body' fontSize='50px' fontWeight='400'>What We Offer</Typography>
                    <Grid container direction='row' justifyContent='space-around' alignItems='center' paddingTop='108px' >
                        <Grid xs={3} container direction='column' justifyContent='center' alignItems='center'>
                            <img src={earn} alt='earn'/>
                            <Typography variant='body1' fontSize='40px' fontWeight='400'>Earn With Us</Typography>
                        </Grid>
                        <Grid xs={3} container direction='column' justifyContent='center' alignItems='center'>
                            <img src={book} alt='book'/>
                            <Typography variant='body1' fontSize='40px' fontWeight='400'>Book A service</Typography>
                        </Grid>
                        <Grid>
                            <Button variant='contained' sx={{bgcolor:'#000',color:'#fff',width:'251px',height:'71px',marginRight:'87px', fontSize:'20px'}}>View Details</Button>
                        </Grid>   
                    </Grid>
            </Grid>
            <Grid container direction='row' paddingTop='209px' justifyContent='flex-start ' alignItems='center'>
                    <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                        <Typography variant='body2' fontSize='50px' fontWeight='light'>About</Typography>
                        <Button variant='contained' sx={{ bgcolor:'#000',color:'#fff',width:'205px',height:'50px',marginRight:'125px', fontSize:'20px'}}>See more</Button>
                    </Grid>
                    <Typography variant='h6' fontSize='30px'marginRight='125px' paddingTop='62px'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis distinctio minus consequatur aspernatur recusandae? Laborum nam, asperiores est, quas illum accusamus explicabo neque laudantium nihil commodi quaerat reprehenderit ducimus voluptate hic accusantium ab maxime ratione ex eaque. Voluptas delectus nulla sapiente expedita tempora quidem ipsam doloribus saepe porro numquam labore odit ea cupiditate repudiandae, hic quibusdam molestiae nisi illo quos eaque quia, id quam illum? Ducimus quidem tempora, expedita repellendus ipsa fuga quis quasi iusto vel esse voluptatibus eveniet, magnam accusamus aperiam doloremque optio dolorem explicabo. </Typography>
            </Grid>

    </Box>
  )
}

export default Homepage
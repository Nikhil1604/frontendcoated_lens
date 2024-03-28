import { Textarea } from '@mui/joy'
import { Box, Button, Grid, MenuItem, Select, Typography } from '@mui/material'
import React from 'react'
import uplo from '../images/upload.jpg'
import { Link } from 'react-router-dom'

const gender =['Male','Female','Other']

const services=['Photography','VideoGraphy','Designing','Editing',]



const AboutUsUser = () => {
    const [value,setValue]=React.useState('');

    const handleChange = (e) =>{
        setValue(e.target.value)
    };


  return (
    <Box height='100%' sx={{backgroundColor:'white'}} >
        <Grid container direction='column' paddingX='20px'>
            
            <Grid container direction='column' justifyContent='center' alignItems='flex-end' paddingRight='20px'>
                <Grid xs={3} container direction='column' alignItems='center'>
                <img src={uplo} alt="upload" sx={{width:'100%',height:'100%'}} />
                <Typography>Upload Your Profile Pic</Typography>
                </Grid>
            </Grid>

            <Typography fontSize='30px' paddingY='20px' paddingLeft='80px'>About US</Typography>

            <Grid paddingLeft='80px' container direction='row' alignItems='center' justifyContent='space-between' >
                
                <Grid xs={5} borderRadius='5px' sx={{backgroundColor:'#fff7ea'}}>
                    <Textarea paddingY='10px' paddingLeft='10px'  placeholder='Enter Your Name'/>
                </Grid>
                
                <Grid xs={5} borderRadius='5px'>
                    <Select label='Gender' value={value} onChange={handleChange} size='small' sx={{width:'100%',height:'80%',opacity:'1'}}>
                        {
                            gender.map((gender) =>(
                                <MenuItem value={gender} key={gender}>{gender}</MenuItem>
                            ))
                        }
                        
                    </Select>
                </Grid>
                
                <Grid xs={5} borderRadius='5px' marginTop='20px' sx={{backgroundColor:'#fff7ea'}}>
                    <Textarea paddingY='10px' paddingLeft='10px'  placeholder='Email'/>
                </Grid>
                
                <Grid xs={5} borderRadius='5px' marginTop='20px'>
                    
                <Select label='Services' value={value} onChange={handleChange} size='small' sx={{width:'100%',height:'80%'}}>
                        {
                            services.map((services) =>(
                                <MenuItem value={services} key={services}>{services}</MenuItem>
                            ))
                        }     
                    </Select>
                </Grid>

                <Grid xs={5} borderRadius='5px' marginTop='20px' sx={{backgroundColor:'#fff7ea'}}>
                    <Textarea paddingY='10px' paddingLeft='10px'  placeholder='Date Of Birth'/>
                </Grid>

                
                <Grid xs={12} borderRadius='5px' marginTop='20px' sx={{backgroundColor:'#fff7ea'}}>
                    <Textarea paddingY='10px' paddingLeft='10px'  placeholder='Address'/>
                </Grid>

                <Grid xs={12} container direction='row' alignItems='center' justifyContent='center' paddingY='20px'>
                    <Button component={Link} to='/userdashboard' variant='contained'  sx={{backgroundColor:'#ff258d',color:'white',
                '&:hover':{backgroundColor:'#ff258d',opacity:0.9}
                }}>Next</Button>
                </Grid>

            </Grid>

        </Grid>
    </Box>
  )
}

export default AboutUsUser
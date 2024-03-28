import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

const Contact = () => {
  return (
    <Box sx={{backgroundColor:'white', paddingX:'40px', height:'100%'}}>
        <Grid container direction='column' padding='20px 10px 40px 10'>
        <Typography varient="h3" sx={{fontSize:'35px',fontStyle:'italic',color:'#a2783a'}} gutterBottom>Location</Typography>
        <Typography varient="h1" sx={{fontSize:'50px'}} gutterBottom>Earn With Us</Typography>
        </Grid>
        <Grid container direction='row' justifyContent='space-around' alignItems='center' paddingTop='60px'>
            
            <Grid xs={3} border='1px solid #926c34' borderRadius={2} width='250px' height='180px' backgroundColor='#fff7ea' >
                <Typography paddingTop='20px' textAlign='center' fontSize='40px'>Address</Typography>
                <Typography padding='20px' fontSize='20px'>Any where,Any city,445533</Typography>
            </Grid>
            <Grid xs={3} border='1px solid #926c34' borderRadius={2} width='250px' height='180px' backgroundColor='#fff7ea' >
                <Typography paddingTop='20px' textAlign='center' fontSize='40px'>Call Us</Typography>
                <Typography padding='20px' fontSize='20px'>+918888888888</Typography>
            </Grid>
            <Grid xs={3} border='1px solid #926c34' borderRadius={2} width='250px' height='180px' backgroundColor='#fff7ea'>
                <Typography paddingTop='20px' textAlign='center' fontSize='40px'>Mail Us</Typography>
                <Typography padding='20px' fontSize='20px'>info@info.com</Typography>
            </Grid>
        </Grid>

        <Grid container direction='row' paddingTop='40px'>
            
            <Grid xs={6}></Grid>

            <Grid xs={6} container direction='column'>
            
                <Typography fontSize='30px' paddingY='20px'>Contact</Typography>
            
                <Grid container direction='row' justifyContent='space-between' paddingY='10px'>
                    <TextField xs={5} variant='outlined' label='Name' sx={{backgroundColor:'#fff7ea',border:'1px solid #926c34',borderRadius:'5px'}} />
                    <TextField xs={5} variant='outlined' label='Email' sx={{backgroundColor:'#fff7ea',border:'1px solid #926c34',borderRadius:'5px'}} />
                </Grid>
                <TextField variant='outlined' sx={{marginY:'10px',backgroundColor:'#fff7ea',border:'1px solid #926c34',borderRadius:'5px'}} label='Subject' />
                <TextField variant='outlined' label='Message' multiline rows={6} sx={{backgroundColor:'#fff7ea',border:'1px solid #926c34',borderRadius:'5px'}} />
                <Button variant='contained'  sx={{bgcolor:'#000',color:'#fff', width:'30%',fontSize:'20px', marginY:'20px',transform:'transition 0.3s ease-in-out','&:hover':{bgcolor:'#000',color:'#fff',scale:'1.05'}}}>Send</Button>
            </Grid>
        </Grid> 


    </Box>
  )
}

export default Contact
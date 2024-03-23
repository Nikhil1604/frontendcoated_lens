import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'

const SignUp = () => {
  return (
    <Box sx={{backgroundColor:'white',height:'100%'}}>
        <Grid container direction='column' >

        <Grid container  direction='row' alignItems='center' justifyContent='flex-end' >
                    <Typography sx={{fontSize:'20px'}}>Don't have a account ?</Typography>
                    <Button  sx={{color:'#ff258d',fontSize:'20px',padding:'0'}}>Sign Up</Button>
        </Grid>

        <Grid container direction='row' alignItems='center' justifyContent='space-around' paddingTop='50px'>

            <Grid xs={5} container direction='column' justifyContent='center' alignItems='center' >
                <Typography fontSize='30px'>Get Started</Typography>
                <Typography fontSize='20px'>Getting Started is easy</Typography>

                <Typography fontSize='30px'>Sign up with Mobile Number</Typography>
                <Typography fontSize='20px'>Enter With Mobile No.</Typography>

            </Grid>
            <Grid xs={5} container direction='column' justifyContent='center' alignItems='center'>
                <Typography>Hello</Typography>
            </Grid>

        </Grid>

        </Grid>
    </Box>
  )
}

export default SignUp
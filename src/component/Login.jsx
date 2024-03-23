import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Switch, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const [open,setOpen]=useState(false)
    const[otp,setOtp]=useState('')
    const navigate=useNavigate()
    
    const handleClickopen=()=>{
        setOpen(true)
    }

    const handleClose=()=>{
        setOpen(false)
    }
    const handleVarify =() =>{
        console.log(otp)
        setOpen(false)
        navigate('/aboutususer')
    }


    return (
    <Box sx={{backgroundColor:'white',height:'100%'}}>
        <Grid container direction='row' alignItems='center' justifyContent='space-between' paddingTop='200px'>
            
            <Grid xs={4} container direction='column' alignItems='center'>
                <Typography  fontSize='36px'>Welcome back</Typography>
                <Typography fontSize='18px'>Login into your account</Typography>
            </Grid>

            <Grid xs={4} container direction='column' p={0} >
                <Grid container direction='column'> 
                    <Typography  fontSize='22px' fontWeight='500'>Login in With Mobile No.</Typography>
                    <Typography  fontSize='17px'fontWeight='400' marginTop='13'>Enter your Mobile No.</Typography>
                    <TextField placeholder='+91' paddingTop='12px' sx={{width:'300px',height:'50px'}} />
                </Grid>
                <Grid container direction='column' alignItems='center' justifyContent='center'>
                        
                    <Button onClick={handleClickopen} variant='contained'  sx={{marginTop:'124px',width:'200px',height:'58px',bgcolor:'#ff258d', p:'10px',borderRadius:'25px'}}>Get Otp </Button>
                    <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>OTP Varification</DialogTitle>
                    <DialogContent>
                        <TextField label='Enter OTP'
                        type='number'
                        value={otp}
                        onChange={(e)=>setOtp(e.target.value)}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleVarify}>Varify</Button>
                    </DialogActions>
                    </Dialog>

                </Grid>
                
                
                <Grid paddingTop='38px' paddingLeft='50px' container direction='row' justifyContent='space-between'>
                    <Grid>
                    <Switch/>
                    <Button sx={{color:'#000'}}>Remember Me</Button>
                    </Grid>
                    <Button color='error'>Recover Password</Button>
                </Grid>
            </Grid>

            <Grid xs={4} container direction='column' alignItems='center'>
                <Grid container direction='row' justifyContent='center' alignItems='center'>
                    <Button variant='outlined' sx={{width:'33%',color:'#000',borderColor:'#000'}}>Log In</Button>
                </Grid>
                
                <Grid container  direction='row' justifyContent='center' >
                    <Typography typography='h6'>Don't have a account ?</Typography>
                    <Button  paddingRight='78px' sx={{color:'#ff258d'}}>Sign Up</Button>
                </Grid>
            </Grid>

        </Grid>
    </Box>
  )
}

export default Login
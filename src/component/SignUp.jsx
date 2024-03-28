import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
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
        <Grid container direction='column' >

        <Grid container  direction='row' alignItems='center' justifyContent='flex-end' >
                    <Typography sx={{fontSize:'20px'}}>Don't have a account ?</Typography>
                    <Button  sx={{color:'#ff258d',fontSize:'20px',padding:'0'}}>Sign In</Button>
        </Grid>

        <Grid container direction='row' alignItems='center' justifyContent='space-around' paddingTop='50px'>

            <Grid xs={5} container direction='column' justifyContent='center' alignItems='center' >
                <Typography fontSize='30px'>Get Started</Typography>
                <Typography fontSize='20px'>Getting Started is easy</Typography>

                <Typography fontSize='30px'>Sign up with Mobile Number</Typography>
                <Typography fontSize='20px'>Enter With Mobile No.</Typography>

                <TextField placeholder='+91' paddingTop='12px' sx={{width:'300px',height:'50px'}} />

                <Button onClick={handleClickopen} variant='contained'  sx={{marginTop:'25px',width:'200px',
                    height:'58px',bgcolor:'#ff258d',
                     p:'10px',borderRadius:'25px',
                     '&:hover':{bgcolor:'#ff258d',opacity:0.9}
                }}>Get Otp </Button>

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
            <Grid xs={5} container direction='column' justifyContent='center' alignItems='center'>
                <Typography>Continue with</Typography>
                <Button variant='outlined' sx={{marginY:'20px',backgroundColor:'#fff7ea',color:'black',border:'1px solid black',
                '&:hover':{backgroundColor:'#fff7ea',color:'black',border:'1px solid black',scale:'1.05'}
                }}>Sign up with Google</Button>
                <Button variant='outlined' sx={{marginY:'20px',backgroundColor:'#fff7ea',color:'black',border:'1px solid black',
                '&:hover':{backgroundColor:'#fff7ea',color:'black',border:'1px solid black',scale:'1.05'}
                }}>Sign up with Facebook</Button>
                <Button variant='outlined' sx={{marginY:'20px',backgroundColor:'#fff7ea',color:'black',border:'1px solid black',
                '&:hover':{backgroundColor:'#fff7ea',color:'black',border:'1px solid black',scale:'1.05'}
                }}>Sign up with Linkedin</Button>
            </Grid>

        </Grid>

        </Grid>
    </Box>
  )
}

export default SignUp
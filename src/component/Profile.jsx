import { Button, Grid, Typography } from '@mui/material'
import profile from '../images/profile.jpg'
import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <Grid xs={6} paddingY='10px' >
                    <Grid container direction='row' alignItems='center' justifyContent='space-around' backgroundColor='#fff7ea' padding='10px' width='90%' sx={{border:'2px soild #fff7ea', borderRadius:'10px' }}>
                        <Grid xs={4}>
                            <img src={profile} alt="profile" width='100%' height='100%'/>
                        </Grid>
                        <Grid xs={8} container direction='column' paddingX='10px' >
                            <Typography fontSize='30px'>Chinmay Kulkarni</Typography>
                            <Typography fontSize='26px'> Photograpgy</Typography>
                            <Typography fontSize='30px'>*****</Typography>
                            <Button component={Link} to='/photoinfo' variant='contained' sx={{width:'50%', borderLeft:'10px',color:'white',backgroundColor:'#ff258d'}}>Book</Button>
                        </Grid>
                    </Grid>
                </Grid>
  )
}

export default Profile
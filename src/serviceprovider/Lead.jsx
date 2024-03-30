import React from 'react'
import photo from '../images/leadsphoto.jpg'
import { Box, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Lead = () => {
  
  return (
    <Box   sx={{margin:'5px',backgroundColor:'#fff7ea',border:'1px solid #fff7ea',borderRadius:'25px'}}>
        <Grid component={Link} to='/clientinfo' xs={12} justifyContent='center' container direction='column' 
        padding='10px' elevation={4} sx={{textDecoration:'none',color:'black'}}>
                        <img src={photo} width='95%'  alt="Lead" />
                        <Typography fontSize='16px' paddingY='2px'>Name</Typography>
                        <Typography fontSize='24px' paddingY='2px'>Adity Raut</Typography>
                        <Typography fontSize='16px' paddingY='2px'>Requirement</Typography>
                        <Typography fontSize='24px' paddingY='2px'>PhotoGraphy</Typography>
        </Grid>
    </Box>
  )
}

export default Lead
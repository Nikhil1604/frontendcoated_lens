import React from 'react'
import photo from '../images/leadsphoto.jpg'
import { Box, Grid, Typography } from '@mui/material'

const Leads = () => {
  return (
    <Box>
        <Grid  container direction='column' padding='10px' margin='5px' sx={{border:'1px solid black'}}>
                        <img src={photo} alt="imggg" />
                        <Typography fontSize='16px' paddingY='5px'>Name</Typography>
                        <Typography fontSize='28px' paddingY='5px'>Adity Raut</Typography>
                        <Typography fontSize='16px' paddingY='5px'>Requirement</Typography>
                        <Typography fontSize='28px' paddingY='5px'>PhotoGraphy</Typography>
        </Grid>
    </Box>
  )
}

export default Leads
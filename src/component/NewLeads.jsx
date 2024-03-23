import React from 'react'
import Leads from './Leads'
import { Box, Grid, Typography } from '@mui/material'

const NewLeads = () => {
  return (
    <Box height='100%' backgroundColor='white'>
        <Grid container direction='column' >
                <Typography  paddingY='10px' fontSize='28px' paddingLeft='50px' color='white' backgroundColor='#ff258d'>
                    New Leads
                </Typography>
                
                <Grid container direction='row' paddingY='10px' paddingLeft='40px'>
                    <Leads />
                    <Leads />
                    <Leads />
                    <Leads />
                    <Leads />
                    <Leads />
                    <Leads />
                    <Leads />
                    <Leads />
                </Grid>


            </Grid>
    </Box>
  )
}

export default NewLeads
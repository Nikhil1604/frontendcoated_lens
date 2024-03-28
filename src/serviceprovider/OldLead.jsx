import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Lead from './Lead'


const Oldlead = () => {
  return (
    <Box height='100%' backgroundColor='white'>
        <Grid container direction='column' >
                <Typography  paddingY='10px' fontSize='28px' paddingLeft='50px' color='white' backgroundColor='#ff258d'>
                    Old Leads
                </Typography>
                
                <Grid xs={16} container direction='row' paddingY='10px' paddingLeft='40px'>
                  
                    <Grid xs={3}>
                    <Lead />
                    </Grid>

                    <Grid xs={3}>
                    <Lead />
                    </Grid>

                    <Grid xs={3}>
                    <Lead />
                    </Grid>

                    <Grid xs={3}>
                    <Lead />
                    </Grid>

                    <Grid xs={3}>
                    <Lead />
                    </Grid>

                    <Grid xs={3}>
                    <Lead />
                    </Grid>

                    <Grid xs={3}>
                    <Lead />
                    </Grid>

                    <Grid xs={3}>
                    <Lead />
                    </Grid>

                    <Grid xs={3}>
                    <Lead />
                    </Grid>

                    <Grid xs={3}>
                    <Lead />
                    </Grid>

                    <Grid xs={3}>
                    <Lead />
                    </Grid>

                    <Grid xs={3}>
                    <Lead />
                    </Grid>

                    <Grid xs={3}>
                    <Lead />
                    </Grid>

                    <Grid xs={3}>
                    <Lead />
                    </Grid>

                    <Grid xs={3}>
                    <Lead />
                    </Grid>

                    <Grid xs={3}>
                    <Lead />
                    </Grid>                    
                    
                </Grid>


            </Grid>
    </Box>
  )
}

export default Oldlead
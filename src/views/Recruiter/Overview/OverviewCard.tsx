import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const OverviewCard = () => {
  return (
    
        <Grid container>
            <Grid item xs={4}>
                <Box display="flex" >
                    <Typography variant="h1">Image</Typography>
                </Box>
            </Grid> 
            <Grid item xs={8}>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <Typography variant="h4">Content</Typography>
                </Box>
            </Grid>
        </Grid>
    
  )
}

export default OverviewCard
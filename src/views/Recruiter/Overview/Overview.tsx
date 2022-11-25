import { Box, Typography } from '@mui/material'
import React from 'react'
import Sidebar from '../../../components/Sidebar'
import { HomeContainer } from '../../../containers'
import OverviewCard from './OverviewCard'

const Overview = () => {
  return (
    <>
      <Sidebar/>
      <HomeContainer>
        
              <OverviewCard />        
        
      </HomeContainer>
    </>
  )
}

export default Overview
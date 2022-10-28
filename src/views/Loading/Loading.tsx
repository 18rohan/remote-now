import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import CenterBox from '../../containers/CenterBox'

const Loading = () => {
  return (
    <Box display="flex" justifyContent='center' alignItems="center" height="100vh">
        <Typography variant="h2" color="black">Loading...</Typography>
    </Box>
  )
}

export default Loading
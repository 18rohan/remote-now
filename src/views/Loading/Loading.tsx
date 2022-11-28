import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import CenterBox from '../../containers/CenterBox'
import {ReactComponent as LoadingAnimation} from "../../assets/loading.svg";

const Loading = () => {
  return (
    <Box display="flex" justifyContent='center' alignItems="center" height="100vh">
        <Typography variant="h2" color="black"><LoadingAnimation/></Typography>
    </Box>
  )
}

export default Loading
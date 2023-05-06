
import SideNav from '../components/SideNav'
import { Box, Typography } from '@mui/material'
import {Input, Button} from '@mui/joy/';
import VideoCallIcon from '@mui/icons-material/VideoCall';

export default function Cameras() {
  return (
    <>
        <Box sx={{ display: 'flex' }}>
            <SideNav/>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Input 
                
                size="sm"
                sx={{width: '50%', margin: 'auto'}}
                
                startDecorator={<VideoCallIcon />}
                 endDecorator={<Button>Add</Button>}/>
            </Box>
        </Box>
    </>
  )
}


import SideNav from '../components/SideNav'
import { Box, Grid, TextField, Typography } from '@mui/material'
import {Input, Button as ButtonJ} from '@mui/joy/';
import VideoCallIcon from '@mui/icons-material/VideoCall';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material';
import { useRef, useState } from 'react';
import CameraCard from '../components/CameraCard';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));





export default function Cameras() {

const [ipCameraArrays, setIpCameraArrays] = useState<string[]>([])   
const inputRef = useRef<HTMLInputElement>(null)
function handleClick():void{
    const inputValue = inputRef.current?.value;
    console.log(inputValue)
    if(inputValue){
        setIpCameraArrays([...ipCameraArrays, inputValue]);
        inputRef.current.value = '';
        console.log(ipCameraArrays);
    }
}


  return (
    <>
        <Box sx={{ display: 'flex' }}>
            <SideNav/>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <TextField inputRef={inputRef} sx={{width: '50%', margin: 'auto',mb: 2}}
                placeholder='Enter IP Camera URL'
                variant="outlined"
                size="small"
                
                ></TextField>
                 <ButtonJ  color="primary" onClick={handleClick}>
                    Add
                </ButtonJ>

               
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {ipCameraArrays.map((ipCamera, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                             {/* <Card sx={{ maxWidth: 400 }}>
                    <CardMedia
                        sx={{ height: 200 }}
                        image={ipCamera}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                        Beach
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <ButtonJ >Draw</ButtonJ>
                        <ButtonJ >Send</ButtonJ>
                    </CardActions>
                </Card> */}
                            <CameraCard url={ipCamera}/>
                        </Grid>
                    ))}

                </Grid>
            </Box>
        </Box>
    </>
  )
}

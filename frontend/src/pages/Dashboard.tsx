import NavBar from '../components/NavBar'
import SideNav from '../components/SideNav'
import { Box   } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail';



export default function Dashboard() {
  return (
    <>
        {/* <NavBar/>   */}
            <Box sx={{ display: 'flex' }}>
                <SideNav/>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                 <h1>Dashboar</h1>
                </Box>
            </Box>
    </>
  )
}

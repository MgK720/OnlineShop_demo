import {useState} from "react"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SignInForm from '../Authentication/SignInForm';

export default function NavBar({isLoggedIn, setIsLoggedIn}) {
    const [signInError, setSignInError] = useState({signTry: false, error: false});
    const [open, setOpen] = useState(false);

    const openSignInForm = () =>{
        setOpen(true);
    }
    const handleClose = () =>{
        setOpen(false);
    }
    const closeSignInComponent = () => {
        setTimeout(()=>{
            setOpen(false),
            setIsLoggedIn(true)
        }, 1000);
    }
    if(signInError.signTry && !signInError.error){
        closeSignInComponent();
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                OnlineShop
            </Typography>
            {!isLoggedIn ? <Box><Button color="inherit">Register</Button> <Button color="inherit" onClick={openSignInForm} size="small">Login</Button></Box> : <Button color="inherit">Account</Button> }
            </Toolbar>
        </AppBar>
        <SignInForm open={open} handleClose={handleClose} signInError={signInError} setSignInError={setSignInError} />
        </Box>
    );
}
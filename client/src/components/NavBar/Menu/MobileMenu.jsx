import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from "react"


export default function MobileMenu ({isLoggedIn, notAuthenticatedMenu, authenticatedMenu}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl)
    const handleClickMenu = (evt) =>{
        setAnchorEl(evt.currentTarget);
    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
      };
    const renderMenuMobile = (menuItemsArray) => (
        <MenuList>
            {menuItemsArray.map((e, index) => (
                <MenuItem key={index} onClick={() => {e.onClick();handleCloseMenu()}} sx={{textTransform: "uppercase", fontWeight:500}}>
                    <Button sx={{textTransform: "uppercase"}} startIcon={e.icon} fullWidth>
                        {e.name}
                    </Button>
                </MenuItem>
                )
            )}
        </MenuList>
    );
    return(
        <>
        <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                sx={{ display: { xs: 'flex', md: 'none'}}}
                onClick={handleClickMenu}
            >
                <MenuIcon />
        </IconButton>
        <Menu
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleCloseMenu}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
            >
            {!isLoggedIn ? <div>{renderMenuMobile(notAuthenticatedMenu)}</div> : <div>{renderMenuMobile(authenticatedMenu)}</div>}
        </Menu>
        </>
    );
}
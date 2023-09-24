import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function DesktopMenu ({isLoggedIn, notAuthenticatedMenu, authenticatedMenu}){
    const renderMenu = (menuItemsArray) => (
        <>
            {menuItemsArray.map((e, index) => (
                    <Button key={index} color="inherit" sx={{display: {xs: 'none', md:"flex"}, textTransform: "uppercase", flexDirection: "row" }} onClick={e.onClick} startIcon={e.icon}>
                        {e.name}
                    </Button>
                )
            )}
        </>
    );
    return(
        <Box sx={{display:'flex'}}>
            {!isLoggedIn ? renderMenu(notAuthenticatedMenu) : renderMenu(authenticatedMenu)}
        </Box>
    );
}
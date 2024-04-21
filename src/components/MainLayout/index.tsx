import React, {ReactNode, useState} from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DrawerComponent from '../DrawerMenu';

// Define an interface for the component props
interface MainLayoutProps {
    children: ReactNode; // ReactNode includes everything that can be rendered: React elements, strings, numbers, fragments, portals, etc.
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open: boolean) => {
        setDrawerOpen(open);
    };

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={() => toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <DrawerComponent open={drawerOpen} toggleDrawer={toggleDrawer} />
            <main className="p-4">
                {children}
            </main>
        </div>
    );
};

export default MainLayout;

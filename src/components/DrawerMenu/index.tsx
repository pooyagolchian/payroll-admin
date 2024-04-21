import * as React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';

type Props = {
    open: boolean;
    toggleDrawer: (open: boolean) => void;
};

const DrawerMenu: React.FC<Props> = ({ open, toggleDrawer }) => {
    return (
        <Drawer open={open} onClose={() => toggleDrawer(false)}>
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <InfoIcon />
                    </ListItemIcon>
                    <ListItemText primary="About" />
                </ListItem>
            </List>
        </Drawer>
    );
};

export default DrawerMenu;

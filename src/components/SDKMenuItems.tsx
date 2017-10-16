import * as React from 'react';
import Link from 'gatsby-link';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Gear from './icons/Gear';

export default ({ open }: { open: boolean }) => {
    return (
        <List>
            <ListItem className="title-nav-item">
                    <Gear styleHandle="logo" width="35px" height="35px" />
                    <ListItemText primary="TestTitle" />
            </ListItem>
        </List>
    );
};
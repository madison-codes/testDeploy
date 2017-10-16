import * as React from 'react';
import Link from 'gatsby-link';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Guide from './icons/Guide';

export default ({ open }: {open: boolean}) => {
    return (
        <List>
            <ListItem className="title-nav-item">
                <Guide styleHandle="logo" width="30px" height="30px" />
                <ListItemText primary="Test" />
            </ListItem>

            <ListItem button disabled={!open}>
                <Link to="/docs/guides/document">
                    <ListItemText inset secondary="Document" />
                </Link>
            </ListItem>
        </List>
    );
};
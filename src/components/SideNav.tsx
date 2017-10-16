import * as React from 'react';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import Link from 'gatsby-link';
import List, { ListItem, ListItemText } from 'material-ui/List';
import SDKMenuItems from './SDKMenuItems';
import GuideMenuItems from './GuideMenuItems';
import Discover from './icons/Discover';

export default ({ navOpen, toggle}: {navOpen: boolean, toggle: () => void }) => {
    return(
        <Paper className="side-nav-container" style={{ width: navOpen ? '240px' : '62px'}}>
            <IconButton onClick={toggle} className="title-nav-item">
                {navOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
            <Divider />
            <GuideMenuItems open={navOpen}/>
            <SDKMenuItems open={navOpen}/>
            <List>
                <ListItem className="title-nav-item">
                    <Discover styleHandle="logo" width="30px" height="30px" />
                    <ListItemText primary="More" />
                </ListItem>
            </List>
        </Paper>
    );
};
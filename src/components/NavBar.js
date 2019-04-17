import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography'
import { Home, Book, AccountBox } from '@material-ui/icons'
import MenuItem from '@material-ui/core/MenuItem';

function NavBar(props) {

    return (
        <List component="nav">
            <ListItem component="div" >

                {/* <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                    <MenuItem onClick="">Add New File</MenuItem>
                    </TypoGraphy>
                </ListItemText>


                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                    <MenuItem onClick="">Run</MenuItem>
                    </TypoGraphy>
                </ListItemText>

                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                    <MenuItem onClick="">Run</MenuItem>
                    </TypoGraphy>
                </ListItemText> */}
            </ListItem >

        </List>
    )
}


export default NavBar;
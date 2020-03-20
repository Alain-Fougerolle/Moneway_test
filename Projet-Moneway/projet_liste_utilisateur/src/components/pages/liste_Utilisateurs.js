import React, { Component } from 'react';

// React Route //
import { Link } from "react-router-dom";

// Import Material UI //
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// Import Material UI Icons //
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';

// Components //
import PopoverModif from "../components_page/modif_popover";


export default class Liste extends Component {

    render() {
        return (
            <Grid
                className="App-List"
                container
                direction="row"
                justify="center"
                alignItems="center"
            >

                <Paper className="Paper">
                    
                    {this.props.users
                        ? <List>
                            <h2>Listes des utilisateurs</h2>
                            {this.props.users.map(({ id, prenom, nom }) => (
                                <ListItem button key={id}>
                                    <Link to="/info">
                                        <ListItemIcon>
                                            <ArrowForwardIosOutlinedIcon color="primary" />
                                        </ListItemIcon>
                                    </Link>
                                    
                                    <ListItemText 
                                        className="listItemtext"
                                        onClick={() => { this.props.recupUser(id) }}
                                    >
                                        <Grid 
                                            container 
                                            direction="row"
                                            justify="space-between"
                                            alignItems="center"
                                        >
                                            <Link to="/info">
                                                <p>{prenom} {nom}</p>
                                            </Link>
                                            <PopoverModif />
                                        </Grid>
                                    </ListItemText>
                                </ListItem>
                             
                            ))}
                        </List>

                        : <p>Pas de connection a la bdd</p>
                    }
                </Paper>
            </Grid>
        );
    }
}
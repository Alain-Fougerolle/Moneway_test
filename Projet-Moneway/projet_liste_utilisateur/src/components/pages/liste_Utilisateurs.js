import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
import AccountBoxIcon from '@material-ui/icons/AccountBox';

// Components //
import PopoverModif from "../popover/modif_popover";

// Redux //
import { connect } from 'react-redux';

class Liste extends Component {

    render() {
        return (
            <Grid
                className="App-List"
                container
                direction="row"
                justify="center"
                alignItems="center"
            >

                {this.props.users
                    ? <List>
                        <h2 className="titreListeUser">Listes des utilisateurs</h2>
                        {this.props.users.map(({ id, prenom, nom }) => (
                            <Paper 
                                className="Paper" 
                                key={id} 
                                onClick={() => { this.props.recupUser(id) }}
                            >
                                <ListItem button>
                                    <Grid
                                        container
                                        direction="row"
                                        justify="space-between"
                                        alignItems="center"
                                        wrap="nowrap"
                                    >
                                        <Link to="/info" className="Link_Info">
                                            <ListItemIcon>
                                                <ArrowForwardIosOutlinedIcon color="primary" fontSize="large" />
                                            </ListItemIcon>
                                            <ListItemIcon>
                                                <AccountBoxIcon 
                                                    color={this.props.status.includes(id) ? "secondary" : "primary"} 
                                                    fontSize="large" 
                                                    className="AccountBoxIcon"
                                                />
                                            </ListItemIcon>

                                            <ListItemText className="listItemtext">
                                                <p className="paragrapheListe">{prenom} {nom}</p>
                                            </ListItemText>

                                        </Link>
                                        <PopoverModif />
                                    </Grid>
                                </ListItem>
                            </Paper>
                        ))}
                    </List>

                    : <p>Pas de connection a la bdd</p>
                }

            </Grid>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.status
    }
}

export default connect(mapStateToProps)(Liste)

Liste.propTypes = {
    recupUser: PropTypes.func,

    users: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.bool,
        PropTypes.arrayOf(PropTypes.object)
    ]),
};
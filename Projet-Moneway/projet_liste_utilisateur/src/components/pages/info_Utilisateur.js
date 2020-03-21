import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import Material UI //
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';

// Import Material UI Icons //
import AccountBoxIcon from '@material-ui/icons/AccountBox';

// Components //
import PopoverList from "../popover/list_popover";
import PopoverModif from "../popover/modif_popover";
import TableTransaction from "../table/table_transaction";

// Redux //
import { connect } from 'react-redux';


class Info extends Component {

    changeStatus = () => {

        const action = {
            type: "CHANGE_STATUS",
            value: this.props.user.id
        };

        this.props.dispatch(action);
    }

    render() {
        return (
            <Grid
                className="App-Info"
                container
                direction="row"
                justify="center"
                alignItems="center"
            >

                <Paper className="Paper">
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                    >
                        <PopoverList />
                        {this.props.user
                            ? <PopoverModif />
                            : <div></div>
                        }
                    </Grid>

                    {this.props.user
                        ? <section className="App-Section-Info">
                            <div className="titreInfo">
                                <AccountBoxIcon color={this.props.status.includes(this.props.user.id) ? "secondary" : "primary"} fontSize="large" />
                                <h2>{this.props.user.prenom} {this.props.user.nom}</h2>
                            </div>
                            <p><span className="InfoModifiable">Adresse : </span> {this.props.user.rue} {this.props.user.codePostal} {this.props.user.ville}</p>
                            <p><span className="InfoModifiable">email : </span> {this.props.user.email} </p>
                            <p><span className="InfoModifiable">tel : </span> {this.props.user.tel}</p>
                            <Switch
                                id="checkStatus"
                                name="checkStatus"
                                onChange={this.changeStatus}
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                                checked={this.props.status.includes(this.props.user.id) ? true : false} // garde active la position du switch pour chaque utilisateur a chaque si il est false ou true
                            />

                            {this.props.user.transaction.length > 1
                                ? <TableTransaction 
                                    transactions={this.props.user.transaction}
                                />

                                : <div>Pas de transactions</div>
                            }
                        </section>

                        : <p>Aucune Personne Sélectionner</p>
                    }
                </Paper>
            </Grid>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.status
    }
}

export default connect(mapStateToProps)(Info)

Info.propTypes = {
    user: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.object,

        PropTypes.shape({

            nom: PropTypes.string,
            prenom: PropTypes.string,
            rue: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string
            ]),

            codePostal: PropTypes.number,
            ville: PropTypes.string,
            email: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string
            ]),

            tel: PropTypes.number,
            transaction: PropTypes.arrayOf(PropTypes.object)
        }),
    ]),
};
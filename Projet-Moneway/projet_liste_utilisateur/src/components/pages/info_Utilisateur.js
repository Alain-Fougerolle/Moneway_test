import React, { Component } from 'react';

// Import Material UI //
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// Import Material UI Icons //
import EuroIcon from '@material-ui/icons/Euro';

// Components //
import PopoverList from "../components_page/list_popover";
import PopoverModif from "../components_page/modif_popover";


export default class Info extends Component {

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
                    <PopoverList />
                    <PopoverModif />

                    {this.props.user
                        ? <section className="App-Section-Info">
                            <h2>{this.props.user.prenom} {this.props.user.nom}</h2>
                            <p><span className="InfoModifiable">Adresse : </span> {this.props.user.rue} {this.props.user.codePostal} {this.props.user.ville}</p>
                            <p><span className="InfoModifiable">email : </span> {this.props.user.email} </p>
                            <p><span className="InfoModifiable">tel : </span> {this.props.user.tel}</p>

                            <h2 id="InfoTransaction">Transactions</h2>
                            {this.props.user.transaction.map(({ idT, dateT, montantT, lieuxT }) => (
                                <Typography component={'div'} key={idT}>
                                    {montantT
                                        ? <div>{montantT}<EuroIcon fontSize="small"/> le {dateT} à {lieuxT}</div>
                                    
                                        : <div>Pas de transactions</div>
                                    }
                                </Typography>
                            ))}
                        </section>

                        : <p>Aucune Personne Sélectionner</p>
                    }
                </Paper>
            </Grid>
        );
    }
}
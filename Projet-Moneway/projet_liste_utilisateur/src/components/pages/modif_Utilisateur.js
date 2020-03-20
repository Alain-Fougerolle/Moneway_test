import React, { Component } from 'react';

// React Route //
import { Link } from "react-router-dom";

// Import Material UI //
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

// Components //
import  PopoverList from "../components_page/list_popover";


export default class Modif extends Component {

    render() {
        return (
            <Grid
                className="App-Modif"
                container
                direction="row"
                justify="center"
                alignItems="center"
            >

                <Paper className="Paper">
                    <PopoverList />
                    <h2>Modification des informations</h2>
                    {this.props.user
                        ? <form id="formModifUser">
                            <Grid
                                className="App-Modif"
                                container
                                direction="row"
                                justify="space-around"
                                alignItems="center"
                            >
                                <div className="containerInput">
                                    <TextField className="textField" label="Prenom"      variant="outlined" name="prenom"     defaultValue={this.props.user.prenom} />
                                    <TextField className="textField" label="Nom"         variant="outlined" name="nom"        defaultValue={this.props.user.nom}/>
                                </div>

                                <div className="containerInput">
                                    <TextField className="textField" label="Rue"         variant="outlined" name="rue"        defaultValue={this.props.user.rue}/>
                                    <TextField className="textField" label="Code Postal" variant="outlined" name="codePostal" defaultValue={this.props.user.codePostal}/>
                                    <TextField className="textField" label="Ville"       variant="outlined" name="ville"      defaultValue={this.props.user.ville}/>
                                </div>

                                <div className="containerInput">
                                    <TextField className="textField" label="Email"       variant="outlined" name="email"      defaultValue={this.props.user.email}/>
                                    <TextField className="textField" label="Téléphone"   variant="outlined" name="tel"        defaultValue={this.props.user.tel}/>
                                </div>

                                <Link to="/info">
                                    <Button 
                                        id="buttonModifUser" 
                                        variant="contained" 
                                        color="primary"
                                        onClick={() => { this.enregistrerModif() }}
                                    >
                                        Enregistrer
                                    </Button>

                                    <Button
                                        id="buttonAnnulerUser"
                                        variant="contained"
                                        color="primary"
                                    >
                                        Annuler
                                    </Button>
                                </Link>
                            </Grid>
                        </form>

                        : <p>Aucune Personne Sélectionner</p>
                    }
                    
                </Paper>
            </Grid>
        );
    }

    enregistrerModif() {
        let formAdhesion = document.querySelector('#formModifUser');

        let objetModif = {
            id :         this.props.user.id,
            prenom :     formAdhesion.prenom.value,
            nom :        formAdhesion.nom.value,
            rue :        formAdhesion.rue.value,
            codePostal : formAdhesion.codePostal.value,
            ville :      formAdhesion.ville.value,
            email :      formAdhesion.email.value,
            tel :        formAdhesion.tel.value
        }

        this.props.socket.emit("modifUser", objetModif);
        this.props.miseAJourUsers(objetModif);
    }
}
// React
import React from 'react'
//Material
import { Grid, makeStyles } from '@material-ui/core';
//Images
import Logo from '../../images/logo.gif';




const Navbar = () => {

	const useStyles = makeStyles((theme) => ({
		container: {
			background: 'linear-gradient(to bottom, #005c97, #363795)'
		},
		LogoContainer: {
			textAlignLast: 'center'
		},
		Logo: {
			width: '20%',
			borderRadius: '20px',
			marginTop: '2%',
			[theme.breakpoints.down('sm')]: {
				width: '25%',
			},
			[theme.breakpoints.down('xs')]: {
				width: '30%',
			}
		},
		Title: {
			marginBlock: '2%',
			color: 'white',
			fontSize: '3em',
			textAlign: 'center',
			fontStyle: 'normal',
			fontFamily: 'cursive',
			textShadow: '2px 2px 10px #000',
			[theme.breakpoints.down('md')]: {
				fontSize: '2.5em',
			},
			[theme.breakpoints.down('sm')]: {
				fontSize: '2em',
			},
			[theme.breakpoints.down('xs')]: {
				fontSize: '1.5em',
			}


		},

	}));
	const classes = useStyles();
	return (
		<Grid container direction="row" className={classes.container}>
			<Grid item xs={12} className={classes.LogoContainer} >
				<img src={Logo} className={classes.Logo} />
			</Grid>
			<Grid item xs={12} className={classes.Title} >
				<p >Juego De Cartas</p>
			</Grid>
		</Grid>
	);
}

export default Navbar;
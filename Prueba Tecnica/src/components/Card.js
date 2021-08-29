import React, { useState, useEffect } from 'react';
import ReactCardFlip from 'react-card-flip';
import backFace from '../images/Cards/back.jpg';
import { Button, Grid, makeStyles } from '@material-ui/core';

const Card = ({ name, number, frontFace, flipCard, unflippedCards, disabledCards }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [hasEvent, setHasEvent] = useState(true);

  const [count, setCount] = useState(0);



  useEffect(() => {
    if (unflippedCards.includes(number)) {
      setTimeout(() => setIsFlipped(false), 700);
      setCount(count + 1);
    }

  }, [unflippedCards])

  useEffect(() => {
    if (disabledCards.includes(number)) {
      setHasEvent(false);
    }
  }, [disabledCards])

  const handleClick = e => {
    const value = flipCard(name, number);
    if (value !== 0) {
      setIsFlipped(!isFlipped);
    }
  }
  const useStyles = makeStyles((theme) => ({

    card: {
      display: 'inline-block',
      margin: '1%',
      cursor: 'pointer',
      width: '10%',
      textShadow: '2px 2px 10px #000',
      color: 'white',
      fontSize: '0.5vw',
      textAlign: 'center',
      fontStyle: 'normal',
      fontFamily: 'cursive',
      [theme.breakpoints.down('md')]: {
        width: '20%',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '0.7em',
      },
      [theme.breakpoints.down('xs')]: {
        width: '30%',
        fontSize: '0.5em',

      }
    },
    cardImage: {
      boxShadow: '2px 2px 10px #000',
      width: '10vw',
      height: '10vw',
      [theme.breakpoints.down('md')]: {
        width: '20vw',
        height: '20vw',
      },
      [theme.breakpoints.down('sm')]: {
        width: '20vw',
        height: '20vw',
      },
      [theme.breakpoints.down('xs')]: {
        width: '30vw',
        height: '30vw',
      },
    }

  }));
  const classes = useStyles();
  return (
    <Grid className={classes.card}>
      <ReactCardFlip isFlipped={isFlipped} >
        <img className={classes.cardImage} src={backFace} alt='back-face' onClick={hasEvent ? handleClick : null} />
        <img className={classes.cardImage} src={frontFace} alt='front-face' onClick={hasEvent ? handleClick : null} />
      </ReactCardFlip>
      <h1>Fallado: {count}</h1>
    </Grid>
  )
}

export default Card;

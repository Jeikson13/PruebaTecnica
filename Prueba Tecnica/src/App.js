import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import { Button, Grid, makeStyles } from '@material-ui/core';
import { images } from './import';

const App = () => {

  const [cards, setCards] = useState([]);
  const [firstCard, setFirstCard] = useState({});
  const [secondCard, setSecondCard] = useState({});

  const [unflippedCards, setUnflippedCards] = useState([]);
  const [disabledCards, setDisabledCards] = useState([]);
  const [a, setA] = useState(1);
  const [b, setB] = useState(0);

  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    window.location.reload();
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);



  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  useEffect(() => {
    shuffleArray(images);
    setCards(images);
  }, [])

  useEffect(() => {
    checkForMatch();
  }, [secondCard]);

  const flipCard = (name, number) => {
    if (firstCard.name === name && firstCard.number === number) {

      return 0;

    }
    if (!firstCard.name) {
      setFirstCard({ name, number });

    }
    else if (!secondCard.name) {
      setSecondCard({ name, number });
    }
    return 1;
  }

  const checkForMatch = () => {
    if (firstCard.name && secondCard.name) {
      const match = firstCard.name === secondCard.name;
      match ? disableCards() : unflipCards();
      if (a == 12) { setIsActive(false) }
      if (firstCard.name === secondCard.name) {
        setA(a + 1);
        console.log('una buena', a);
      } else {
        setB(b + 1);
        console.log('errores', b);
      }
    }
  }

  const disableCards = () => {
    setDisabledCards([firstCard.number, secondCard.number]);
    resetCards();
  };

  const unflipCards = () => {
    setUnflippedCards([firstCard.number, secondCard.number]);
    resetCards();
  };

  const resetCards = () => {
    setFirstCard({});
    setSecondCard({});
  };

  const useStyles = makeStyles((theme) => ({
    containerGame: {
      paddingBlock: '1em',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(to top, #005c97, #363795)',
      textShadow: '2px 2px 10px #000',
      color: 'white',
      fontSize: '1vw',
      textAlign: 'center',
      fontStyle: 'normal',
      fontFamily: 'cursive',
      [theme.breakpoints.down('md')]: {
        fontSize: '1em',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '0.7em',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.6em',
      },

    },
    card: {
      borderRadius: '15px',
      width: '10%',
    },
    playbtn: {
      marginBlock:'2em',
      backgroundColor: '#ffffff',
      fontSize: '1.5em ',
      marginInline: '2%',
      padding: '0.5em',
      borderRadius: '1em',
      width:'5em',
      [theme.breakpoints.down('md')]: {
        padding: '0.3em'
      },
    },

  }));


  const classes = useStyles();
  return (
    <Grid className={classes.containerGame}>
      <Grid>
        <h1>Fallas: {b}</h1>
        <h1>{seconds}s</h1>
        <Button className={classes.playbtn} onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </Button>
        <Button className={classes.playbtn} onClick={reset}>
          Reset
        </Button>
      </Grid>
      {
        cards.map((card, index) => (
          <Card
            className={classes.card}
            name={card.player}
            number={index}
            frontFace={card.src}
            flipCard={flipCard}
            unflippedCards={unflippedCards}
            disabledCards={disabledCards}
          />
        ))
      }
    </Grid>
  );

}

export default App;

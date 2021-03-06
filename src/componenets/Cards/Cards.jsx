import React,{useState,useEffect} from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from 'classnames';


function Cards({ data: { confirmed, recovered, deaths, lastUpdate },darkMode }) {

  const [darkTheme,setDarkTheme] = useState(false);
   
  useEffect(() => {
    if(darkMode === true){
        console.log('dark is true');
        setDarkTheme(true)
    }else{
     console.log('dark is false');
        setDarkTheme(false)
    }
    
 },[darkMode]);


  if (!confirmed) {
    return "LOADING....";
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
      <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.infected, darkTheme ? styles.dark : null)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={confirmed.value} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of active cases of COVID-19.
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.recovered,darkTheme ? styles.dark : null)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={recovered.value} duration={2.5} separator=","/>
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of Recoveries  from COVID-19.
              </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.deaths,darkTheme ? styles.dark : null)}>
          <CardContent>
          <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={deaths.value} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of deaths caused by COVID-19.
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}
export default Cards;

import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Text from "react-text";

const useStyles = makeStyles({
  card: {
    margin: 10,
    maxWidth: 320,
    minWidth: 200,
    width: 320,
    height: 410
  },
  media: {
    height: 250
  }
});

const CardControl = props => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={"/img/" + props.image}
        title={props.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          <Text id={props.title}></Text>
        </Typography>
        <Typography color="textSecondary" component="p">
          <Text id={props.content}></Text>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardControl;

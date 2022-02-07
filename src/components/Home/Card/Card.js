import Button from "@material-ui/core/Button";
import { default as MuiCard } from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const Card = ({ thumbnail, title, description }) => {
  const classes = useStyles();

  return (
    <>
      <MuiCard className={classes.root}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={thumbnail} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography
              noWrap
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Ver mais
          </Button>
        </CardActions>
      </MuiCard>
    </>
  );
};

export default Card;

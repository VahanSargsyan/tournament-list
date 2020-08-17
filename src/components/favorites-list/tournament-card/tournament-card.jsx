import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { IMAGE_API_ROOT } from "../../../constants/constants";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    margin: 5,
  },
});

export default function TournamentCard({ data, deleteFavorite }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={data.title}
          height="140"
          image={IMAGE_API_ROOT + data.images.banner.filePath}
          title={data.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() =>
            window.confirm("Do you realy want to delete this tournament") &&
            deleteFavorite(data.id)
          }
        >
          Remove tornament
        </Button>
      </CardActions>
    </Card>
  );
}

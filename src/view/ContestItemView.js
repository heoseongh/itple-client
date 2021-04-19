import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
    backgroundPosition: "top",
  },
  cardContent: {
    // height: "150px",
    // overflow: "hidden",
    flexGrow: 1,
  },
  href: {
    color: "inherit",
    textDecoration: "none",
  },
}));

function ContestItemView({ contest }) {
  const classes = useStyles();
  const { id, title, imageUrl, tags, summary, detail, createdAt } = contest;
  return (
    <Grid item key={id} xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia className={classes.cardMedia} image={imageUrl} />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography>{tags && tags.map((tag) => "#" + tag)}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            <Link
              className={classes.href}
              key={id}
              to={{
                pathname: `/detail/${id}`,
                state: {
                  title,
                  imageUrl,
                  tags,
                  summary,
                  detail,
                  createdAt,
                },
              }}
            >
              세부내용
            </Link>
          </Button>
          <Button size="small" color="primary">
            모집글
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default ContestItemView;

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

function Contest(props) {
  const {
    classes,
    id,
    title,
    imageUrl,
    tags,
    summary,
    detail,
    createdAt,
  } = props;

  return (
    <Grid item key={id} xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={imageUrl}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography>{tags}</Typography>
        </CardContent>
        <CardActions>
          <Link
            to={{
              pathname: `/detail/${id}`,
              state: {
                title: title,
                imageUrl: imageUrl,
                tags: tags,
                summary: summary,
                detail: detail,
                createdAt: createdAt,
              },
            }}
          >
            <Button size="small" color="primary">
              세부내용
            </Button>
          </Link>
          <Button size="small" color="primary">
            모집글
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Contest;

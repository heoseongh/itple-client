import { Container, Typography } from "@material-ui/core";
import React from "react";
import "../css/Home.css"

function DetailHeader({classes, contest}) {
  return (
    <div className={classes.header}>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h4"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          {contest.title}
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          {contest.tags.map((tag) => "#" + tag)}
        </Typography>
      </Container>
    </div>
  );
}

export default DetailHeader;

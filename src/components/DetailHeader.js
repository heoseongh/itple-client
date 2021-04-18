import { Container, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  header: {
    backgroundColor: "#fff",
    padding: (64, 0, 48),
  },
}));
function DetailHeader({title, tags}) {
  const classes = useStyle();
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
          {title}
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          {tags.map((tag) => "#" + tag)}
        </Typography>
      </Container>
    </div>
  );
}

export default DetailHeader;

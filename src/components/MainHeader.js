import { Button, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  header: {
    backgroundColor: "#fff",
    padding: (64, 0, 48),
  },
  heroButtons: {
    marginTop: 32,
  },
}));

function MainHeader() {
  const classes = useStyle();
  return (
    <div className={classes.header}>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          공모전 정보
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          자신에게 맞는 공모전 정보를 찾아보세요.
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="contained" color="primary">
                맞춤 공모전 찾기
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">
                전체 공모전
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default MainHeader;

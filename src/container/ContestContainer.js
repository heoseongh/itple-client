import { Container, Grid } from "@material-ui/core";
import React, { Component } from "react";
import ContestItemView from "../view/ContestItemView";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  cardGrid: {
    paddingTop: 64,
    paddingBottom: 64,
  },
};

class ContestContainer extends Component {
  render() {
    const { classes, contests } = this.props;
    
    return (
      <Container className={classes.cardGrid} maxWidth="lg">
        <Grid container spacing={4}>
          {/* 공모전 리스트 뿌려주기 */}
          {contests.map((contest) => {
            return <ContestItemView key={contest.id} contest={contest} />;
          })}
        </Grid>
      </Container>
    );
  }
}

export default withStyles(styles)(ContestContainer);

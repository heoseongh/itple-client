import {
  Button,
  Card,
  CardActions,
  CardMedia,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { Component } from "react";
import Copyright from "../components/Copyright";
import NavigationBar from "../components/NavigationBar";
import { withStyles } from "@material-ui/core";

/*== Material-ui custom CSS ==*/
const styles = {
  header: {
    backgroundColor: "#fff",
    padding: (64, 0, 48),
  },
  body: {
    padding: 24,
    background: "#eeeeee",
  },
  icon: {
    marginRight: 16,
  },
  heroButtons: {
    marginTop: 32,
  },
  cardGrid: {
    paddingTop: 64,
    paddingBottom: 64,
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: '100%', // 16:9
    backgroundPosition: 'top',
  },
  cardContent: {
    flexGrow: 1,
  },
  paper: {
    padding: 24,
    textAlign: 'left',
    color: "rgba(0, 0, 0, 0.87)",
  },
  summary: {
    textAlign: 'left',
  },
  footer: {
    backgroundColor: "#fff",
    padding: 48,
  },
};

class ContestDetail extends Component {
  render() {
    const {
      title,
      imageUrl,
      tags,
      summary,
      detail,
    } = this.props.location.state;
    const { classes } = this.props;
    return (
      <div>
        <React.Fragment>
          <NavigationBar />
          <main>
            {/* Header */}
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
                <Typography
                  variant="h5"
                  align="center"
                  color="textSecondary"
                  paragraph
                >
                  {tags.map((tag) => "#" + tag)}
                </Typography>
              </Container>
            </div>
            {/* End Header */}

            {/* Body */}
            <div className={classes.body}>
              <Container maxWidth="lg">
                <Grid container spacing={3}>
                  <Grid item lg={4} md={12} xs={12}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={imageUrl}
                      />
                      {/* <CardContent>D - {dday}</CardContent> */}
                      <CardActions>
                        <Button size="small" color="primary">
                          참여하기
                        </Button>
                        <Button size="small" color="primary">
                          북마크
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                  <Grid item lg={8} md={12} xs={12}>
                    <Paper className={classes.paper} variant="outlined" square>
                      <Typography component="h2" variant="h5" align="center">
                        개요
                      </Typography>
                      <h3>기관</h3>
                      {summary.기관}
                      <br />
                      <h3>상금</h3>
                      {summary.상금}
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper className={classes.paper} variant="outlined" square>
                      <Typography component="h2" variant="h5" align="center">
                        상세 정보
                      </Typography>
                      {/* <h3>대회일정</h3>
                      {splitedText.map((line) => {
                        return (
                          <span>
                            {line}
                            <br />
                          </span>
                        );
                      })}
                      <h3>마감기한</h3>
                      {contest.detail.마감기한} */}
                      <br />
                      <h3>상금</h3>
                      {detail.상금}
                      <br />
                      <h3>지원자격</h3>
                      {detail.지원자격}
                      <br />
                      <h3>홈페이지</h3>
                      {detail.홈페이지}
                    </Paper>
                  </Grid>
                </Grid>
              </Container>
            </div>
            {/* End Body */}
          </main>
          {/* Footer */}
          <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
              Footer
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              color="textSecondary"
              component="p"
            >
              Something here to give the footer a purpose!
            </Typography>
            <Copyright />
          </footer>
          {/* End footer */}
        </React.Fragment>
      </div>
    );
  }
}

export default withStyles(styles)(ContestDetail);

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  body: {
    padding: 24,
    background: "#eeeeee",
  },
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
    flexGrow: 1,
  },
  paper: {
    padding: 24,
    textAlign: "left",
    color: "rgba(0, 0, 0, 0.87)",
  },
}));

function ContestDetailContainer({ title, imageUrl, tags, summary, detail }) {
  const classes = useStyles();

  /*== 공모전 마감 날짜로 디데이 구하기 ==*/
  // 공모전 마감기한 숫자로 변환
  let strDeadline = detail.마감기한.split("-");
  let year = strDeadline[0];
  let month = strDeadline[1] - 1;
  let day = strDeadline[2];
  // 디데이 구하기
  let intDeadline = new Date(year, month, day);
  let today = new Date();
  let gap = intDeadline.getTime() - today.getTime();
  let dday = Math.ceil(gap / (1000 * 60 * 60 * 24));

  // 공모전 정보 개행 처리
  let text = detail.대회일정;
  let splitedText = text.split("\n");

  return (
    <div className={classes.body}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item lg={4} md={12} xs={12}>
            <Card className={classes.card}>
              <CardMedia className={classes.cardMedia} image={imageUrl} />
              <CardContent>D - {dday}</CardContent>
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
              <h3>대회일정</h3>
              {splitedText.map((line) => {
                return (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                );
              })}
              <h3>마감기한</h3>
              {detail.마감기한}
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
  );
}

export default ContestDetailContainer;

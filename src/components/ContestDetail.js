import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';

import NavigationBar from './NavigationBar';
import { Button, Card, CardActions, CardContent, CardMedia, Grid } from '@material-ui/core';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Itple
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

/*== 커스텀 스타일 ==*/
const useStyles = makeStyles((theme) => ({

  header: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },

  body: {
    padding: theme.spacing(3),
    background: '#eeeeee'
  },

  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '100%', // 16:9
    backgroundImage: `url(${contest.imageUrl})`,
    backgroundPosition: 'top',
  },
  cardContent: {
    flexGrow: 1,
  },

  paper: {
    padding: theme.spacing(3),
    textAlign: 'left',
    color: theme.palette.text.primary,
  },

  summary: {
    textAlign: 'left',
  },

  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

/*== 공모전 임시 데이터 ==*/
const contest = {
  id: "1",
  title: "네이버 채용 연계형 AI 프로젝트 챌린지 - COLVA AI RUSH",
  imageUrl: "https://cf-cpi.campuspick.com/activity/1616750365218479.jpg",
  tags: ["네이버","채용연계", "AI", "머신러닝", "python"],
  summary: {
    기관: "NAVER",
    상금:"15,000,000"
  },
  detail: {
    마감기한: "2021-04-16",
    지원자격: "머신러닝 모델링 개발에 관심있는 누구나",
    대회일정: "Round1 5월 17일(월) ~ 6월 4일(금)\n 16:00 Round2 6월 8일(화) ~ 7월 1일(목) 16:00",
    상금: "총 2억 원 상당의 상금\n 21년 여름 인턴 및 정규 채용 개발 직군\n 서류 및 코딩 테스트 면제",
    홈페이지: "campaign.naver.com/airush"
  },
  createdAt : Date(),
}

/*== 공모전 마감 날짜로 디데이 구하기 ==*/
// 공모전 마감기한 숫자로 변환
let strDeadline = contest.detail.마감기한.split("-");
let year = strDeadline[0];
let month = strDeadline[1] - 1;
let day = strDeadline[2];
// 디데이 구하기
let intDeadline = new Date(year, month, day);
let today = new Date();
let gap = intDeadline.getTime() - today.getTime()
let dday = Math.ceil(gap / (1000 * 60 * 60 * 24));

// 공모전 정보 개행 처리
let text = contest.detail.대회일정;
let splitedText = text.split('\n');

export default function ContestDetail() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <NavigationBar/>
      <main>
        {/* Header */}
        <div className={classes.header}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
              {contest.title}
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              {contest.tags.map(tag => "#"+tag)}
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
                  <CardMedia className={classes.cardMedia}/>
                  <CardContent>
                    D - {dday}
                  </CardContent>
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
                  <Typography component="h2" variant="h5" align="center">개요</Typography>
                  <h3>기관</h3>
                  {contest.summary.기관}<br/>
                  <h3>상금</h3>
                  {contest.summary.상금}
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper} variant="outlined" square>
                  <Typography component="h2" variant="h5" align="center">상세 정보</Typography>
                  <h3>대회일정</h3>
                  {splitedText.map(line => {
                    return (<span>{line}<br/></span>)
                  })}
                  <h3>마감기한</h3>
                  {contest.detail.마감기한}<br/>
                  <h3>상금</h3>
                  {contest.detail.상금}<br/>
                  <h3>지원자격</h3>
                  {contest.detail.지원자격}<br/>
                  <h3>홈페이지</h3>
                  {contest.detail.홈페이지}
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
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
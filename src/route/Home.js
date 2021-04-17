import React, { Component } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import NavigationBar from "../components/NavigationBar";
import Contest from "../components/Contest";
import HomeHeader from "../components/HomeHeader";
import Copyright from "../components/Copyright";

/*== 공모전 임시 데이터 ==*/
const contests = [
  {
    id: "1",
    title: "네이버 채용 연계형 AI 프로젝트 챌린지 - COLVA AI RUSH",
    imageUrl: "https://cf-cpi.campuspick.com/activity/1616750365218479.jpg",
    tags: ["네이버", "채용연계", "AI", "머신러닝", "python"],
    summary: {
      기관: "NAVER",
      상금: "15,000,000",
    },
    detail: {
      마감기한: "2021-04-16",
      지원자격: "머신러닝 모델링 개발에 관심있는 누구나",
      대회일정:
        "Round1 5월 17일(월) ~ 6월 4일(금)\n 16:00 Round2 6월 8일(화) ~ 7월 1일(목) 16:00",
      상금:
        "총 2억 원 상당의 상금\n 21년 여름 인턴 및 정규 채용 개발 직군\n 서류 및 코딩 테스트 면제",
      홈페이지: "campaign.naver.com/airush",
    },
    createdAt: Date(),
  },
  {
    id: "2",
    title: "스타트업 코딩 페스티벌 '스코페2021'개최",
    imageUrl: "https://cf-cpi.campuspick.com/activity/1614250305679746.jpg",
    tags: ["스타트업", "왓챠", "쏘카", "오늘의집", "마켓컬리", "코딩테스트"],
    summary: {
      기관: "왓챠,쏘카,오늘의집,마켓컬리,브랜디,번개장터",
      상금: "3,000,000",
    },
    detail: {
      마감기한: "2021-03-17",
      지원자격: "만 19세 이상 누구나",
      대회일정:
        "코딩대회 신청기간 : ~3.17(수)\n코딩대회 모의테스트 : 3.18(목) ~ 3.19(금)\n대회 결과 발표 : 4.2(금)\n시상 및 채용설명회 : 4.3(토)",
      상금: "3,000,000",
      홈페이지: "http://goor.me/scofe2021",
    },
    createdAt: Date(),
  },
  { id: 3, imageUrl: "https://source.unsplash.com/random" },
  { id: 4, imageUrl: "https://source.unsplash.com/random" },
  { id: 5, imageUrl: "https://source.unsplash.com/random" },
  { id: 6, imageUrl: "https://source.unsplash.com/random" },
  { id: 7, imageUrl: "https://source.unsplash.com/random" },
  { id: 8, imageUrl: "https://source.unsplash.com/random" },
  { id: 9, imageUrl: "https://source.unsplash.com/random" },
];

/*== Material-ui custom CSS ==*/
const styles = {
  header: {
    backgroundColor: "#fff",
    padding: (64, 0, 48),
  },
  body: {
    padding: 24,
    background: '#eeeeee'
  },
  // icon: {
  //   marginRight: 16,
  // },
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
    paddingTop: "56.25%", // 16:9
    backgroundPosition: 'top',
  },
  cardContent: {
    flexGrow: 1,
  },
  // paper: {
  //   padding: 24,
  //   textAlign: 'left',
  //   color: "rgba(0, 0, 0, 0.87)",
  // },
  // summary: {
  //   textAlign: 'left',
  // },
  footer: {
    backgroundColor: "#fff",
    padding: 48,
  },
};

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <React.Fragment>
          <NavigationBar />
          <main>
            {/* Header */}
            <HomeHeader classes={classes}/>
            {/* Body */}
            <Container className={classes.cardGrid} maxWidth="md">
              <Grid container spacing={4}>
                {contests.map((contest) => (
                  <Contest
                    classes={classes}
                    id={contest.id}
                    title={contest.title}
                    imageUrl={contest.imageUrl}
                    tags={contest.tags}
                    summary={contest.summary}
                    detail={contest.detail}
                    createAt={contest.createdAt}
                  />
                ))}
              </Grid>
            </Container>
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

export default withStyles(styles)(Home);
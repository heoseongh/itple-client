import React, { Component } from "react";
import ContestApi from "../api/contest.api";

/**
 * @class
 * @description * api로 공모전 전체를 조회해서 JSON으로 받아오고 state에 저장하는 기본 골격입니다. 여기서 api 테스트를 진행해봤습니다.
 * 이 페이지는 App.js 컴포넌트에서 다음의 코드를 통해 라우팅되어집니다.
 * @code <Route exact path={"/api"} component={ApiTestPage} />
 * @url http://localhost:3000/api 로 들어가시면 됩니다.
 * @notice 이 페이지는 테스트 용도이므로 활용되지 않으면 추후에 제거될 예정입니다.
 */
class ApiTestPage extends Component {
  state = {
    contests: [],
  };

  contestApi = new ContestApi();

  async getContest() {
    const contests = await this.contestApi.selectAll();
    this.setState({ contests });
    console.log(contests);
  }

  componentDidMount() {
    this.getContest();
  }

  render() {
    const contests = this.state.contests;

    return <div>{contests.map((contest) => contest.title)}</div>;
  }
}

export default ApiTestPage;




/**
 * @description
 * 다음의 주석은 초기에 임시 데이터로 JSON 파일을 만들어놓고 활용했던 코드입니다. 크게 달라진 점은 URL 부분이 리소스 경로가 아닌 저희의 장고 서버 URL로 변경되었습니다.
 */
/*=====================================================================
state = {
    contests: [],
  };

  getContests = async () => {
    const {
      data: { contests },
    } = await axios.get("http://localhost:3000/Data/contests.json");
    this.setState({ contests });
  };

  componentDidMount() {
    this.getContests();
  }
  =====================================================================*/

import React, { Component } from "react";
import NavigationBar from "../components/NavigationBar";
import MainHeader from "../components/MainHeader";
import ContestContainer from "../container/ContestContainer";
import Footer from "../components/Footer";
import ContestApi from "../api/contest.api";

class Home extends Component {
  state = {
    contests: [],
  };

  /**
   * @description * 공모전 api를 사용하기 위해 ContestApi 클래스를 생성한다.
   * ContestApi 컴포넌트를 임포트하고 new 를 통해서 인스턴스 객체를 생성해준다. 그러면 @method fetchAll @method fetch 와 같이 컴포넌트 내부에 선언되어있는 메서드들을 사용할 수 있다. 사용법은 다음과 같다. @use contestApi.fetchAll() @or contrestApi.fetch()
   */
  contestApi = new ContestApi();

  /**
   * @method
   * @feature * 공모전 전체 목록 받아와서 state에 할당.
   * @function fetchAll * 공모전 JSON 데이터를 받아오는 api 메서드
   * @function setState * 가져온 JSON 데이터를 현재 컴포넌트의 state에 할당해주는 메서드
   * setState({key:value}) 형태로 set 해주면 되는데, key 이름과 저장할 객체의 이름이 같기 때문에 그냥 setState({contests}) 라고 넣어주면 알아서 같은 이름의 key 값으로 들어간다. 
   */
  async getContests() {
    const contests = await this.contestApi.fetchAll();
    this.setState({contests});
}

  /**
   * @method
   * @feature * 첫 컴포넌트 렌더링을 마친 후에 공모전 정보를 화면에 뿌려준다.
   * @function componentDidMount * 리액트는 서버가 구동되고 컴포넌트들이 처음으로 렌더링된 직후에 내부적으로 componentDidMount 메서드에 작성된 코드를 실행한다.
   * @function getContests * 위에서 만들어놓은 JSON 데이터 받아오는 메서드
   */
  componentDidMount() {
    this.getContests();
  }

  /**
   * @method
   * @code : { contests } = this.state;
   * @description * 해당 컴포넌트의 state에서 앞서 저장해둔 contests 객체를 꺼낸다.
   * contests = this.state.contests 와 결과는 같다.
   */
  render() {
    const { contests } = this.state;
    return (
      <div>
        <React.Fragment>
          <NavigationBar setLoggedInState={this.props.setLoggedInState} isLoggedIn={this.props.isLoggedIn}/>
          <main>
            <MainHeader />
            <ContestContainer contests={contests} />
          </main>
          <Footer />
        </React.Fragment>
      </div>
    );
  }
}

export default Home;

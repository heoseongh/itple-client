import React, { Component } from "react";
import axios from "axios";
import NavigationBar from "../components/NavigationBar";
import MainHeader from "../components/MainHeader";
import ContestContainer from "../container/ContestContainer";
import Footer from "../components/Footer";

class Home extends Component {
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

  render() {
    const { contests } = this.state;
    return (
      <div>
        <React.Fragment>
          <NavigationBar />
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

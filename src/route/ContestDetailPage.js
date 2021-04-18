import React, { Component } from "react";
import NavigationBar from "../components/NavigationBar";
import DetailHeader from "../components/DetailHeader";
import Footer from "../components/Footer";
import ContestDetailContainer from "../container/ContestDetailContainer";

class ContestDetailPage extends Component {
  render() {
    const { id, title, imageUrl, tags } = this.props.location.state;
    const summary = this.props.location.state.summary[0];
    const detail = this.props.location.state.detail[0];

    return (
      <div>
        <React.Fragment>
          <NavigationBar />
          <main>
            <DetailHeader title={title} tags={tags} />
            <ContestDetailContainer
              id={id}
              title={title}
              imageUrl={imageUrl}
              tags={tags}
              summary={summary}
              detail={detail}
            />
          </main>
          <Footer />
        </React.Fragment>
      </div>
    );
  }
}

export default ContestDetailPage;

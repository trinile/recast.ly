// var App = () => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer currentVideo={exampleVideoData[0]} />
//     </div>
//     <div className="col-md-5">
//       <VideoList videos={ exampleVideoData }/>
//     </div>
//   </div>
// );

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: dummyVideoList,
      currentVideo: dummyVideo
    };
  }

  handleUserClick(currentVideo) {
    this.setState({
      currentVideo: currentVideo
    });
  }

  handleSearch(videoList, currentVideo) {
    this.setState({
      videoList: videoList,
      currentVideo: currentVideo
    });
  }

  render() {
    return (
      <div>
        <Nav onUserSearch={(this.handleSearch.bind(this))}/>
        <div className="col-md-7">
          <VideoPlayer currentVideo={this.state.currentVideo}/>
      </div>
      <div className="col-md-5">
        <VideoList videos={ this.state.videoList } onUserClick={this.handleUserClick.bind(this)}/>
      </div>
    </div>  
    );

  }
}

ReactDOM.render(<App/>, document.getElementById('app'));



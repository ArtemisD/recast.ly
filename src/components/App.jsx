class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: exampleVideoData[0],
      videoList: []
    };
  }

  componentDidMount(userInput) {
    this.props.searchYouTube({query: userInput, max: 5, key: YOUTUBE_API_KEY}, videos => {
      this.setState({
        currentVideo: videos[0],
        videoList: videos
      });
    });
  }

  onTitleClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  render() {
    return (
      <div>
        <Nav userInput={this.componentDidMount.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList clickHandler={this.onTitleClick.bind(this)} videos={this.state.videoList}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

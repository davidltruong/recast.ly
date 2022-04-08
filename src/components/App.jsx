import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js';


var getVideoData = function() {
  var randomIdx = Math.floor(Math.random() * exampleVideoData.length);
  return exampleVideoData[randomIdx];
};

var video = getVideoData();


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      video: exampleVideoData[0],
      input: ''
    };
    this.clickVideo = this.clickVideo.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    var that = this;
    this.props.searchYoutube('react', function (data) {
      that.setState({videos: data, video: data[0]});
    });
  }

  inputHandler(e) {
    var query = e.target.value.toLowerCase();
    this.setState({input: query});
    // searchYouTube(query);

  }

  handleSubmit() {
    var q = this.state.input;
    var test = searchYouTube(q);
    console.log(test);
  }

  clickVideo(e) {
    this.setState({video: e});
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em><Search query={this.inputHandler} sub={this.handleSubmit}/></em></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em><VideoPlayer video={this.state.video} /></em></h5></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos={this.state.videos} clickVideo={this.clickVideo}/></div>
          </div>
        </div>
      </div>
    );
  }




  changeVideo() {
    document.getElementsByClassName('.video-list-entry-title').attr('title', 'Item Added');
  }
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

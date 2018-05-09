import React from 'react';
import './style.css';
import env from './img/env.png';
import halfenv from './img/halenv.png';
import rings from './img/rings.png'

class App extends React.Component {
   constructor(props) {
    super(props);
    this.state = { imageStatus: "loading", imgLoading:true, imgError: false, render: false };
  }

  handleImageLoaded() {
    this.setState({ imageStatus: "loaded",  imgLoading:false, imgError: false });
  }

  handleImageErrored() {
    this.setState({ imageStatus: "failed to load",  imgLoading:false, imgError: true });
  }
  componentDidMount(){
    setTimeout(function() { //Start the timer
      this.setState({imageStatus: "loaded",  imgLoading:false, imgError: false, render: true}) //After 1 second, set render to true
  }.bind(this), 1000)
  }
  render() {
     if(this.state.imgError){
        alert(this.state.imgError);
    }
    if(this.state.imgLoading){
      return(
          <div className="container">
            <div className="item item-1"></div>
            <div className="item item-2"></div>
            <div className="item item-3"></div>
            <div className="item item-4"></div>
            <img src={env} alt="Envelop" className="display_none" />
          </div>
        )

    }
    else{
      return (
      <div className="main-container">
        <div className="env-container">
          <div className="env">
            <img src={env} alt="Envelop" onLoad={this.handleImageLoaded.bind(this)}
            onError={this.handleImageErrored.bind(this)} />
          </div>
          <div className="half-env">
            <img src={halfenv} alt="Envelop" onLoad={this.handleImageLoaded.bind(this)}
            onError={this.handleImageErrored.bind(this)} />
          </div>
          <div className="invitation-box">
            <div className="box-1">
              <img src={rings} alt="Ring" onLoad={this.handleImageLoaded.bind(this)}
            onError={this.handleImageErrored.bind(this)} />
            </div>
            <div className="box-2">
              <img src={rings} alt="Ring" onLoad={this.handleImageLoaded.bind(this)}
            onError={this.handleImageErrored.bind(this)} />
            </div>
          </div>
        </div>
      </div>
    );
    }
    
  }
}

export default App;

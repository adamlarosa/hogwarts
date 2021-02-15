import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Hogcard from './Hogcard'


class App extends Component {
  constructor(){
    super();
    this.state = {
      display: this.differentDisplays.all
    }
  }

  gButton = (e) => {
        if (this.state.display === this.differentDisplays.greased){
            this.setState({
                display: this.differentDisplays.all
            })
        } else {
            this.setState({
                display: this.differentDisplays.greased
            })
        }
  };

  fatButton = (e) => {
    if (this.state.display === this.differentDisplays.bigToSmall){
        this.setState({
            display: this.differentDisplays.all
        })
    } else {
        this.setState({
            display: this.differentDisplays.bigToSmall
        })
    }
  }

  differentDisplays = {
    blank: null, //used for troubleshooting

    all: hogs.map((hog, index) => { return < Hogcard key={index} hog={hog} /> }),
    
    greased: hogs.filter(hog => { 
        return hog.greased === true 
      }).map((hog, index) => {
        return < Hogcard key={index} hog={hog} />
      }),
    
    bigToSmall: hogs.sort((a,b) => (a.weight < b.weight) ? 1 : -1).map((hog, index) => {
      return < Hogcard key={index} hog={hog} />
    })
  }
  
 
  render() {
    return (
      <div className="App">
          < Nav fat={this.fatButton} grease={this.gButton} />
          <div className='ui grid container'>
              {this.state.display}
          </div>
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react'
import piggy from '../porco.png'

class Nav extends Component {
  render() {
	return (
		<div className="navWrapper">
			<button onClick={this.props.grease}className='gButton'>GREASE</button>
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
			<button onClick={this.props.fat} className='fatButton'>FAT</button>
		</div>
	)
  }
}

export default Nav

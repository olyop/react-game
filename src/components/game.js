// Import React
import React from 'react'

// Import CSS
import '../css/game.css'

class Game extends React.Component {
	
	constructor(props) {
		super(props)
		
		this.state = {
			top: 0,
			right: 0,
			bottom: 0,
			left: 0
		}
	}
	
	top() {
		this.setState(prevState => ({
			top: prevState.top++
		}))
	}
	
	right() {
		this.setState(prevState => ({
			right: prevState.right++
		}))
	}
	
	bottom() {
		this.setState(prevState => ({
			bottom: prevState.bottom++
		}))
	}
	
	left() {
		this.setState(prevState => ({
			left: prevState.left++
		}))
	}
	
	handleArrow(e) {
		
		if (e.key === 'w') { this.top }
		else if (e.key === 'd') { this.right }
		else if (e.key === 's') { this.bottom }
		else if (e.key === 'a') { this.left }
		else { console.log('Invalid Key') }
		
	}
	
	render() {
		
		let style = {
			top: this.state.top,
			right: this.state.right,
			bottom: this.state.bottom,
			left: this.state.left
		}
		
		return (
			<div className="game">
				
				<input
					onKeyPress={this.handleArrow} />
				
				<div
					className="game-box"
					style={style} />
				
			</div>
		)
	}
}

export default Game
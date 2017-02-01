import React from 'react'
import ReactDOM from 'react-dom'

// Import CSS
import 'normalize.css/normalize.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './index.css'

// Import Components
import Game from './components/game'

// Main App
class Index extends React.Component {
	render() {
		return (
			<div className="index">
				
				<Game />
				
			</div>
		)
	}
}

// Render to DOM
ReactDOM.render(
  <Index />,
  document.getElementById('root')
)
// Write your code here.
import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  renderScore = () => {
    const {currentScore, topScore, isGameOver} = this.props

    if (isGameOver) {
      return null
    }
    return (
      <div className="score-container">
        <p className="score">Score: {currentScore}</p>
        <p className="top-score">Top Score: {topScore}</p>
      </div>
    )
  }

  render() {
    return (
      <nav className="nav-bar-container">
        <div className="logo-score-container">
          <div className="logo-heading-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
              alt="gameLogo"
              className="logo-img"
            />
            <h1 className="logo-heading">Emoji Game</h1>
          </div>
          {this.renderScore()}
        </div>
      </nav>
    )
  }
}

export default NavBar

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    newEmojisList: [],
    isGameOver: false,
    topScore: 0,
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  restartGame = () => {
    this.setIsGameOver(false)
    this.setState({newEmojisList: []})
  }

  setIsGameOver = value => {
    this.setState({isGameOver: value})
  }

  setTopScore = currentScore => {
    const {topScore} = this.state

    if (currentScore > topScore) {
      this.setState({topScore: currentScore})
    }
  }

  finishGameAndSetTopScore = newScore => {
    this.setIsGameOver(true)
    this.setTopScore(newScore)
  }

  isEmojiClicked = emojiId => {
    const {newEmojisList} = this.state
    const {emojisList} = this.props

    if (newEmojisList.includes(emojiId)) {
      this.finishGameAndSetTopScore(newEmojisList.length)
    } else {
      if (emojisList.length - 1 === newEmojisList.length) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        newEmojisList: [...prevState.newEmojisList, emojiId],
      }))
    }
  }

  render() {
    const getShuffledEmojisList = this.shuffledEmojisList()
    const {isGameOver, topScore, newEmojisList} = this.state
    const {emojisList} = this.props
    return (
      <div className="app-container-card">
        <NavBar
          isGameOver={isGameOver}
          topScore={topScore}
          currentScore={newEmojisList.length}
        />
        <div className="emojis-game-card-container">
          {isGameOver ? (
            <WinOrLoseCard
              length={emojisList.length}
              score={newEmojisList.length}
              restartGame={this.restartGame}
            />
          ) : (
            <ul className="emojis-list-container">
              {getShuffledEmojisList.map(eachEmoji => (
                <EmojiCard
                  eachEmoji={eachEmoji}
                  key={eachEmoji.id}
                  isEmojiClicked={this.isEmojiClicked}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame

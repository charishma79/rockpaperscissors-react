import {Component} from 'react'

import ScoreItem from '../ScoreItem'
import RulesCardItem from '../RulesCardItem'

import {
  GameContainer,
  CustomButton,
  Image,
  UnorderedContainer,
  ResultContainer,
  GameResultContainer,
  GameViewContainer,
  ResultPara,
  PlayButton,
  GameResult,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class GameDisplayItem extends Component {
  state = {
    score: 0,
    isShow: true,
    newList: [choicesList[0], choicesList[1]],
    gameResult: '',
  }

  getResult = (item1, item2) => {
    if (item1.id === 'ROCK') {
      switch (item2.id) {
        case 'PAPER':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else if (item1.id === 'PAPER') {
      switch (item2.id) {
        case 'ROCK':
          return 'YOU WON'
        case 'SCISSORS':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (item2.id) {
        case 'ROCK':
          return 'YOU LOSE'
        case 'PAPER':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  onClickRockBtn = id => {
    const {score} = this.state
    const choice1 = choicesList.filter(each => each.id === id)
    const ourChoice = choice1[0]
    console.log(ourChoice)
    const choice2 = choicesList[Math.floor(Math.random() * choicesList.length)]
    const result = this.getResult(ourChoice, choice2)
    let newScore = score
    if (result === 'YOU WON') {
      newScore += 1
    } else if (result === 'YOU LOSE') {
      newScore -= 1
    } else {
      newScore = score
    }
    this.setState({
      score: newScore,
      isShow: false,
      newList: [ourChoice, choice2],
      gameResult: result,
    })
  }

  onClickRestart = () => {
    this.setState({isShow: true})
  }

  render() {
    const {score, isShow, newList, gameResult} = this.state
    return (
      <GameContainer>
        <ScoreItem score={score} />
        {isShow && (
          <UnorderedContainer>
            <CustomButton
              type="button"
              data-testid="rockButton"
              onClick={() => this.onClickRockBtn(choicesList[0].id)}
            >
              <Image src={choicesList[0].imageUrl} alt={choicesList[0].id} />
            </CustomButton>

            <CustomButton
              type="button"
              data-testid="scissorsButton"
              onClick={() => this.onClickRockBtn(choicesList[1].id)}
            >
              <Image src={choicesList[1].imageUrl} alt={choicesList[1].id} />
            </CustomButton>

            <CustomButton
              type="button"
              data-testid="paperButton"
              onClick={() => this.onClickRockBtn(choicesList[2].id)}
            >
              <Image src={choicesList[2].imageUrl} alt={choicesList[2].id} />
            </CustomButton>
          </UnorderedContainer>
        )}
        {!isShow && (
          <GameResultContainer>
            <ResultContainer>
              <GameViewContainer>
                <ResultPara>YOU</ResultPara>
                <Image src={newList[0].imageUrl} alt="your choice" />
              </GameViewContainer>
              <GameViewContainer>
                <ResultPara>OPPONENT</ResultPara>
                <Image src={newList[1].imageUrl} alt="opponent choice" />
              </GameViewContainer>
            </ResultContainer>
            <GameResult>{gameResult}</GameResult>
            <PlayButton type="button" onClick={this.onClickRestart}>
              Play Again
            </PlayButton>
          </GameResultContainer>
        )}

        <RulesCardItem />
      </GameContainer>
    )
  }
}

export default GameDisplayItem

import {Component} from 'react'

import {
  GameScoreContainer,
  MainHeading,
  ScoreContainer,
  Score,
  Value,
  ScoreViewContainer,
} from './styledComponents'

class ScoreItem extends Component {
  render() {
    const {score} = this.props
    return (
      <GameScoreContainer>
        <ScoreViewContainer>
          <MainHeading>
            ROCK <br /> PAPER <br />
            SCISSORS
          </MainHeading>
        </ScoreViewContainer>
        <ScoreContainer>
          <Score>Score</Score>
          <Value>{score}</Value>
        </ScoreContainer>
      </GameScoreContainer>
    )
  }
}

export default ScoreItem

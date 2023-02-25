import styled from 'styled-components'

export const GameScoreContainer = styled.div`
  background-color: transparent;
  min-height: 20vh;
  width: 80%;
  border: 1px solid #ffffff;
  padding-left: 25px;
  padding-right: 25px;
  border-radius: 8px;
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    min-height: 25vh;
  }
`
export const ScoreViewContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const MainHeading = styled.h1`
  color: #ffffff;
  font-family: Bree Serif;
  font-size: 20px;
  font-weight: 400;
  margin: 2px;
`

export const ScoreContainer = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  height: 18vh;
  width: 18%;

  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 767px) {
    width: 40%;
  }
`

export const Score = styled.p`
  color: #223a5f;
  font-family: Bree Serif;
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: 400;
`

export const Value = styled.p`
  color: #223a5f;
  font-family: Roboto;
  font-size: 45px;
  font-weight: 600;
  margin-top: 0px;
`

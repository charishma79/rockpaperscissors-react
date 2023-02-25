import styled from 'styled-components'

export const GameContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  width: 100vw;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const UnorderedContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  flex-wrap: wrap;
  margin-top: 120px;
  @media screen and (max-width: 767px) {
    max-width: 350px;
    margin-top: 70px;
  }
`

export const ListItem = styled.li`
  margin-right: 10px;
`

export const CustomButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
export const Image = styled.img`
  height: 250px;
  @media screen and (max-width: 767px) {
    height: 120px;
  }
`
export const ResultContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const GameViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 100px;
`
export const ResultPara = styled.p`
  color: #ffffff;
  font-family: Bree serif;
  font-weight: bold;
  font-size: 30px;
`
export const GameResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const GameResult = styled.p`
  color: #ffffff;
  font-family: Roboto;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 15px;
`

export const PlayButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  border: none;
  outline: none;
  cursor: pointer;
  font-family: Bree serif;
  font-size: 16px;
  font-weight: 600;
  height: 45px;
  padding: 10px;
  width: 160px;
  border-radius: 10px;
  margin-top: 0px;
`

import styled from 'styled-components'

export const PopupContainer = styled.div`
  align-self: flex-end;
  padding: 10px;
  @media screen and (max-width: 576px) {
    margin-bottom: 40px;
  }
`

export const RulesContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  min-height: 50vh;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 20px;
  padding-bottom: 20px;
  @media screen and (max-width: 767px) {
    min-height: 10px;

    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
`
export const RulesButton = styled.button`
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
  width: 100px;
  margin-top: 40px;
  border-radius: 10px;
`

export const Img = styled.img`
  height: 500px;
  @media screen and (max-width: 767px) {
    height: 200px;
  }
`

export const PopUpButton = styled.button`
  background-color: transparent;
  border: none;
  align-self: flex-end;
  margin-bottom: 10px;
`

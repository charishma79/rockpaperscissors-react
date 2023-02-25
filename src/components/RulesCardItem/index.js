import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import 'reactjs-popup/dist/index.css'

import {
  PopupContainer,
  RulesButton,
  RulesContainer,
  Img,
  PopUpButton,
} from './styledComponents'

const RulesCardItem = () => (
  <PopupContainer>
    <Popup modal trigger={<RulesButton type="button">Rules</RulesButton>}>
      {close => (
        <RulesContainer>
          <PopUpButton type="button" onClick={() => close()}>
            <RiCloseLine />
          </PopUpButton>

          <Img
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
          />
        </RulesContainer>
      )}
    </Popup>
  </PopupContainer>
)

export default RulesCardItem

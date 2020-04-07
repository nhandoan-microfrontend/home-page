import styled from 'styled-components';
import Constants from '../../constants';

export const ButtonWrapper = styled.button`
  background-color: ${Constants.COLOR.SECONDARY_COLOR};
  outline: none;
  font-size: ${props => props.fontSize || '1.15rem'};
  color: ${props => props.color || 'white'};
  padding : ${props=> props.padding || '15px 25px'};
  border-radius: 8px;
  border: 2px #9e3f08 solid;
  cursor: pointer;
  font-weight: bold;
  transition: .15s all ease;
  &:hover{
    background-color: ${Constants.COLOR.SECONDARY_ACTIVE_COLOR};

  }
`
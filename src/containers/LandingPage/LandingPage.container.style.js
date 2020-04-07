import styled from 'styled-components';
import Constants from '../../constants';

export const LandingPageWrapper = styled.div`
  background-color: ${Constants.COLOR.PRIMARY_COLOR};
  color: white;
  display: flex;
  padding: 20px;
  align-items: center;

`

export const LandingPageTitle = styled.div`
  width: 50%;
  h1{
    font-size: 3rem;
    margin-bottom: 15px;
  }

  &>p{
    margin-bottom: 15px;
  }

  &>div{
    text-align: center;
  }
`

export const SampleWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
`